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

import { Link } from 'react-router-dom'
import { apiUrl } from '../../config'
import { getRandomColor } from 'src/utils/helper'

const Peserta = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/users`)
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)
  const [validated, setValidated] = useState(false)

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
        console.log('User deleted successfully')
        setVisibleDelete(false)
        getUsers()
      } else {
        console.error('Failed to delete user')
      }
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    gender: '',
    city: '',
  })

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
            userType: 'user', // You can customize this based on your requirements
            birthday: null, // Optional: Add birthday if available
            education: null, // Optional: Add education if available
            city: formData.city,
            gender: formData.gender,
            phoneNo: null, // Optional: Add phone number if available
          }),
        })

        if (response.ok) {
          // API call successful, handle the response as needed
          console.log('User added successfully!')
          setVisibleAdd(false)
        } else {
          // API call failed, handle the error
          console.error('Error adding user:', response.statusText)
        }
      } catch (error) {
        console.error('Error adding user:', error.message)
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
                    <CCol md={4}>
                      <CFormSelect
                        aria-describedby="validationCustom04Feedback"
                        feedbackInvalid="Please select a valid gender."
                        id="gender"
                        name="gender"
                        label="Gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
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
                        required
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
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map((user) => (
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
                          <strong>70%</strong>
                        </div>
                        <CProgress thin color="info" value="70" />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          className={user.gender === 'Female' ? 'text-danger' : 'text-info'}
                          size="xl"
                          icon={user.gender === 'Female' ? cilUserFemale : cilUser}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{user.activity}</strong>
                      </CTableDataCell>
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
