import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baner1 from '../assets/image/baner1.png'
import baner2 from "../assets/image/baner2.jpg"

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container baner-slide" >
      <Slider {...settings}>
       <div className="item">
          {/* <img src={baner1} alt="baner1"/> */}
          <h1>
            <img src={baner1} alt="" />
          </h1>
        </div>
        <div className="item">
          {/* <img src={baner2} alt="baner2" /> */}
          <h1><img src={baner2} alt="" /></h1>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;



// const Baner = () => {
//   return (
//     <>
//       <div className="baner-slide">
//         <div className="owl-carousel" id="carousel1">
//           <div className="item">
//             <img src={baner1} alt="baner1" />
//           </div>
//           <div className="item">
//             <img src={baner2} alt="baner2" />
//           </div>
//         </div>
//       </div>
//     </>


//   );
// };

// export default Baner;
