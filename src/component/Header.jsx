import React, { useContext } from "react";
import Logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

import { useState } from "react";
import { CartContext} from "../useAPi/Cart";

const Header = () => {
const {dataCart,removeCart,cartOpen, tongleClick, handleCloseCart} = useContext(CartContext)
// console.log(dataCart);

  return (
    <>
      {/* giỏ hàng */}
      <div className={`cart-modal-overlay ${cartOpen ? "open" : ""}`} onClick={handleCloseCart}>
        <div className="cart-modal">
          <div className="cart-wraper">
            <div className="cart-tittle">Giỏ hàng</div>
            <div className="cart-count">{dataCart.length}</div>
          </div>
          <i id="close-btn" className="fas fa-times" onClick={tongleClick} />
          

         {dataCart.length>0 && dataCart.map(item=> 
                   <div className="product-rows" key={item.id}>
                   <div className="cart-image-name">
                     <img
                       className="cart-image"
                       src={item.image}
                       alt={item.name}
                     />
                     <div className="cart-main-name">
                       <div className="cart-name">
                         <div className="cart-name-title">{item.name}</div>
                         <button className="remove-btn"onClick={()=>removeCart(item.id)}>Xoá</button>
                       </div>
                       <div className="cart-price-quality">
                         <input
                           className="product-quantity"
                           type="number"
                           defaultValue={1}
                           min={0}
                         />
                         <span className="cart-price">{item.price} VND</span>
                       </div>
                     </div>
                   </div>
                 </div>
          )}


          <div className="total">
            <div className="cart-total-price">
              <div className="cart-total">TỔNG TIỀN</div>
              <span className="total-price">0 VND</span>
            </div>
            <Link to="/pay">
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
              <div className="bag-main" onClick={tongleClick}>
                <div className="bag">
                  <i className="fa-solid fa-cart-shopping" />
                </div>
                <div className="bag-product">{dataCart.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
