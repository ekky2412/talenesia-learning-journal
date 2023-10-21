import React, { useState } from 'react'

import {
  CAvatar,
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

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const Peserta = () => {
  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      city: 'Jakarta',
      progress: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      gender: { name: 'Female', icon: cilUserFemale },
      activity: '10 sec ago',
      delete: { name: 'Delete', icon: cilTrash },
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      city: 'Bandung',
      progress: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      gender: { name: 'Male', icon: cilUser },
      activity: '5 minutes ago',
      delete: { name: 'Delete', icon: cilTrash },
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      city: 'Makassar',
      progress: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      gender: { name: 'Male', icon: cilUser },
      activity: '1 hour ago',
      delete: { name: 'Delete', icon: cilTrash },
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      city: 'Solo',
      progress: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      gender: { name: 'Female', icon: cilUserFemale },
      activity: 'Last month',
      delete: { name: 'Delete', icon: cilTrash },
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      city: 'Medan',
      progress: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      gender: { name: 'Female', icon: cilUserFemale },
      activity: 'Last week',
      delete: { name: 'Delete', icon: cilTrash },
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      city: 'Aceh',
      progress: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      gender: { name: 'Male', icon: cilUser },
      activity: 'Last week',
      delete: { name: 'Delete', icon: cilTrash },
    },
  ]

  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Daftar Peserta</CCardHeader>
            <CCardBody>
              <CButton color="primary" className="mb-2" onClick={() => setVisibleAdd(!visibleAdd)}>
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
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <CCol md={4}>
                      <CFormInput
                        type="text"
                        defaultValue="Mark"
                        feedbackValid="Looks good!"
                        id="validationCustom01"
                        label="First name"
                        required
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormInput
                        type="text"
                        defaultValue="Otto"
                        feedbackValid="Looks good!"
                        id="validationCustom02"
                        label="Last name"
                        required
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationCustomUsername">Email</CFormLabel>
                      <CInputGroup className="has-validation">
                        <CFormInput
                          type="email"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          feedbackValid="Must be 8-20 characters long."
                          aria-describedby="exampleFormControlInputHelpInline"
                          required
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol md={4}>
                      <CFormSelect
                        aria-describedby="validationCustom04Feedback"
                        feedbackInvalid="Please select a valid gender."
                        id="validationCustom04"
                        label="Gender"
                        required
                      >
                        <option disabled>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md={8}>
                      <CFormInput
                        type="text"
                        aria-describedby="validationCustom03Feedback"
                        feedbackInvalid="Please provide a valid city."
                        id="validationCustom03"
                        label="City"
                        required
                      />
                    </CCol>
                  </CForm>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleAdd(false)}>
                    Close
                  </CButton>
                  <CButton color="primary">Add</CButton>
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
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <a href={`peserta/${item.user.name}`}>{item.user.name}</a>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{item.city}</strong>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.progress.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.progress.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.progress.color} value={item.progress.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          className={item.gender.name === 'Female' ? 'text-danger' : 'text-info'}
                          size="xl"
                          icon={item.gender.icon}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CButton color="light" onClick={() => setVisibleDelete(!visibleDelete)}>
                          <CIcon className="text-danger" size="xl" icon={item.delete.icon} />
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
                            <p>Apakah anda yakin ingin menghapus {item.user.name}?</p>
                          </CModalBody>
                          <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                              Close
                            </CButton>
                            <CButton color="danger">Delete</CButton>
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
