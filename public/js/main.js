var add = document.querySelector(".digit .add");
var remove = document.querySelector(".digit .remove");
var value = document.querySelector(".digit .value");
var price = document.querySelector(".digit .price .price_1");
var initialPrice = parseFloat(
  price.innerHTML.replace(/,/g, "").replace("VND", "")
);
var number = 1;
var close1 = document.querySelector(".close");
var zoomCard = document.querySelector(".container_zoom_card");

add.addEventListener("click", function () {
  number++;
  value.innerHTML = number;
  price.innerHTML = (initialPrice * number).toLocaleString("en-VN");
});

remove.addEventListener("click", function () {
  if (number > 1) {
    number--;
    value.innerHTML = number;
    price.innerHTML = (initialPrice * number).toLocaleString("en-VN");
  }
});
close1.addEventListener("click", function () {
  zoomCard.style.display = "none";
  number = 1;
  value.innerHTML = number;
  price.innerHTML = initialPrice.toLocaleString("en-VN");
});

function openZoomCardBurger(number) {
  var nameProduct = document.querySelector(
    '.my_card[onclick="openZoomCardBurger(' + number + ')"] .name_product'
  );
  var name = document.querySelector(".name");
  var title = document.querySelector(".title");
  var titleProduct = document.querySelector(
    '.my_card[onclick="openZoomCardBurger(' + number + ')"] > span'
  );
  var image = document.querySelector(".image img");
  var priceProduct = document.querySelector(
    '.my_card[onclick="openZoomCardBurger(' + number + ')"] .price_product'
  );
  var imageProduct = document.querySelector(
    '.my_card[onclick="openZoomCardBurger(' + number + ')"] img'
  );
  zoomCard.style.display = "block";
  name.innerHTML = nameProduct.textContent;
  title.innerHTML = titleProduct.textContent;
  price.innerHTML = priceProduct.textContent;
  image.src = imageProduct.src;
  initialPrice = parseFloat(
    priceProduct.innerHTML.replace(/,/g, "").replace("VND", "")
  );
}
function openZoomCardNew(number) {
  var nameProduct = document.querySelector(
    '.my_card[onclick="openZoomCardNew(' + number + ')"] .name_product'
  );
  var titleProduct = document.querySelector(
    '.my_card[onclick="openZoomCardNew(' + number + ')"] > span'
  );
  var name = document.querySelector(".name");
  var title = document.querySelector(".title");
  var image = document.querySelector(".image img");
  var priceProduct = document.querySelector(
    '.my_card[onclick="openZoomCardNew(' + number + ')"] .price_product'
  );
  var imageProduct = document.querySelector(
    '.my_card[onclick="openZoomCardNew(' + number + ')"] img'
  );
  zoomCard.style.display = "block";
  initialPrice = parseFloat(
    priceProduct.innerHTML.replace(/,/g, "").replace("VND", "")
  );
  name.innerHTML = nameProduct.textContent;
  title.innerHTML = titleProduct.textContent;
  price.innerHTML = priceProduct.textContent;
  image.src = imageProduct.src;
}
function openZoomCardCombo(number) {
  var nameProduct = document.querySelector(
    '.my_card[onclick="openZoomCardCombo(' + number + ')"] .name_product'
  );
  var titleProduct = document.querySelector(
    '.my_card[onclick="openZoomCardCombo(' + number + ')"] > span'
  );
  var name = document.querySelector(".name");
  var title = document.querySelector(".title");
  var image = document.querySelector(".image img");
  var priceProduct = document.querySelector(
    '.my_card[onclick="openZoomCardCombo(' + number + ')"] .price_product'
  );
  var imageProduct = document.querySelector(
    '.my_card[onclick="openZoomCardCombo(' + number + ')"] img'
  );
  zoomCard.style.display = "block";
  initialPrice = parseFloat(
    priceProduct.innerHTML.replace(/,/g, "").replace("VND", "")
  );
  name.innerHTML = nameProduct.textContent;
  title.innerHTML = titleProduct.textContent;
  price.innerHTML = priceProduct.textContent;
  image.src = imageProduct.src;
}
function openZoomCardGaRan(number) {
  var nameProduct = document.querySelector(
    '.my_card[onclick="openZoomCardGaRan(' + number + ')"] .name_product'
  );
  var titleProduct = document.querySelector(
    '.my_card[onclick="openZoomCardGaRan(' + number + ')"] > span'
  );
  var name = document.querySelector(".name");
  var title = document.querySelector(".title");
  var image = document.querySelector(".image img");
  var priceProduct = document.querySelector(
    '.my_card[onclick="openZoomCardGaRan(' + number + ')"] .price_product'
  );
  var imageProduct = document.querySelector(
    '.my_card[onclick="openZoomCardGaRan(' + number + ')"] img'
  );
  zoomCard.style.display = "block";
  initialPrice = parseFloat(
    priceProduct.innerHTML.replace(/,/g, "").replace("VND", "")
  );
  name.innerHTML = nameProduct.textContent;
  title.innerHTML = titleProduct.textContent;
  price.innerHTML = priceProduct.textContent;
  image.src = imageProduct.src;
}
function openZoomCardComVua(number) {
  var nameProduct = document.querySelector(
    '.my_card[onclick="openZoomCardComVua(' + number + ')"] .name_product'
  );
  var titleProduct = document.querySelector(
    '.my_card[onclick="openZoomCardComVua(' + number + ')"] > span'
  );
  var name = document.querySelector(".name");
  var title = document.querySelector(".title");
  var image = document.querySelector(".image img");
  var priceProduct = document.querySelector(
    '.my_card[onclick="openZoomCardComVua(' + number + ')"] .price_product'
  );
  var imageProduct = document.querySelector(
    '.my_card[onclick="openZoomCardComVua(' + number + ')"] img'
  );
  zoomCard.style.display = "block";
  initialPrice = parseFloat(
    priceProduct.innerHTML.replace(/,/g, "").replace("VND", "")
  );
  name.innerHTML = nameProduct.textContent;
  title.innerHTML = titleProduct.textContent;
  price.innerHTML = priceProduct.textContent;
  image.src = imageProduct.src;
}

function openZoomCardMonAnKem(number) {
  var nameProduct = document.querySelector(
    '.my_card[onclick="openZoomCardMonAnKem(' + number + ')"] .name_product'
  );
  var titleProduct = document.querySelector(
    '.my_card[onclick="openZoomCardMonAnKem(' + number + ')"] > span'
  );
  var name = document.querySelector(".name");
  var title = document.querySelector(".title");
  var image = document.querySelector(".image img");
  var priceProduct = document.querySelector(
    '.my_card[onclick="openZoomCardMonAnKem(' + number + ')"] .price_product'
  );
  var imageProduct = document.querySelector(
    '.my_card[onclick="openZoomCardMonAnKem(' + number + ')"] img'
  );
  zoomCard.style.display = "block";
  initialPrice = parseFloat(
    priceProduct.innerHTML.replace(/,/g, "").replace("VND", "")
  );
  name.innerHTML = nameProduct.textContent;
  title.innerHTML = titleProduct.textContent;
  price.innerHTML = priceProduct.textContent;
  image.src = imageProduct.src;
}

function openZoomCardThucUong(number) {
  var nameProduct = document.querySelector(
    '.my_card[onclick="openZoomCardThucUong(' + number + ')"] .name_product'
  );
  var titleProduct = document.querySelector(
    '.my_card[onclick="openZoomCardThucUong(' + number + ')"] > span'
  );
  var name = document.querySelector(".name");
  var title = document.querySelector(".title");
  var image = document.querySelector(".image img");
  var priceProduct = document.querySelector(
    '.my_card[onclick="openZoomCardThucUong(' + number + ')"] .price_product'
  );
  var imageProduct = document.querySelector(
    '.my_card[onclick="openZoomCardThucUong(' + number + ')"] img'
  );
  zoomCard.style.display = "block";
  initialPrice = parseFloat(
    priceProduct.innerHTML.replace(/,/g, "").replace("VND", "")
  );
  name.innerHTML = nameProduct.textContent;
  title.innerHTML = titleProduct.textContent;
  price.innerHTML = priceProduct.textContent;
  image.src = imageProduct.src;
}

