import React from "react";
import Useapi from "../useAPi/Useapi";
import Filtertitle from "../useAPi/Filtertitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { URL_API } from "../useAPi/url";

export default function App() {
  const data = Useapi(
    URL_API
  ).data;

  const dataHot = Filtertitle(data, "hot");
  return (
    <>
      <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div className="tab-content tab-1 active">
          {dataHot.length > 0 &&
            dataHot.map((item) => (
              <SwiperSlide key={item.id}>
                <div >
                  <div className="content">
                    <a href="./defaut1.html?id={item.id}" target="_blank">
                      <img className="image" src={item.image} alt={item.name} />
                    </a>
                    <div className="content2">
                      <div className="name-price">
                        <div className="name">${item.name}</div>
                        <div className="price">${item.price} VND</div>
                      </div>
                      <button className="cart">
                        <i className="fa-solid fa-cart-plus" /> Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </>
  );
}

