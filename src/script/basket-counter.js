const button = document.querySelector(".numberOfProducts__btn"),
  buttonAdd = document.querySelectorAll(".quantity-btn"),
  quantity = document.querySelector(".count-number"),
  small = document.querySelector("small");
const ActiveCard = document.querySelector(".active-card"),
  NoActiveCard = document.querySelector(".noActive-card");

const mark = document.querySelector(".mark");

if (small.textContent == 0) {
  small.classList.add("basket-show");
}

let countered = 0;

function TopCount() {
  quantity.innerHTML++;
  countered++;
}
function DownCount() {
  quantity.innerHTML--;
  countered--;
  if (countered < 0) {
    countered = 0;
  }
  if (quantity.innerHTML < 0) {
    quantity.innerHTML = 0;
  }
}
function UpCount(event) {
  event.preventDefault();
  small.innerHTML = countered;

  ActiveCard.innerHTML = `
 <div class="card">
            <img
              src="./src/pic/Edition Sneakers/first sneaker.png"
              alt="first sneaker"
              class="sneaker"
            />
            <div class="card-sum">
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x ${countered} <span>$${125.0 * countered}</span></p>
            </div>
            <img onclick="create()" src="./src/pic/icon/mask.svg" alt="mask" class="mark" />
        </div>
 <button class="card-btn">Checkout</button>
`;
  if (small.textContent == 0) {
    small.classList.add("basket-show");
  } else {
    small.classList.remove("basket-show");
  }
  if (!small.classList.contains("basket-show")) {
    ActiveCard.style.display = "flex";
    NoActiveCard.style.display = "none";
  } else {
    ActiveCard.style.display = "none";
    NoActiveCard.style.display = "flex";
  }
}

function create() {
  ActiveCard.style.display = "none";
  NoActiveCard.style.display = "flex";
  small.classList.add("basket-show");
  small.innerHTML = 0;
  countered = 0;
  quantity.innerHTML = 0;
}
buttonAdd[0].addEventListener("click", DownCount);
buttonAdd[1].addEventListener("click", TopCount);
button.addEventListener("click", UpCount);
// mark.addEventListener("click", create);
console.log(mark);
