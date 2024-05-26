import React from 'react'
import "../../assets/css/myacount.css"

import TitleAcount from '../../component/auth/TitleAcount'
const Myacount = () => {
  return (
    <>
    <>
    <div className='container myacount'>
        <TitleAcount />
        <div className='content-acount'>
            <div className='header-content-acc'> <h3>Cập nhật thông tin tài khoản:</h3>
            <hr />
            </div>
            <form   className='form-acount' action="form">
              <div>  <label htmlFor="">Email:</label> <input type="email" /></div>
              <div>  <label htmlFor="">Tên:</label> <input type="text" /></div>
              <div>   <label htmlFor="">Họ:</label> <input type="text" /></div>
              <div>   <label htmlFor="">Điện thoại:</label> <input type="number" /></div>
              <div>   <label htmlFor="">Địa chỉ:</label> <input type="number" /></div>
              <button type="button" className="btn btn-success">Lưu</button>
            </form>
        </div>
    </div>
    </>
    
    </>
  )
}

export default Myacount