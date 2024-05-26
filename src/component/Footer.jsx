import React, { useState } from 'react'

const Footer = () => {
  const [chatOpen, setchatOpen] = useState(false)
  const handleClick = (event)=>{
    if (event.target.closest('.mesenger-main')) {
      return;
    }
    setchatOpen (!chatOpen)
   
  }
  const closeChat = () => {
    setchatOpen(false);
  }
  const stopPropagation = (event) => {
    event.stopPropagation();
  }
  return (
    <>
      
        <div className="bottom-footer">
        <div className="container">
          <div className="row row-js">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <span className="bottom-tittle"> Về chúng tôi :</span>
                <ul>
                  <li>Giới Thiệu</li>
                  <li>chính sách bảo mật</li>
                  <li>Quy chế hoạt động</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <span className="bottom-tittle"> Dịch vụ khách hàng.</span>
                <ul>
                  <li>Giới Thiệu</li>
                  <li>chính sách bảo mật</li>
                  <li>Quy chế hoạt động</li>
                  <li>
                    Kết nối:
                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "#74c0fc" }}
                    />
                    <i className="fa-brands fa-tiktok" />
                  </li>
                  <li>
                    Email : <a href="#">nguyendiep.kttm@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <span className="bottom-tittle"> Tin tức.</span>
                <ul>
                  <li>Giới thiệu về hoa</li>
                  <li>Cẩm nang</li>
                  <li>Khuyến mãi</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <span className="bottom-tittle"> Liên hệ.</span>
                <ul>
                  <li>
                    Địa chỉ : số 03, Đường Hùng Vương, TP.Việt Trì, Tỉnh Phú
                    Thọ.
                  </li>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.1378226493002!2d105.35816947600432!3d21.345058276838436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134926400000001%3A0x91429d8f91c4915d!2zSG9uZGEgw5QgVMO0IFZp4buHdCBUcsOs!5e0!3m2!1svi!2s!4v1710425514278!5m2!1svi!2s"
                    width="100%"
                    height={112}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="container">
            <div className="copy">Copyright ©2024 shop hoa tươi</div>
            <div className="copy">Design By Diepnguyen</div>
          </div>
        </div>
      </div>
      <div className="mesenger" onClick={handleClick}>
        CHAT
        <div className={`mesenger-main ${chatOpen ?'active':''}`} onClick={stopPropagation}>
          <div className="mesenger-header">
            <button className="close-ms" onClick={closeChat}>
              <i className="fa-solid fa-xmark" />
            </button>
            Chào mừng đã đến với MoonFlower
          </div>
          <input type="text" placeholder="Nhập nội dung..." />
        </div>
      </div>
    
    </>
  )
}

export default Footer