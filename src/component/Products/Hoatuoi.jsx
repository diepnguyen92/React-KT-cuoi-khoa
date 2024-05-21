import React from "react";
import Useapi from "../../useAPi/Useapi";
import { filterCategory, renderData } from "../../useAPi/Filtertitle";
import { URL_API } from "../../useAPi/url";

const Hoatuoi = () => {
  const { data, isLoading } = Useapi(URL_API);
  // console.log(data);
  

 

  // console.log(renderData(dataHt));
  return (
    <>
     
    </>
  );
};

export default Hoatuoi;
