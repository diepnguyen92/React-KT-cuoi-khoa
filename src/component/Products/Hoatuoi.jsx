import React from "react";
import Useapi from "../../useAPi/Useapi";
import { filterCategory, renderData } from "../../useAPi/Filtertitle";


const Hoatuoi = () => {
  const data = Useapi(
    "https://663c9efa17145c4d8c36fc5a.mockapi.io/Hoatuoi"
  ).data;
  // console.log(data);

  const dataHt = filterCategory(data, "Hoa tuoi");

  console.log(renderData(dataHt));
  return (
    <>
      <div className="product-sp">
        <div className="container">
          <div className="row row-js-hs">
            {renderData(dataHt)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hoatuoi;
