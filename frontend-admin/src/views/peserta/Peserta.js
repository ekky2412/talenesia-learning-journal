import React, { useEffect, useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilPlus, cilTrash, cilUser, cilUserFemale } from '@coreui/icons'

import { Link, useNavigate } from 'react-router-dom'
import { apiUrl } from '../../config'
import { averageProgressUser, getRandomColor } from 'src/utils/helper'

const Peserta = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [userProgress, setUserProgress] = useState({})
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    birthday: '',
    education: '',
    gender: '',
    city: '',
    phoneNo: '',
  })
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)
  const [validated, setValidated] = useState(false)

  const getUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/users`)
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteClick = (user) => {
    setUserToDelete(user)
    setVisibleDelete(true)
  }

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/users/delete/${userToDelete._id}`, {
        method: 'POST',
      })

      if (response.ok) {
        alert('User deleted successfully')
        setVisibleDelete(false)
        getUsers()
      } else {
        alert('Failed to delete user')
      }
    } catch (error) {
      alert('Error deleting user:', error)
    }
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()

    if (form.checkValidity()) {
      // Form is valid, proceed with API call
      try {
        const response = await fetch(`${apiUrl}/api/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
            email: formData.email,
            userType: 'user',
            birthday: formData.birthday,
            education: formData.education,
            city: formData.city,
            gender: formData.gender,
            phoneNo: formData.phoneNo,
          }),
        })

        if (response.ok) {
          setVisibleAdd(false)
          alert('User added successfully!')
        } else {
          alert('Error adding user:', response.statusText)
        }
      } catch (error) {
        alert('Error adding user:', error.message)
      }
    }
    getUsers()
    setValidated(true)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        const progressData = {}
        await Promise.all(
          users.map(async (user) => {
            const avgProgress = await averageProgressUser(user.username)
            progressData[user.username] = Math.round(avgProgress)
          }),
        )
        setUserProgress(progressData)
      } catch (error) {
        console.error('Error fetching user progress in component:', error)
      }
    }

    fetchUserProgress()
  }, [users])

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')

    if (!authToken) {
      navigate('/login')
    }
  }, [navigate])

  const filteredUsers = users.filter((user) => user.userType === 'user')

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Daftar Peserta</CCardHeader>
            <CCardBody>
              <CButton color="primary" className="mb-4" onClick={() => setVisibleAdd(!visibleAdd)}>
                <CIcon icon={cilPlus} className="me-2" />
                Tambah Peserta
              </CButton>
              <CModal
                scrollable
                visible={visibleAdd}
                onClose={() => setVisibleAdd(false)}
                aria-labelledby="ScrollingLongContentExampleLabel2"
              >
                <CModalHeader>
                  <CModalTitle id="ScrollingLongContentExampleLabel2">Tambah Peserta</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CForm
                    className="row g-3 needs-validation"
                    id="userForm"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <CCol md={12}>
                      <CFormLabel htmlFor="validationCustomEmail">Email</CFormLabel>
                      <CInputGroup className="has-validation">
                        <CFormInput
                          type="email"
                          id="email"
                          name="email"
                          placeholder="name@example.com"
                          feedbackValid="Must be 8-20 characters long."
                          aria-describedby="exampleFormControlInputHelpInline"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol md={12}>
                      <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
                      <CInputGroup className="has-validation">
                        <CFormInput
                          type="text"
                          feedbackValid="Looks good!"
                          id="username"
                          name="username"
                          placeholder="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol md={12}>
                      <CFormLabel htmlFor="validationCustomUsername">Password</CFormLabel>
                      <CInputGroup className="has-validation">
                        <CFormInput
                          type="password"
                          id="password"
                          name="password"
                          placeholder="password"
                          feedbackValid="Must be 8-20 characters long."
                          aria-describedby="exampleFormControlInputHelpInline"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol md={6}>
                      <CFormSelect
                        aria-describedby="validationCustom04Feedback"
                        feedbackInvalid="Please select a valid education."
                        id="education"
                        name="education"
                        label="Education"
                        value={formData.education}
                        onChange={handleChange}
                      >
                        <option disabled>Choose...</option>
                        <option value="SMA/SMK">SMA/SMK</option>
                        <option value="D1">D1</option>
                        <option value="D2">D2</option>
                        <option value="D3">D3</option>
                        <option value="D4">D4</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md={6}>
                      <CFormInput
                        type="date"
                        aria-describedby="validationCustom03Feedback"
                        feedbackInvalid="Please provide a valid birthday."
                        id="birthday"
                        name="birthday"
                        label="Birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormSelect
                        aria-describedby="validationCustom04Feedback"
                        feedbackInvalid="Please select a valid gender."
                        id="gender"
                        name="gender"
                        label="Gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option disabled>Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md={8}>
                      <CFormInput
                        type="text"
                        aria-describedby="validationCustom03Feedback"
                        feedbackInvalid="Please provide a valid city."
                        id="city"
                        name="city"
                        label="City"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol md={12}>
                      <CFormInput
                        type="tel"
                        aria-describedby="validationCustom03Feedback"
                        feedbackInvalid="Please provide a valid phone."
                        id="phoneNo"
                        name="phoneNo"
                        label="Phone Number"
                        value={formData.phoneNo}
                        onChange={handleChange}
                      />
                    </CCol>
                  </CForm>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleAdd(false)}>
                    Close
                  </CButton>
                  <CButton color="primary" type="submit" form="userForm">
                    Add
                  </CButton>
                </CModalFooter>
              </CModal>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Peserta</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">City</CTableHeaderCell>
                    <CTableHeaderCell>Progress</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Gender</CTableHeaderCell>
                    {/* <CTableHeaderCell>Activity</CTableHeaderCell> */}
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {filteredUsers.map((user) => (
                    <CTableRow v-for="item in tableItems" user={user} key={user.username}>
                      <CTableDataCell className="text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <div
                            className="rounded-circle text-white"
                            style={{
                              width: '2rem',
                              height: '2rem',
                              backgroundColor: getRandomColor(),
                            }}
                          >
                            {user.username.charAt(0).toUpperCase()}
                          </div>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <Link to={`../admin/peserta/${user.username}`}>{user.username}</Link>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{user.city}</strong>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>
                          <strong>{userProgress[user.username]}%</strong>
                        </div>
                        <CProgress thin color="info" value={userProgress[user.username]} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          className={user.gender === 'Female' ? 'text-danger' : 'text-info'}
                          size="xl"
                          icon={user.gender === 'Female' ? cilUserFemale : cilUser}
                        />
                      </CTableDataCell>
                      {/* <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{user.activity}</strong>
                      </CTableDataCell> */}
                      <CTableDataCell className="text-center">
                        <CButton color="light" onClick={() => handleDeleteClick(user)}>
                          <CIcon className="text-danger" size="xl" icon={cilTrash} />
                        </CButton>
                        <CModal
                          visible={visibleDelete}
                          onClose={() => setVisibleDelete(false)}
                          aria-labelledby="LiveDemoExampleLabel"
                        >
                          <CModalHeader onClose={() => setVisibleDelete(false)}>
                            <CModalTitle id="LiveDemoExampleLabel">Hapus Peserta</CModalTitle>
                          </CModalHeader>
                          <CModalBody>
                            {userToDelete && (
                              <p>Apakah anda yakin ingin menghapus {userToDelete.username}?</p>
                            )}
                          </CModalBody>
                          <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                              Close
                            </CButton>
                            <CButton color="danger" onClick={handleDeleteConfirm}>
                              Delete
                            </CButton>
                          </CModalFooter>
                        </CModal>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Peserta
