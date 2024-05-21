import React from 'react'
import Logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
       {/* giỏ hàng */}
       <div className="cart-modal-overlay">
        <div className="cart-modal">
          <div className="cart-wraper">
            <div className="cart-tittle">Giỏ hàng</div>
            <div className="cart-count">0</div>
          </div>
          <i id="close-btn" className="fas fa-times" />
          <h1 className="cart-is-empty">chưa có sản phẩm nào</h1>
          {/*thêm sp ở đây*/}
          <div className="total">
            <div className="cart-total-price">
              <div className="cart-total">TỔNG TIỀN</div>
              <span className="total-price">0 VND</span>
            </div>
            <Link to="./pay.html">
              <button className="purchase-btn">Thanh toán</button>
            </Link>
          </div>
        </div>
      </div>
      {/* top header main */}
      <div className="top-hearder">
        <div className="container">
          <div className="wrap-hearder">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="searcher">
              <input
                type="text"
                id="searcherInput"
                placeholder="Tìm kiếm sản phẩm..."
                // onInput="searcherProduct()"
              />
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <div className="acount-bag">
              <div className="acount">
                <Link to="/account">
                  <i className="fa-solid fa-user" />
                </Link>
              </div>
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
    </>
  )
}

export default Header