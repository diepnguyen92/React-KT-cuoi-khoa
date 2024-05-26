import React, { useContext, useState } from "react";
import Baner from "../component/Baner";
import Listingproduct from "../component/Listingproduct";
import Useapi from "../useAPi/Useapi";
import { filterCategory} from "../useAPi/Filtertitle";
import { URL_API } from "../useAPi/url";
import renderData from "../useAPi/renderData";
import { CartContext } from "../useAPi/Cart";
// import { CartContext } from "../useAPi/Cartcontext";

const Home = () => {
  const { data, isLoading } = Useapi(URL_API);
const {addtoCartClick, dataCart,cartOpen, tongleClick } = useContext(CartContext)

// console.log(dataCart);


  // console.log(data);
  if (isLoading) return <h1>Đang tải dữ liệu....</h1>;
  // console.log(data);
// giới hạn số lượng sp hiển thị trên trang chủ
  const dataHs = filterCategory(data, "Hoa Sap").slice(0,8);
  // console.log(dataHs);
  const dataHsn = filterCategory(data, "Hoa Gio").slice(0,8);
  const dataHkt = filterCategory(data, "Hoa bo").slice(0,8);
  const dataHl = filterCategory(data, "Lang hoa").slice(0,8);
  const dataHt = filterCategory(data, "Hoa tuoi").slice(0,8);

  return (
    <>
      <div id="categoryContent">
        
        {/* baner slie */}
        <Baner />
        {/* Listing product */}
        <div className="listing-product">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <button className="btn-listing active">
                  Sản phẩm bán chạy
                </button>
                <button className="btn-listing">Sản phẩm mới</button>
              </div>
            </div>
            <Listingproduct />
          </div>
        </div>
        {/* product 1 */}
        <div className="title-product">
          <h3>
            {" "}
            <i className="fa-solid fa-heart" style={{ color: "#e70808" }} /> Hoa
            tươi
          </h3>
        </div>
        <div className="product-sp">
          <div className="container">
            <div className="row row-js-hs">{renderData(dataHt, addtoCartClick)}</div>
          </div>
        </div>
        <div className="container">
          <div className="see-more">
            <a href="/hoatuoi">Xem thêm sản phẩm</a>
          </div>
        </div>

        {/* product 2 */}
        <div className="title-product">
          <h3>
            <i className="fa-solid fa-heart" style={{ color: "#e70808" }} /> Hoa
            Sáp
          </h3>
        </div>
        <div className="product-sp">
          <div className="container">
            <div className="row row-js-hs">{renderData(dataHs,addtoCartClick)}</div>
          </div>
        </div>
        <div className="container">
          <div className="see-more">
            <a href="/hoasap">Xem thêm sản phẩm</a>
          </div>
        </div>
        {/* product 3*/}
        <div className="title-product">
          <h3>
            <i className="fa-solid fa-heart" style={{ color: "#e70808" }} /> Hoa
            Sinh nhật
          </h3>
        </div>
        <div className="product-sp">
          <div className="container">
            <div className="row row-js-hsn">{renderData(dataHsn,addtoCartClick)}</div>
          </div>
        </div>
        <div className="container">
          <div className="see-more">
            <a href="/hoabo">Xem thêm sản phẩm</a>
          </div>
        </div>
        {/* product 4*/}
        <div className="title-product">
          <h3>
            <i className="fa-solid fa-heart" style={{ color: "#e70808" }} /> Hoa
            Bó
          </h3>
        </div>
        <div className="product-sp">
          <div className="container">
            <div className="row row-js-hb">{renderData(dataHkt,addtoCartClick)}</div>
          </div>
        </div>
        <div className="container">
          <div className="see-more">
            <a href="/giohoa">Xem thêm sản phẩm</a>
          </div>
        </div>
        {/* product 5*/}
        <div className="title-product">
          <h3>
            <i className="fa-solid fa-heart" style={{ color: "#e70808" }} />{" "}
            Lẵng Hoa
          </h3>
        </div>
        <div className="product-sp">
          <div className="container">
            <div className="row row-js-hl">{renderData(dataHl,addtoCartClick)}</div>
          </div>
        </div>
        <div className="container">
          <div className="see-more">
            <a href="/langhoa">Xem thêm sản phẩm</a>
          </div>
        </div>
      </div>
      {/* thêm sản phẩm sau khi reset trang tại đây */}
      <div className="product-sp-menu">
        <div className="container">
          <div className="row row-js-menu"></div>
        </div>
      </div>
      {/* ƯU ĐIỂM NỔI BẬT */}
    </>
  );
};

export default Home;
