import React from "react";
import baner from "../assets/image/banermooon.jpg";
import { useParams } from "react-router-dom";
import { URL_API } from "../useAPi/url";
import Useapi from "../useAPi/Useapi";
import "../assets/css/styledefault1.css";
import DetailProduct from "../component/detail/DetailProduct";

const Detail = () => {
    const dataMain = Useapi(URL_API).data;
    
  const idProduct = useParams();
  const urlProduct = URL_API + `/${idProduct.id}`;
  const { data, isLoading } = Useapi(urlProduct);
//   console.log(data);
  if (isLoading == true) return <h1>Dang lay du lieu ...</h1>;
  const title = data.title
//   console.log(title);
const getDataDetail = (list, value, id) => {
    return list.filter((item) =>
      item.title === value && item.id !== id
    );
  };
  const dataDetail = getDataDetail(dataMain,title,idProduct)

  
  return (
    <>
      <>
        <div className="baner">
          <img src={baner} alt="baner1" />
        </div>
        <div id="categoryContent">
          <div className="hearder-main">
            <div className="container">
              <div className="row-js">
                <div>
                  <div className="product">
                    <img
                      className="product-image"
                      src={data.image}
                      alt={data.name}
                    />
                    <div className="product-content">
                      <div className="product-name">{data.name}</div>
                      <div className="product-price">{data.price} VND</div>
                      <div className="content-title">{data.coment}</div>
                      <div className="product-add">
                        <input
                          className="product-quantity"
                          type="number"
                          defaultValue={1}
                          min={1}
                        />
                        <button className="cart1">Thêm vào giỏ hàng</button>
                        <div className="tittle-shop">
                          <ul className="custom-list">
                            <li> Cần đặt hoa nhanh xin gọi: 0962.879.268</li>
                            <li>
                              {" "}
                              Hỗ trợ giao hoa nhanh trong vòng 30p kể từ khi
                              hoàn tất thanh toán, hỗ trợ xuất hóa đơn VAT (+8%)
                            </li>
                            <li>
                              {" "}
                              Sản phẩm của chúng tôi luôn mang những ý nghĩa tốt
                              đẹp nhất gửi tới người nhận.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="coment-rate">
                    <div className="tittle-coment">
                      <i className="fa-solid fa-chevron-down" /> Mô tả
                    </div>
                    <div className="tittle-coment coment">
                      {data.content}
                    </div>
                    <div className="tittle-coment rate">
                      <i className="fa-solid fa-chevron-down" /> Đánh giá
                    </div>
                    <div className="tittle-coment">
                      <i className="fa-solid fa-chevron-down" /> Chính sách bán
                      hàng.
                    </div>
                    <div className="tittle-coment note ">
                      Giao hàng tại Hà Nội - Giao hoa tận nơi các khu vực trong
                      thành phố Hà Nội - Có xuất hóa đơn đỏ nếu bạn yêu cầu. -
                      Miễn phí thiết kế và in băng rôn hoặc thiệp chúc mừng (nội
                      dung theo ý bạn yêu cầu) - Với đội ngũ nhân viên trẻ trung
                      đầy nhiệt huyết và dày dặn kinh nghiệm, chúng tôi luôn nỗ
                      lực hết sức mình để làm hài lòng quý khách hàng. - May
                      Flower cam kết sản phẩm hoa chúc mừng được thực hiện dựa
                      trên mẫu đã chọn. - Thời gian giao hàng nhanh nhất có thể
                      từ 30 phút kể từ khi khách hàng đặt hàng (đối với các đơn
                      hàng gấp, tuỳ thuộc vào yêu cầu và địa chỉ được giao). -
                      Giá trên chưa bao gồm thuế giá trị gia tăng (VAT). - Dễ
                      dàng thanh toán online với thẻ nội địa, quốc tế, Visa,
                      Master, Paypal...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <DetailProduct
           dataDetail = {dataDetail}
          />
          </div>
        </div>
        {/* thêm sản phẩm sau khi reset trang tại đây */}
        <div className="product-sp-menu">
          <div className="container">
            <div className="row row-js-menu"></div>
          </div>
        </div>
      </>
    </>
  );
};

export default Detail;
