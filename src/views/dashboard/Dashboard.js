import React from 'react'

import {
  
  CCol,
  CRow,
} from '@coreui/react'


import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import WhatsAppInfo from './dashboardComponent/WhatsAppInfo'
import WaMenu from './dashboardComponent/WaMenu'
import QrCode from './dashboardComponent/QrCode'
import RegisterUser from './dashboardComponent/RegisterUser'
import Outbox from './dashboardComponent/Outbox'
const Dashboard = () => {
  
  return (
    <>
     
      <CRow>
      {/* <CCol md={3}>
          <WhatsAppInfo/>
          <CCol className='mt-4'>
              <WaMenu/>
          </CCol>
          <CCol className='mt-4 mb-4'>
              <QrCode/>
          </CCol>
      </CCol> */}
      <CCol md={12}>
          {/* <RegisterUser/> */}
          <div style={{marginTop : "30px"}}>
              <Outbox/>
          </div>
      </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
