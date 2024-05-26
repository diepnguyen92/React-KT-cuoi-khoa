import React from "react";
import { Link } from "react-router-dom";


const Menu = () => {
  
  // console.log(data);
  return (
    <>
      <div className="menu-main menu-total">
        <div className="container">
          {/* mobile-menu */}
          <div>
            <div className="container1">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="menu-main">
                  Sản phẩm
                  <div className="menu-2">
                    <ul>
                    <Link to={"/hoatuoi"}> <li data-category="Hoa tuoi">
                        Hoa tươi
                      </li></Link>
                      <Link to = {"/hoabo"}><li >Hoa bó</li></Link>
                      <Link to = {'/hoasap'}> <li >Hoa sáp</li></Link>
                     
                      <Link to = {'/giohoa'}><li >Giỏ hoa</li></Link>
                     
                      <Link to = {'/langhoa'}><li > Lẵng hoa</li></Link>
                      
                    </ul>
                  </div>
                </li>
                <Link to="./support">
                  <li>Hướng dẫn mua hàng</li>
                </Link>
                <Link to="/contact">
                  <li>Liên hệ</li>
                </Link>
                <Link to="/y nghia hoa">
                  <li>Ý nghĩa hoa</li>
                </Link>
              </ul>
              <div className="hotline">Hotline đặt hoa : 19000 8888</div>
            </div>
          </div>
          <hr />
          <div className="mobile-top-hearder">
            <div className="container">
              <div className="mobile-logo">
                <Link to="./index.html">
                  <img src="./Linkssets/image/logo.png" alt="logo" />
                </Link>
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
  );
};

export default Menu;
