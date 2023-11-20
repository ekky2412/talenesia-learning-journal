import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CImage,
  CProgress,
  CRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { apiUrl } from 'src/config'

const DetailPeserta = () => {
  const navigate = useNavigate()
  const { username } = useParams()
  const [userDetail, setUserDetail] = useState({})
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
  const [progress, setProgress] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${apiUrl}/api/users/update/${userDetail._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username || userDetail.username,
          password: userDetail.password,
          email: userDetail.email,
          userType: 'user',
          birthday: formData.birthday || userDetail.birthday,
          education: formData.education || userDetail.education,
          city: formData.city || userDetail.city,
          gender: formData.gender || userDetail.gender,
          phoneNo: formData.phoneNo || userDetail.phoneNo,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const responseData = await response.json()

      getUserDetail()
      alert('User updated successfully', responseData)
    } catch (error) {
      alert('Error updating user', error.message)
    }
  }

  const getUserDetail = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${username}`)
      const data = await response.json()
      setUserDetail(data[0])
    } catch (error) {
      console.log(error)
    }
  }

  const getUserProgress = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/progress/peserta/${username}`)
      const data = await response.json()
      setProgress(data.data || [])
    } catch (error) {
      console.error('Error fetching user progress:', error)
    }
  }

  useEffect(() => {
    getUserDetail()
    getUserProgress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')

    if (!authToken) {
      navigate('/login')
    }
  }, [navigate])

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${userDetail.phoneNo}`
    window.open(whatsappLink, '_blank')
  }

  const formattedBirthday = userDetail.birthday
    ? new Date(userDetail.birthday).toISOString().split('T')[0]
    : ''

  return (
    <>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Profil {userDetail.username}</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-3">
              <CCol xs="auto" className="ms-auto">
                <CButton type="button" onClick={handleWhatsAppClick} color="success">
                  Chat via WhatsApp
                </CButton>
              </CCol>
            </CRow>
            <div className="clearfix mb-5">
              <CImage
                align="center"
                rounded
                src={`https://ui-avatars.com/api/?name=${username}&length=1&background=43c4fb&size=200`}
                width={200}
                height={200}
              />
            </div>
            <CForm onSubmit={handleFormSubmit}>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>Email</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="email"
                    id="inputEmail"
                    name="email"
                    disabled
                    defaultValue={userDetail.email}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputUsername" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>Username</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="text"
                    id="inputUsername"
                    name="username"
                    defaultValue={userDetail.username}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputBirthday" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>Birthday</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="date"
                    id="inputBirthday"
                    name="birthday"
                    defaultValue={formattedBirthday}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputGender" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>Gender</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="text"
                    id="inputGender"
                    name="gender"
                    defaultValue={userDetail.gender}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="inputEducation"
                  className="col-sm-2 offset-sm-1 col-form-label"
                >
                  <strong>Education</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="text"
                    id="inputEducation"
                    name="education"
                    defaultValue={userDetail.education}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputCity" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>City</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="text"
                    id="inputCity"
                    name="city"
                    defaultValue={userDetail.city}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-5">
                <CFormLabel
                  htmlFor="inputPhoneNumber"
                  className="col-sm-2 offset-sm-1 col-form-label"
                >
                  <strong>Phone Number</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="tel"
                    id="inputPhoneNumber"
                    name="phoneNo"
                    defaultValue={userDetail.phoneNo}
                    onChange={handleInputChange}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol xs="auto" className="ms-auto">
                  <CButton type="submit">Simpan Perubahan</CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardBody>
            <h1 className="text-center mb-5">Progress</h1>
            <CRow className="justify-content-center">
              <CCol xs={10} md={10} xl={10}>
                {progress.map((item, username) => (
                  <div className="progress-group mb-5" key={username}>
                    <div className="progress-group-prepend">
                      <span className="text-medium-emphasis large">
                        <Link to={`../jurnal/tema${item.theme}`}>Tema {item.theme}</Link>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress thin color="info" value={item.percentage} />
                      <div>
                        <strong>{item.percentage}%</strong>
                      </div>
                    </div>
                  </div>
                ))}
                {/* {Object.keys(themeProgress).length === 0 ? (
                  <div className="text-center">
                    <h1>Belum ada jurnal yang dikerjakan.</h1>
                  </div>
                ) : (
                  Object.keys(themeProgress).map((theme, index) => (
                    <div className="progress-group mb-5" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis large">
                          <Link to={`../jurnal/${theme.toLowerCase()}`}>{theme}</Link>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={themeProgress[theme].progress} />
                        <div>
                          <strong>{`${themeProgress[theme].progress}%`}</strong>
                        </div>
                      </div>
                    </div>
                  ))
                )} */}
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default DetailPeserta
