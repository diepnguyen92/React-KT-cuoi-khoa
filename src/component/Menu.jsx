import React from 'react'

const Menu = () => {
  return (
    <>
     <div className="menu-main menu-total">
        <div className="container">
          {/* mobile-menu */}
          <div>
            <div className="container1" >
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="./index.html">Trang chủ</a>
                </li>
                <li className="menu-main">
                  Sản phẩm
                  <div className="menu-2">
                    <ul>
                      <li data-category="Hoa tuoi">Hoa tươi</li>
                      <li data-category="Hoa Sap">Hoa sáp</li>
                      <li data-category="Hoa bo">Hoa Bó</li>
                      <li data-category="Hoa Gio">Giỏ hoa</li>
                      <li data-category="Lang hoa">Lẵng hoa</li>
                    </ul>
                  </div>
                </li>
                <a href="./suport.html">
                  <li>Hướng dẫn mua hàng</li>
                </a>
                <a href="./contact.html">
                  <li>Liên hệ</li>
                </a>
                <a href="./detail1.html">
                  <li>Ý nghĩa hoa</li>
                </a>
              </ul>
              <div className="hotline">Hotline đặt hoa : 19000 8888</div>
            </div>
          </div>
          <hr />
          <div className="mobile-top-hearder">
            <div className="container">
              <div className="mobile-logo">
                <a href="./index.html">
                  <img src="./assets/image/logo.png" alt="logo" />
                </a>
              </div>
              <div className="acount-bag">
                <div className="bag-main">
                  <div className="bag">
                    <i className="fa-solid fa-cart-shopping" />
                  </div>
                  <div className="bag-product">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Menu