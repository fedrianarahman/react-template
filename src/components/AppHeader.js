import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CBadge,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu, cilDollar, cilLoopCircular, cilPhone, cilMoney } from '@coreui/icons'
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { IoCallSharp } from "react-icons/io5";
import { logo } from '../assets/brand/logo';
import jwtDecode from 'jwt-decode';
import ModalTopUp from './header/ModalTopUp';
import ModalIframe from './header/ModalIframe'
const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const whatsAppInfo = useSelector((state) => state.whatsAppInfo)
  const token = jwtDecode(useSelector((state => state.token)));

  const [params, setParams] = useState({
    show : false,
    modalTitle : "Top Up Saldo",
    textBtn : "cek",

  });

  const handleClick = () => {
    setParams({...params, show  : true})
  }
  const handleClose = () =>{
    setParams({...params, show : false})
  }
  // useEffect(()=>{
  //   fetchData()
  // }, []);

  // const fetchData = async () =>{
  //     const response1 = await ApiService.post(`/wa/get-state-server`, {id : token.id});
  //     console.log("line 41", response1.config);
  // }


  // console.log("line 28 token : ", token);
  return (
    <>
      <div>{(params.show) ? <div><ModalTopUp show={params.show} onHide={handleClose} modalTitle={params.modalTitle} textBtn={params.modalButton}   noWhatsApp={whatsAppInfo.whatsappNumber}/></div> : ''}</div>
      {/* <div>{(params.show) ? <div><ModalIframe show={params.show} onHide={handleClose} /></div> : ''}</div> */}
      <CHeader position="sticky" className="mb-4">
        <CContainer fluid>
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderBrand className="mx-auto d-md-none" to="/">
            <CIcon icon={logo} height={48} alt="Logo" />
          </CHeaderBrand>
          <CHeaderNav className="d-none d-md-flex me-auto">
            <CNavItem>
              <CNavLink to="/dashboard" component={NavLink}>
                {whatsAppInfo.nama}
              </CNavLink>
            </CNavItem>
            {/* <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem> */}
            {/* <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}
          </CHeaderNav>
          <CHeaderNav>
            <CNavItem >
              <CNavLink href="#" >
                {/* <CIcon icon={cilDollar} size="lg" style={{color : "green"}}/> */}
                Saldo :
                <span style={{ fontSize: "16px" }}> Rp.{whatsAppInfo.saldoTopup}.00</span>
                <CIcon icon={cilLoopCircular} style={{ marginLeft: "7px", color: "black" }} />
              </CNavLink>
            </CNavItem>
            <CNavItem >
              <CButton size='sm' style={{ marginTop: "5px", background: "#379237", border: "none" }} onClick={handleClick}>Top Up saldo <CIcon icon={cilMoney} style={{ marginLeft: "7px", color: "white" }} /></CButton>
            </CNavItem>
            <CNavItem className='ml-4'>
              <CNavLink href="#">
                Status :
                <IoCallSharp style={{ marginLeft: "12px", background: "green", padding: "3px", color: "white", borderRadius: "50%" }} size={20} />
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
          <CHeaderNav className="ms-3">
            <AppHeaderDropdown />
          </CHeaderNav>
        </CContainer>
        <CHeaderDivider />
      </CHeader>
    </>
  )
}

export default AppHeader
