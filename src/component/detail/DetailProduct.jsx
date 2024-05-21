import React from "react";
import { renderData } from "../../useAPi/Filtertitle";
import Useapi from "../../useAPi/Useapi";
import { URL_API } from "../../useAPi/url";

const DetailProduct = ({dataDetail}) => {
 

  return (
    <>
      <div className="product-sp">
        <div className="container">
          <div className="product-list">Sản phẩm tuơng tự :</div>
          <div className="row row-js-ht">
            {renderData(dataDetail)}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
