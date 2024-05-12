// function khai bao du lieu local storage
const getCartFromLocalStorage = ()=>{
    // dat bien gia su
    const cartItem = localStorage.getItem("cartItem")
    // console.log(cartItem);
  //  dung toan tu 3 ngoi
    return cartItem ? JSON.parse(cartItem) : [];
  };
  const cartItem = getCartFromLocalStorage();
  // console.log(cartItem);
  // truy cập phần tử
  const cartPay = document.querySelector(".row-js")
  //truy cap total
  const totalSum = document.querySelector('.cart-total-tt');
  console.log(totalSum);
  let HTML = ``;
  let total = 0;
  cartItem.forEach((item) => {
    // console.log(item);
    const priceWithoutCurrency = item.price.replace(' VND', '');
    const prices =parseFloat(priceWithoutCurrency.replace(/,/g, ''))
    console.log(prices);
    total = total + (prices * item.quantity)

HTML+=`
<div class="cart-image-name">
<div class="cart-image-count">
<img class="cart-image" src="${item.image}" alt="hoa bo">
<div class="cart-count">${item.quantity}</div>
</div>

<div class="cart-name-title">${item.name}</div>

<div class="cart-price-quality">${item.price}</div>
</div>

`;

});
cartPay.innerHTML = HTML;


totalSum.innerHTML= total.toLocaleString('en-US') + " VND";