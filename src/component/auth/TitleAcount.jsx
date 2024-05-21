import React from 'react'
import { Link } from 'react-router-dom'
const TitleAcount = () => {
  return (
    <>
     <div className='title-acount'>
            <h2>Tài khoản</h2>
            <ul>
                <li><Link to={'/myacount'}> Thông tin tài khoản</Link></li>
                <li><Link to = {'/myacount/changepassword'}>Đổi mật khẩu</Link></li>
                <li>Xem lại đơn hàng</li>
                <li>Đăng xuất</li>
            </ul>
        </div>
    </>
  )
}

export default TitleAcount