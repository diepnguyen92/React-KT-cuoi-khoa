// cổng chặn bảo vệ không cho đăng nhập trực tiếp trang acount
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedLogin = ({element}) => {
    // check token ton tai hay chua
    let isAuth = JSON.parse(localStorage.getItem('isAuth'))
  return isAuth ? element : <Navigate to ="/acount" />

}

export default ProtectedLogin