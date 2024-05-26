import React from 'react'
import advantage from '../assets/image/ưu điểm.jpg'
const Advantage = () => {
  const backToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'});
  }
  return (
    <>
      <div className="advantage">
        <div className="container">
          <div className="advantage-main">8 Ưu điểm nổi bật của MoonFlower</div>
          <div className="image-avantage">
            <img src={advantage} alt="ưu điểm" />
          </div>
        </div>
      </div>
      <div id="back-to-top" onClick={backToTop}>
        <i className="fa-solid fa-chevron-up" style={{ color: "#ffffff" }} />
      </div>
    </>
  )
}

export default Advantage