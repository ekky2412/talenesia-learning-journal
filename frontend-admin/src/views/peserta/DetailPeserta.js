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
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import avatar from '../../assets/images/avatars/1.jpg'

const DetailPeserta = () => {
  // Gunakan useParams dari react-router untuk mendapatkan id peserta dari URL
  const { id } = useParams()

  const progressGroupExample1 = [
    { title: 'Tema1', value1: 34 },
    { title: 'Tema2', value1: 56 },
    { title: 'Tema3', value1: 12 },
    { title: 'Tema4', value1: 43 },
    { title: 'Tema5', value1: 22 },
    { title: 'Tema6', value1: 88 },
    { title: 'Tema7', value1: 57 },
    { title: 'Tema8', value1: 9 },
  ]

  // Buat objek peserta untuk menampilkan detail
  const peserta = {
    nama: `${id}`,
    email: id,
    avatar: { id },
    detail: `Informasi lebih lanjut tentang Peserta ${id}`,
  }

  const phoneNumber = '1234567890'

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Profil {peserta.nama}</strong>
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
              <CImage align="center" rounded src={avatar} width={200} height={200} />
            </div>
            <CForm>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>Email</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="email" id="inputEmail3" disabled defaultValue={peserta.email} />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputUsername" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>Username</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="text" id="inputUsername" />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputBirthday" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>Birthday</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="date" id="inputBirthday" />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputGender" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>Gender</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="text" id="inputGender" />
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
                  <CFormInput type="text" id="inputEducation" />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputCity" className="col-sm-2 offset-sm-1 col-form-label">
                  <strong>City</strong>
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="text" id="inputCity" />
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
                  <CFormInput type="tel" id="inputPhoneNumber" />
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
                {progressGroupExample1.map((item, index) => (
                  <div className="progress-group mb-5" key={index}>
                    <div className="progress-group-prepend">
                      <span className="text-medium-emphasis large">
                        <Link to={`../jurnal/${item.title.toLowerCase()}`}>{item.title}</Link>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress thin color="info" value={item.value1} />
                      <div>
                        <strong>{item.value1}%</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default DetailPeserta
