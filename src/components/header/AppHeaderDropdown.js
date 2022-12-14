import React, { useState } from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  
  cilSettings,
  
  cilUser,
  cilExitToApp
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { AuthContext } from '../../hooks/AuthProvider';
import ModalProfile from './ModalTopUp'
import { useSelector } from 'react-redux'

const AppHeaderDropdown = () => {

  const {onLogout} = React.useContext(AuthContext);
  const whatsAppInfo = useSelector((state)=> state.whatsAppInfo)
  const [params, setParams] = useState({
    show : false,
  })

  const handleClose = () =>{
    setParams({...params, show : false})
  }
  const handleModal = () =>{
    setParams({...params, show : true,})
   
  }
 
  return (
    <>
    <div>{(params.show) ? <div><ModalProfile show={params.show} onHide={handleClose} modalTitle={params.modalTitle}  nama={whatsAppInfo.nama} nomorWa={whatsAppInfo.whatsappNumber} saldo={`${whatsAppInfo.saldoTopup}`}/></div> : ''}</div>
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="#" onClick={()=>handleModal()}>
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#" onClick={onLogout}>
          <CIcon icon={cilExitToApp} className="me-2" />
          Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    </>
  )
}

export default AppHeaderDropdown
