const contentBtn = document.querySelector(".content__btn"),
  MenuRemove = document.querySelector(".MenuRemove"),
  modalMenu = document.querySelector(".modal_menu");

const links = document.querySelectorAll(".nav-ul-item a"),
  activeNav = document.querySelector(".active-nav");

const modalImg = document.querySelector(".main__pages-picture"),
  pages_btn = document.querySelectorAll(".pages_btn"),
  modalAll_img = document.querySelectorAll(".page_pic");
// let array = [
//   "./src/pic/Edition Sneakers/first sneaker.png",
//   "./src/pic/Edition Sneakers/fourth sneaker.png",
//   "./src/pic/Edition Sneakers/second sneaker.png",
//   "./src/pic/Edition Sneakers/the third sneaker.png",
// ];
// let i = 0;

// * Navbar - Navigation
gsap.registerPlugin(Flip);
links.forEach((link) => {
  links[0].style = "color: #1D2026;";
  link.addEventListener("click", (e) => {
    //! Turn navs blue
    gsap.to(links, { color: "#69707D" });
    if (document.activeElement === link) {
      gsap.to(link, { color: "#1D2026" });
    }
    //! Wanna move the line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      ease: "elastic.out(1,0.5)",
    });
  });
});

// * next navigation
modalAll_img.forEach((item) => {
  modalAll_img[0].classList.add("active");
  item.addEventListener("click", (e) => {
    modalImg.src = item.src;
    modalAll_img.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// ? function array
function prevA() {
  if (i <= 0) i = array.length;
  i--;
  for (let j = modalAll_img.length - 1; j > 0; j--) {
    modalAll_img[i].classList.add("active");
    modalAll_img[j].classList.remove("active");
    modalAll_img[0].classList.remove("active");
  }
  return setImgA();
}

function nextA() {
  if (i >= array.length - 1) i = -1;
  i++;
  for (let j = 0; j < modalAll_img.length; j++) {
    modalAll_img[i].classList.add("active");
    modalAll_img[j].classList.remove("active");
  }
  return setImgA();
}
function setImgA() {
  return (modalImg.src = array[i]);
}

pages_btn[0].addEventListener("click", prevA);
pages_btn[1].addEventListener("click", nextA);

//  ? contentBtn
function ModalMenu() {
  modalMenu.classList.add("modal-active");
  document.body.classList.add("body-active");
  MenuRemove.style = 'cursor: pointer';
}
function ModalMenuRemove() {
  modalMenu.classList.remove("modal-active");
  document.body.classList.remove("body-active");
}

function ModalMenuRemoveList(e) {
  let target = e.target;
  if (target.classList.contains("modal-active")) {
    ModalMenuRemove();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    ModalMenuRemove();
  }
});
contentBtn.addEventListener("click", ModalMenu);
MenuRemove.addEventListener("click", ModalMenuRemove);
modalMenu.addEventListener("click", ModalMenuRemoveList);
