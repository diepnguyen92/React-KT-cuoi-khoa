import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Footer from "../component/Footer";
import Advantage from "../component/Advantage";
import Baner from "../component/Baner";
import Listingproduct from "../component/Listingproduct";
import Useapi from "../useAPi/Useapi";
import Hoatuoi from "../component/Products/Hoatuoi";
import { filterCategory,renderData } from "../useAPi/Filtertitle";
import { URL_API } from "../useAPi/url";

const Home = () => {
  const { data, isLoading } = Useapi(URL_API);

  // console.log(data);
  if (isLoading) return <h1>Đang tải dữ liệu....</h1>;
  // console.log(data);

 
  const dataHs = filterCategory(data, "Hoa Sap")
  const dataHsn = filterCategory(data, "Hoa Gio")
  const dataHkt = filterCategory(data,"Hoa bo")
  const dataHl = filterCategory(data,"Lang hoa")
  const dataHt = filterCategory(data, "Hoa tuoi");
  
  return (
    <>
      <div id="categoryContent">
        {/* baner slie */}
        <Baner  />
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
          <div className="row row-js-hs">{renderData(dataHt)}</div>
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
            <div className="row row-js-hs">
          {renderData(dataHs)}
            </div>
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
            <div className="row row-js-hsn">
            {renderData(dataHsn)}
            </div>
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
            <div className="row row-js-hb">
            {renderData(dataHkt)}
            </div>
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
            <div className="row row-js-hl">
            {renderData(dataHl)}
            </div>
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
