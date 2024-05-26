import React from "react";



export const filterCategory =(item,value)=>{
  return item.filter((list) => list.title === value);
}

const Filtertitle = (item, value) => {
  return item.filter((list) => list.category === value);
};

export default Filtertitle;
export  const getDataProduct = (list,value)=>{
  return list.filter((item)=>{
      // console.log(item.title);
  return    item.title===value
  })
};

