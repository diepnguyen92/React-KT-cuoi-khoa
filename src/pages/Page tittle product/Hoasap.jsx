import React from 'react'
import Useapi from '../../useAPi/Useapi'
import { URL_API } from '../../useAPi/url'
import { getDataProduct, renderData } from '../../useAPi/Filtertitle'


const Hoasap = () => {
   
    const {data,isLoading} = Useapi(URL_API)
   
    if(isLoading) return <h1>Đang lấy dữ liệu....</h1>
   console.log(data);
  
    const dataProduct = getDataProduct(data, "Hoa Sap")
    // console.log(dataProduct);
  return (
    <>
    <div className="product-sp">
        <div className="container">
          <div className="row row-js">
            {renderData(dataProduct)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hoasap