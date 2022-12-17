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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu, cilDollar, cilLoopCircular, cilPhone } from '@coreui/icons'
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { IoCallSharp } from "react-icons/io5";
import { logo } from '../assets/brand/logo';
import { ApiService } from '../ApiService/ApiService'
import jwtDecode from 'jwt-decode';

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const whatsAppInfo = useSelector((state) => state.whatsAppInfo)
  const token = jwtDecode(useSelector((state=> state.token)));

  const [params, setParams] = useState({
    background : "",
    status : "",
  });

  useEffect(()=>{
    fetchData()
  }, []);

  const fetchData = async () =>{
      const response1 = await ApiService.post(`/wa/get-state-server`, {id : token.id});
      console.log("line 41", response1.config);
  }
 

  // console.log("line 28 token : ", token);
  return (
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
              <span style={{ fontSize : "16px"}}> Rp.{whatsAppInfo.saldoTopup}.00</span>
              <CIcon icon={cilLoopCircular} style={{marginLeft : "7px", color : "black"}}/>
            </CNavLink>
          </CNavItem>
          <CNavItem className='ml-4'>
            <CNavLink href="#">
              Status : 
              <IoCallSharp style={{ marginLeft:"12px", background : "green", padding:"3px", color:"white", borderRadius : "50%"}} size={20}/>
            </CNavLink>
          </CNavItem>
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
