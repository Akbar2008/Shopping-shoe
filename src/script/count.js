// const quantityBtn = document.querySelector(".quantity-btn"),
// counter = document.querySelector(".quantity > p");

const infos__btn = document.querySelector(".infos__btn"),
basketElements = document.querySelector(".basket-smooth");

const list__change = document.querySelectorAll(".list__change"),
  list_menu_img = document.querySelectorAll(".section-list_menu > img"),
  mainPicture = document.querySelector(".main-picture");

const modal = document.querySelector(".modal"),
  remove = document.querySelector(".remove");
let array = [
  "./src/pic/Edition Sneakers/first sneaker.png",
  "./src/pic/Edition Sneakers/fourth sneaker.png",
  "./src/pic/Edition Sneakers/second sneaker.png",
  "./src/pic/Edition Sneakers/the third sneaker.png",
];
let i = 0;
function prev() {
  if (i <= 0) i = array.length;
  i--;
  for (let j = list_menu_img.length - 1; j > 0; j--) {
    list_menu_img[i].classList.add("active");
    list_menu_img[j].classList.remove("active");
    list_menu_img[0].classList.remove("active");
  }
  return setImg();
}

function next() {
  if (i >= array.length - 1) i = -1;
  i++;
  for (let j = 0; j < list_menu_img.length; j++) {
    list_menu_img[i].classList.add("active");
    list_menu_img[j].classList.remove("active");
  }
  return setImg();
}
function setImg() {
  return (mainPicture.src = array[i]);
}

list__change[0].addEventListener("click", prev);
list__change[1].addEventListener("click", next);

// ! list is members of the list
list_menu_img.forEach((item) => {
  list_menu_img[0].classList.add("active");
  item.addEventListener("click", (e) => {
    mainPicture.src = item.src;
    list_menu_img.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// * Function to handle
function ModalEffects() {
  modal.classList.add("modal-active");
  document.body.classList.add("body-active");
}
function ModalEffectsRemove() {
  modal.classList.remove("modal-active");
  document.body.classList.remove("body-active");
}

function ModalList(e) {
  let target = e.target;
  if (target.classList.contains("modal")) {
    ModalEffectsRemove();
  }
}
mainPicture.addEventListener("click", ModalEffects);
remove.addEventListener("click", ModalEffectsRemove);
modal.addEventListener("click", ModalList);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    ModalEffectsRemove();
  }
});

// *************

infos__btn.addEventListener("click", () => {
  basketElements.classList.add("modal-active");
});
function ModalEffectsRem() {
  basketElements.classList.remove("modal-active");
}
function ModalListE(e) {
  let target = e.target;
  if (target.classList.contains("modal-active")) {
    ModalEffectsRem();
  }
}
basketElements.addEventListener("click", ModalListE);