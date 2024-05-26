import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contact">
  <div className="container">
    <div className="content">
      <h2>Điện hoa MoonFlower</h2>
      Địa chỉ shop hoa: Khu 4, Vân Phú, Việt Trì, Phú Thọ.
      <br />
      Điện thoại: 0962 879 268 (24/7)
      <br />
      Email: contactmoonflower@gmail.com
      <br />
    </div>
    <hr />
    <div className="infor-map">
      <div className="infor">
        <h2>Liên hệ Moonflower:</h2>
        <br />
        Vui lòng nhập thông tin theo mẫu, Chúng tôi sẽ liên lạc với bạn sớm nhất
        có thể.
        <form action="infor">
          <input type="text" placeholder="Tên của bạn" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Số điện thoại" />
          <textarea
            className="content-infor"
            type="text"
            placeholder="Nội dung..."
            cols={80}
            rows={10}
            defaultValue={""}
          />
          <div className="sent">
            <button>Gửi</button>
          </div>
        </form>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.7734389960738!2d105.38611150243185!3d21.31996681750937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31348d45acb350b1%3A0xb64c68e4798921df!2sM%C6%B0%E1%BB%9Dng%20Thanh%20Luxury%20Phu%20Tho%20Hotel!5e0!3m2!1svi!2s!4v1712154251357!5m2!1svi!2s"
          width="100%"
          height={600}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact