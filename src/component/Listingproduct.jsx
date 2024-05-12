import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Useapi from "../useAPi/Useapi";
import Filtertitle from "../useAPi/Filtertitle";

function AutoPlay() {
const data = Useapi("https://663c9efa17145c4d8c36fc5a.mockapi.io/Hoatuoi").data

const dataHot = Filtertitle(data, "hot")

// console.log(dataHot);
// console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container tab-content tab-1 active">
        {/* <div className="row row-js-hot"> */}
      <Slider {...settings}>
       
          {dataHot.length>0 && dataHot.map(item=>(
            <div key={item.id}>
            {/* <div className="col-12 col-sm-6 col-md-3"> */}
            <div className="content">
              <a href="./defaut1.html?id={item.id}" target="_blank">
                <img className="image" src={item.image} alt={item.name} />
              </a>
              <div className="content2">
                <div className="name-price">
                  <div className="name">
                    ${item.name}
                  </div>
                  <div className="price">
                    ${item.price} VND
                  </div>
                </div>
                <button className="cart">
                  <i className="fa-solid fa-cart-plus" /> Mua ngay
                </button>
              </div>
            </div>
          </div>
          
          ))}
    
     
      </Slider></div>
    // </div>
  );
}

export default AutoPlay;






{/* <div className="tab-content tab-1 active">
<div id="carousel2" className="owl-carousel row row-js-hot"></div>
</div>
<div className="tab-content tab-2">
<div id="carousel3" className="owl-carousel row row-js-new"></div>
</div> */}