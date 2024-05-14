import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import baner1 from "../assets/image/baner1.png";
import baner2 from "../assets/image/baner2.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="slider-container baner-slide">
          <SwiperSlide>
            <div className="item">
              <img src={baner1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={baner2} alt="" />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function AutoPlay() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 3000,
//     cssEase: "linear"
//   };
//   return (
//     <div className="slider-container baner-slide" >
//       <Slider {...settings}>
//        <div className="item">
//

//             <img src={baner1} alt="" />

//         </div>

//       </Slider>
//     </div>
//   );
// }

// export default AutoPlay;

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
