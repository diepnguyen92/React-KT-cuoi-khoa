
import { Link } from "react-router-dom";


const renderData = (listData,addtoCartClick)=>{


    return listData.map(item=>{
     return (
       <div className="col-12 col-sm-6 col-md-3" key={item.id}>
       <div className="content content-product">
         <Link to={`/products/${item.id}`} target="_blank">
           <img className="image" src={item.image} alt={item.name} />
         </Link>
         <div className="content2">
           <div className="name-price">
             <div className="name">
             <Link to={`/products/${item.id}`} target="_blank">  {item.name}</Link>
             </div>
             <div className="price">
               {item.price} VND
             </div>
           </div>
           <div className="cart-button">
           <button className="cart" onClick={()=>addtoCartClick(item)}>
             <i className="fa-solid fa-cart-plus" /> Mua ngay
           </button></div>
         </div>
       </div>
     </div>)
     })};

   export default renderData;