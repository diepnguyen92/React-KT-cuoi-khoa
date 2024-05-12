//  giỏ hàng
// truy cập phần tử

let cart = document.querySelectorAll(".bag-main");
// console.log(cart);
let cartModalOverlay = document.querySelector(".cart-modal-overlay");
let closeBtn = document.querySelector("#close-btn");
// thêm sự kiệN mở giỏ hàng
cart.forEach(element =>{
element.addEventListener("click", () => {
  // alert("123")
  cartModalOverlay.style.transform = "translateX(0)";
});});
//  đóng giỏ hàng
closeBtn.addEventListener("click", () => {
  cartModalOverlay.style.transform = "translateX(-200%)";
});
// đóng khi click ra ngoài màn hình
cartModalOverlay.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-modal-overlay") == true) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});