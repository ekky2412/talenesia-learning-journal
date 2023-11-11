import React from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsC,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilSpeedometer,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  // const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

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

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <CCardGroup className="mb-4">
        <CWidgetStatsC
          icon={<CIcon icon={cilPeople} height={36} />}
          value="87.500"
          title="Total Peserta"
          progress={{ color: 'primary', value: 100 }}
        />
        <CWidgetStatsC
          icon={<CIcon icon={cilUser} height={36} />}
          value="385"
          title="Peserta Laki-laki"
          progress={{ color: 'info', value: 75 }}
        />
        <CWidgetStatsC
          icon={<CIcon icon={cilUserFemale} height={36} />}
          value="1238"
          title="Peserta Perempuan"
          progress={{ color: 'danger', value: 75 }}
        />
        <CWidgetStatsC
          icon={<CIcon icon={cilSpeedometer} height={36} />}
          value="75%"
          title="Avg. Progress"
          progress={{ color: 'success', value: 75 }}
        />
      </CCardGroup>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Progress Peserta</CCardHeader>
            <CCardBody>
              <CRow className="justify-content-center">
                <CCol xs={10} md={10} xl={10} className="pt-5">
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

              <br />

              {/* Bagian Tabel */}

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell>Progress</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <Link to={`../admin/peserta/${item.user.name}`}>{item.user.name}</Link>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>
                          <strong>{item.usage.value}%</strong>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
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

export default Dashboard
