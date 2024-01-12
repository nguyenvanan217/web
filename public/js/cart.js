// giỏ hàng

var cart = document.querySelector(".cart");
var my_menu = document.querySelector(".my_menu");
var my_body = document.querySelector(".my_body");
var my_banner = document.querySelector(".my_banner");
var cartChild = document.querySelector(".cart .cart_child");
var notification = document.querySelector(".notification");
cart.addEventListener("click", function () {
  cartChild.classList.toggle("none");
});
my_menu.addEventListener("click", function () {
  cartChild.classList.remove("none");
});
try {
  my_body.addEventListener("click", function () {
    cartChild.classList.remove("none");
  });
  my_banner.addEventListener("click", function () {
    cartChild.classList.remove("none");
  });
} catch (error) {}

cartChild.addEventListener("click", function (event) {
  event.stopPropagation();
});
function removeParent(element) {
  // Tìm thẻ cha có lớp "product"
  const parentProduct = element.closest(".cart .cart_child .card_product");

  if (parentProduct) {
    // Loại bỏ thẻ cha khỏi DOM
    parentProduct.remove();
    saveCartToLocalStorage(cartChild.innerHTML);
  }
}

function addProductToCart(button) {
  // // // Tìm phần tử chứa hình ảnh sản phẩm
  const productImageElement = document.querySelector(".image img");
  // Tìm phần tử chứa thông tin tên sản phẩm
  const productNameElement =
    button.parentElement.querySelector(".content .name");
  const productName = productNameElement.textContent;

  // Tìm phần tử chứa thông tin giá sản phẩm
  const productPriceElement =
    button.parentElement.querySelector(".price .price_1");
  const productPrice = productPriceElement.textContent;

  // Tạo một thẻ .card_product mới
  const newCardProduct = document.createElement("div");
  newCardProduct.className = "card_product";

  // Nội dung thẻ .card_product
  newCardProduct.innerHTML =
    `
    <img src="` +
    productImageElement.src +
    `" alt="" />
    <div>
      <div class="name_product">` +
    productName +
    `</div>
      <div class="price">` +
    productPrice +
    `VND</div>
    </div>
    <div class="remove" onclick="removeParent(this)"><i class='bx bxs-trash'></i></div>
  `;
  // Thêm thẻ mới vào cart_child
  cartChild.appendChild(newCardProduct);
  saveCartToLocalStorage(cartChild.innerHTML);

  // hiển thị thông báo
  notification.style.opacity = "1";

  setTimeout(function () {
    notification.style.opacity = "0";
  }, 1000);
  // ẩn zoomcard
  zoomCard.style.display = "none";
  number = 1;
  value.innerHTML = number;
  price.innerHTML = initialPrice.toLocaleString("en-VN");
}
function saveCartToLocalStorage(cartItems) {
  // Lưu trạng thái giỏ hàng vào Local Storage
  localStorage.setItem("cartItems", cartItems);
}

const savedCartItems = localStorage.getItem("cartItems");
if (savedCartItems) {
  cartChild.innerHTML = savedCartItems;
}
