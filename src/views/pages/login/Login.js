import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormFeedback,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilPhone } from '@coreui/icons'
import { ApiService } from 'src/ApiService/ApiService'
import { Alert } from '@coreui/coreui'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const Login = () => {

  const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation()

  const [params, setParams] = useState({
    style: 'none',
    textBtn: 'Request OTP',
    phoneNumber: '',
    otpNumber: '',
    textFeedBack: '',
    feedbackType: 'invalid',
    isDisabled: false,
    colorText: '',
    validated : false,
    valid : false
  })

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setParams({ ...params, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let phoneNumber = params.phoneNumber;
    let otp = params.otpNumber;
    if (params.otpNumber) {
      let urlLogin = `/wa/login-by-otp`;
      let login = await ApiService.post(urlLogin, {phoneNumber, otp});
      let token = login.data.data;
      window.localStorage.setItem("token", token);
      const origin = location.state?.from?.pathname || '/dashboard';
      dispatch({type:"set", token })
      navigate(origin);
    }else{
      let urlRequest = `/wa/request-otp`;
      let requestOtp = await ApiService.post(urlRequest, {phoneNumber});

      if (requestOtp.data.status == "error") {
        setParams({...params, phoneNumber : '',validated : true})
          // return alert(requestOtp.data.message);
      } else {
        setParams({...params, style : '', textBtn : 'Log in', validated : true , valid : true})
      }
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm validated={params.validated} onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilPhone} />
                      </CInputGroupText>
                      <CFormInput placeholder="phoneNumber" name='phoneNumber' type='text' autoComplete="phoneNumber" onChange={handleChange} onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }} required={true} valid={params.valid}  />
                      {/* <CFormFeedback valid={true}>Looks good!</CFormFeedback> */}
                    </CInputGroup>
                    <CInputGroup className="mb-4 " style={{ display: params.style }}>
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="otpNumber"
                        autoComplete="otpNumber"
                        onChange={ handleChange}
                        name='otpNumber'
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" type='submit' className="px-4">
                          {params.textBtn}
                        </CButton>
                      </CCol>
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
