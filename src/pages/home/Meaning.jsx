import React from "react";
import Useapi from "../../useAPi/Useapi";
import { URL_MEANING } from "../../useAPi/url";


const Meaning = () => {
    const {data, isLoading} = Useapi(URL_MEANING)
if(isLoading) return <h1>Đang tải dữ liệu...</h1>
  return (
    <>
      <div className="product-content">
        <div className="container">
          <div className="row">
            {data.length >0 && data.map(item =>
            <div className="col-6 col-sm-4 col-md-2" key={item.id}>
              <div className="content">
                <div className="image">
                  <a href="/blog">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </a>
                </div>
                <div className="name">{item.name}</div>
              </div>
            </div>)}


          </div>
        </div>
      </div>
    </>
  );
};

export default Meaning;
