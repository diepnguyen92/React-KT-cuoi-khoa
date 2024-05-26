import React from "react";
import renderData from "../../useAPi/renderData";



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
