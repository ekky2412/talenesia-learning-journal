import React, { useEffect, useState } from 'react'

import {
  CCard,
  CCardBody,
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilPeople, cilXCircle } from '@coreui/icons'

import { apiUrl } from 'src/config'
import { getRandomColor } from 'src/utils/helper'
import { useNavigate } from 'react-router-dom'

const Tema3 = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [progressData, setProgressData] = useState({})

  const getUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/users`)
      const data = await response.json()
      setUsers(data)

      // Fetch progress data for each user
      data.forEach(async (user) => {
        const progressResponse = await fetch(`${apiUrl}/api/progress/peserta/${user.username}/3`)
        const progressData = await progressResponse.json()
        setProgressData((prevData) => ({
          ...prevData,
          [user.username]: progressData,
        }))
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

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
            <CCardHeader>Judul Tema 3</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Peserta</CTableHeaderCell>
                    <CTableHeaderCell>Progress</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Pertanyaan 1</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Pertanyaan 2</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Pertanyaan 3</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Pertanyaan 4</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Pertanyaan 5</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Pertanyaan 6</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {filteredUsers.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
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
                            {item.username.charAt(0).toUpperCase()}
                          </div>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <a href={`../admin/peserta/${item.username}`}>{item.username}</a>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{progressData[item.username]?.percentage || 0}%</strong>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color="info"
                          value={progressData[item.username]?.percentage || 0}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon className="text-success" size="xl" icon={cilCheckCircle} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon className="text-success" size="xl" icon={cilCheckCircle} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon className="text-success" size="xl" icon={cilCheckCircle} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon className="text-danger" size="xl" icon={cilXCircle} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon className="text-danger" size="xl" icon={cilXCircle} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon className="text-danger" size="xl" icon={cilXCircle} />
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

export default Tema3
