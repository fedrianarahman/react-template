import React from 'react'
import { useLocation, Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate
    const token  = window.localStorage.getItem("token");

    // console.log("line 9",token)
    if (!token) {
        return <Navigate to="/login" replace state={{from : location}}/>
        // navigate("/login")
    }
  
    return children 

}

export default ProtectedRoute