import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CForm, CFormInput, CFormLabel, CFormSelect, CRow, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CCol } from '@coreui/react'
const TopUpSaldo = () => {
  return (
    <CCard style={{ border: "1px solid #FD841F" }}>
        <CCardHeader style={{ background: "#FD841F", color: "#fff", fontWeight: "bold" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h5>Top Up Saldo</h5>
                </div>
         </CCardHeader>
         <CCardBody>
            <CRow>
                <CCol md={6}>
                    <CCard style={{border : "1px solid #DEF5E5"}}>
                        <CCardHeader style={{background : "#DEF5E5", border : "none", color : "#379237"}}>Detail Item</CCardHeader>
                        <CCardBody>
                            <CTable>
                                <CTableHead>
                                <CTableRow>
                                 <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                                 <CTableHeaderCell scope="col">Nominal</CTableHeaderCell>
                                </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableDataCell>Top up saldo</CTableDataCell>
                                        <CTableDataCell>300,000</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>Biaya Layanan</CTableDataCell>
                                        <CTableDataCell>6,500</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <h3 style={{marginTop : "20px", fontSize : "20px", textAlign : "right"}}>Total : <span style={{fontSize : "20px"}}>306,500</span></h3>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol md={6}>
                    <CCard style={{ border: "1px solid #FF7D7D" }}>
                        <CCardHeader style={{background : "#FF7D7D", color : "white"}}>
                            Informasi VA Pembayaran
                        </CCardHeader>
                        <CCardBody>
                            <CForm>
                                <CFormLabel>Kategori</CFormLabel>
                                <CFormInput type='text' value="Top Up Saldo" disabled/>
                                <div className='mt-2'>
                                    <CRow>
                                        <CCol md={4}>
                                        <CFormLabel>Bank</CFormLabel>
                                        <CFormInput type='text' value="BNI" disabled/>
                                        </CCol>
                                        <CCol md={8}>
                                        <CFormLabel>No VA</CFormLabel>
                                        <CFormInput type='text' value="719361710269" disabled/>
                                        </CCol>
                                    </CRow>
                                </div>
                                <div className='mt-2'>
                                    <CRow>
                                        <CCol md={6}>
                                        <CFormLabel>Nominal Transfer</CFormLabel>
                                        <CFormInput type='text' value="306,500" disabled/>
                                        </CCol>
                                        <CCol md={6}>
                                        <CFormLabel>Tanggal Expired</CFormLabel>
                                        <CFormInput type='text' value="Dummy" disabled/>
                                        </CCol>
                                    </CRow>
                                </div>
                                <div className='mt-4'>
                                    <CRow>
                                        <CCol md={6}>
                                        <CButton style={{background : "#FEB139",width : "210px",height : "40px" ,color : "white", textAlign : "center", border : "none", borderRadius : "0px"}}>Cara Transfer</CButton>
                                        </CCol>
                                        <CCol md={6}>
                                        <CButton style={{background : "#DC0000",width : "210px",height : "40px" ,color : "white", textAlign : "center", border : "none", borderRadius : "0px"}}>Batalkan Pembayaran</CButton>
                                        </CCol>
                                    </CRow>
                                </div>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
         </CCardBody>
    </CCard>
  )
}

export default TopUpSaldo