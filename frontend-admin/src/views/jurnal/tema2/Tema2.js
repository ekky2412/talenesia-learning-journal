import React from 'react'

import {
  CAvatar,
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
import { cilCheckCircle, cilPeople, cilUser, cilUserFemale, cilXCircle } from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const Tema2 = () => {
  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      progress: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      gender: { name: 'Female', icon: cilUserFemale },
      pertanyaan: {
        pertanyaan1: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan2: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan3: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan4: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan5: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan6: {
          name: 'Belum',
          icon: cilXCircle,
        },
      },
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      progress: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      gender: { name: 'Male', icon: cilUser },
      pertanyaan: {
        pertanyaan1: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan2: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan3: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan4: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan5: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan6: {
          name: 'Belum',
          icon: cilXCircle,
        },
      },
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      progress: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      gender: { name: 'Male', icon: cilUser },
      pertanyaan: {
        pertanyaan1: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan2: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan3: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan4: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan5: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan6: {
          name: 'Belum',
          icon: cilXCircle,
        },
      },
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      city: 'Solo',
      progress: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      gender: { name: 'Female', icon: cilUserFemale },
      pertanyaan: {
        pertanyaan1: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan2: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan3: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan4: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan5: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan6: {
          name: 'Belum',
          icon: cilXCircle,
        },
      },
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      progress: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      gender: { name: 'Female', icon: cilUserFemale },
      pertanyaan: {
        pertanyaan1: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan2: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan3: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan4: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan5: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan6: {
          name: 'Belum',
          icon: cilXCircle,
        },
      },
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      progress: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      gender: { name: 'Male', icon: cilUser },
      pertanyaan: {
        pertanyaan1: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan2: {
          name: 'Selesai',
          icon: cilCheckCircle,
        },
        pertanyaan3: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan4: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan5: {
          name: 'Belum',
          icon: cilXCircle,
        },
        pertanyaan6: {
          name: 'Belum',
          icon: cilXCircle,
        },
      },
    },
  ]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Judul Tema 2</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Peserta</CTableHeaderCell>
                    <CTableHeaderCell>Progress</CTableHeaderCell>
                    <CTableHeaderCell>Pertanyaan 1</CTableHeaderCell>
                    <CTableHeaderCell>Pertanyaan 2</CTableHeaderCell>
                    <CTableHeaderCell>Pertanyaan 3</CTableHeaderCell>
                    <CTableHeaderCell>Pertanyaan 4</CTableHeaderCell>
                    <CTableHeaderCell>Pertanyaan 5</CTableHeaderCell>
                    <CTableHeaderCell>Pertanyaan 6</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <a href={`../admin/peserta/${item.user.name}`}>{item.user.name}</a>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.progress.value}%</strong>
                          </div>
                        </div>
                        <CProgress thin color={item.progress.color} value={item.progress.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          className={
                            item.pertanyaan.pertanyaan1.name === 'Selesai'
                              ? 'text-success'
                              : 'text-danger'
                          }
                          size="xl"
                          icon={item.pertanyaan.pertanyaan1.icon}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          className={
                            item.pertanyaan.pertanyaan2.name === 'Selesai'
                              ? 'text-success'
                              : 'text-danger'
                          }
                          size="xl"
                          icon={item.pertanyaan.pertanyaan2.icon}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          className={
                            item.pertanyaan.pertanyaan3.name === 'Selesai'
                              ? 'text-success'
                              : 'text-danger'
                          }
                          size="xl"
                          icon={item.pertanyaan.pertanyaan3.icon}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          className={
                            item.pertanyaan.pertanyaan4.name === 'Selesai'
                              ? 'text-success'
                              : 'text-danger'
                          }
                          size="xl"
                          icon={item.pertanyaan.pertanyaan4.icon}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          className={
                            item.pertanyaan.pertanyaan5.name === 'Selesai'
                              ? 'text-success'
                              : 'text-danger'
                          }
                          size="xl"
                          icon={item.pertanyaan.pertanyaan5.icon}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          className={
                            item.pertanyaan.pertanyaan6.name === 'Selesai'
                              ? 'text-success'
                              : 'text-danger'
                          }
                          size="xl"
                          icon={item.pertanyaan.pertanyaan6.icon}
                        />
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

export default Tema2
