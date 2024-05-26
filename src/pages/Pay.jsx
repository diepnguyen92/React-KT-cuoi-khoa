import React from "react";
import "../assets/css/pay.css"
const Pay = () => {
  return (
    <>
    <div className="top-pay">
 
  <div className="content">
    <div className="container">
      <div className="content-link">
        <div className="link-cart">
          <a href="./index.html">Giỏ hàng</a>
        </div>
        /<div className="link-payment">Thanh toán</div>
      </div>
      <div className="content-info">
        <div className="content-dearler-name">
          Thông tin người gửi.
          <form>
            <input type="text" placeholder="Họ tên người gửi" />
            <br />
            <input type="text" placeholder="số điện thoại" />
            <br />
            <input type="email" placeholder="Email người gửi" />
          </form>
        </div>
        <div className="content-from-name">
          Thông tin người nhận:
          <form>
            <input type="text" placeholder="Họ tên người nhận" />
            <br />
            <input type="text" placeholder="số điện thoại" />
            <br />
            <input type="email" placeholder="Email người nhận" />
            <br />
            <input type="text" placeholder="Thông điệp, nội dung..." />
          </form>
        </div>
        <div className="content-price">
          Đơn hàng của bạn:
          <form>
            <div className="row-js">
       
            </div>
            <div className="discount">
              {" "}
              <input type="text" placeholder="Mã ưu đãi" />
              <button>Sử dụng</button>
            </div>
            <div className="cart-total">
              <div className="cart-tittle"> Tổng Tiền: </div>
              <div className="cart-total-tt">1,300,000 VND</div>
            </div>
          </form>
          <div className="content-pay">
            <form action="">
              Phương thức thanh toán:
              <br />
              <input type="radio" name="pay" />
              <label>Thanh toán bằng chuyển khoản.</label>
              <br />
              Quý khách có thể lựa chọn 1 trong 2 tài khoản ngân hàng dưới đây :
              <br />
              Chủ tài khoản : Nguyễn Văn A.
              <br />
              1, Vietcombank - CN Phú Thọ <br />
              Số tài khoản : 0801000444888
              <br />
              2, Mbbank - CN Phú Thọ <br />
              Số tài khoản : 3330333333
              <br />
              <input type="radio" name="pay" />
              <label>Thanh toán khi nhân hàng (cod).</label>
              <br />
              <input type="radio" name="pay" />
              <label>Thanh toán tại cửa hàng.</label>
              <br />
              <button>Đặt hàng</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Pay;
