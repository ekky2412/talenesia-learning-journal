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

import { Link, useNavigate } from 'react-router-dom'
import { apiUrl } from 'src/config'
import { averageProgressUser, calculateStatistics, getRandomColor } from 'src/utils/helper'

const Dashboard = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [progress, setProgress] = useState([])
  const [userProgress, setUserProgress] = useState({})

  const getUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/users`)
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getProgress = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/progress/tema`)
      const data = await response.json()
      setProgress(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
    getProgress()
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

  const { totalParticipants, maleParticipants, femaleParticipants } = calculateStatistics(users)
  const averageProgress = progress.length
    ? progress.reduce((acc, theme) => acc + theme.percentage, 0) / progress.length
    : 0
  const filteredUsers = users.filter((user) => user.userType === 'user')

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
          value={`${averageProgress.toFixed(2)}%`}
          title="Avg. Progress"
          progress={{ color: 'success', value: averageProgress.toFixed(2) }}
        />
      </CCardGroup>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Progress Peserta</CCardHeader>
            <CCardBody>
              <CRow className="justify-content-center">
                <CCol xs={10} md={10} xl={10} className="pt-5">
                  {progress.map((item, index) => (
                    <div className="progress-group mb-5" key={index}>
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
                    {/* <CTableHeaderCell>Activity</CTableHeaderCell> */}
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
                      <CTableDataCell>
                        <div>
                          <strong>{userProgress[user.username]}%</strong>
                        </div>
                        <CProgress thin color="info" value={userProgress[user.username]} />
                      </CTableDataCell>
                      {/* <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{user.activity}</strong>
                      </CTableDataCell> */}
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
