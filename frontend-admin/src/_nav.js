import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBook, cilPeople, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: 'admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Peserta',
    to: 'admin/peserta',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Jurnal',
    to: '/jurnal',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Tema 1',
        to: '/jurnal/tema1',
      },
      {
        component: CNavItem,
        name: 'Tema 2',
        to: '/jurnal/tema2',
      },
      {
        component: CNavItem,
        name: 'Tema 3',
        to: '/jurnal/tema3',
      },
    ],
  },
]

export default _nav
