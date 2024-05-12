import React from "react";
export const filterCategory =(item,value)=>{
  return item.filter((list) => list.title === value);
}

const Filtertitle = (item, value) => {
  return item.filter((list) => list.category === value);
};

export default Filtertitle;

export const renderData = (listData)=>{
 return listData.map(item=>{
  return (
    <div className="col-12 col-sm-6 col-md-3" key={item.id}>
    <div className="content">
      <a href="./defaut1.html?id=${item.id}" target="_blank">
        <img className="image" src={item.image} alt={item.name} />
      </a>
      <div className="content2">
        <div className="name-price">
          <div className="name">
            {item.name}
          </div>
          <div className="price">
            {item.price} VND
          </div>
        </div>
        <button className="cart">
          <i className="fa-solid fa-cart-plus" /> Mua ngay
        </button>
      </div>
    </div>
  </div>)
  })}