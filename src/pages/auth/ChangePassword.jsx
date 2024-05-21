import React from 'react'
import TitleAcount from '../../component/auth/TitleAcount'

const ChangePassword = () => {
  return (
    <>
        <div className='container myacount'>
        <TitleAcount />
        <div className='content-acount'>
            <div className='header-content-acc'> <h3>Cập nhật thông tin tài khoản:</h3>
            <hr />
            </div>
            <form   className='form-acount' action="form">
              <div>  <label htmlFor="">Mật khẩu cũ:</label> <input type="text" /></div>
              <div>   <label htmlFor="">Mật khẩu mới:</label> <input type="text" /></div>
              <div>   <label htmlFor="">Xác nhận:</label> <input type="number" /></div>
              <button type="button" className="btn btn-success">Lưu</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default ChangePassword