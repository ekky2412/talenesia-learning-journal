import React, { useEffect, useState } from 'react'

import {
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
import { cilPeople, cilUser, cilUserFemale, cilSpeedometer } from '@coreui/icons'

import { Link } from 'react-router-dom'
import { apiUrl } from 'src/config'
import { calculateStatistics, getRandomColor } from 'src/utils/helper'

const Dashboard = () => {
  // const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
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

  const { totalParticipants, maleParticipants, femaleParticipants, averageProgress } =
    calculateStatistics(users)

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

  return (
    <>
      <CCardGroup className="mb-4">
        <CWidgetStatsC
          icon={<CIcon icon={cilPeople} height={36} />}
          value={totalParticipants}
          title="Total Peserta"
          progress={{ color: 'primary', value: 100 }}
        />
        <CWidgetStatsC
          icon={<CIcon icon={cilUser} height={36} />}
          value={maleParticipants}
          title="Peserta Laki-laki"
          progress={{ color: 'info', value: (maleParticipants / totalParticipants) * 100 }}
        />
        <CWidgetStatsC
          icon={<CIcon icon={cilUserFemale} height={36} />}
          value={femaleParticipants}
          title="Peserta Perempuan"
          progress={{ color: 'danger', value: (femaleParticipants / totalParticipants) * 100 }}
        />
        <CWidgetStatsC
          icon={<CIcon icon={cilSpeedometer} height={36} />}
          value={`${averageProgress}%`}
          title="Avg. Progress"
          progress={{ color: 'success', value: { averageProgress } }}
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
                      <CTableDataCell>
                        <div>
                          <strong>70%</strong>
                        </div>
                        <CProgress thin color="info" value="70" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{user.activity}</strong>
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
