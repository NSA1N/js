document.querySelectorAll(".faq-title").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;
    let lastEl = el.parentElement;
    if (content.style.maxHeight == 0) {
      document.querySelectorAll(".drop-content").forEach((drop) => {
        drop.style.maxHeight = null;
      });
      content.style.maxHeight = content.scrollHeight + "px";
      lastEl.style.height = "auto";
      el.style.content = "-";
    } else {
      document.querySelectorAll(".drop-content").forEach((drop) => {
        drop.style.maxHeight = null;
        lastEl.style.height = 52 + "px";
      });
    }
  });
});

let swipeColor = document.querySelectorAll(".Skills-item");
for (let i = 0; i < swipeColor.length; i++) {
  swipeColor[i].addEventListener("click", selectColor);
}

function selectColor(event) {
  if (event.target.classList.contains("goup")) {
    event.target.classList.remove("goup");
  } else {
    event.target.classList.add("goup");
  }
}

const MENU_BURGER = document.querySelector(".burger");
MENU_BURGER.addEventListener("click", () => {
  let menuBurgerContent = document.querySelector(".menu-burger-content");
  if (menuBurgerContent.style.display !== "flex") {
    MENU_BURGER.src = "Media/Vector.png";
    menuBurgerContent.style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";

    document.querySelectorAll(".menu-burger-content > a").forEach((el) => {
      el.addEventListener("click", () => {
        MENU_BURGER.src = "Media/Burger.png";
        menuBurgerContent.style.display = "none";
        document.querySelector("body").style.overflow = "visible";
      });
    });
  } else {
    MENU_BURGER.src = "Media/Burger.png";
    menuBurgerContent.style.display = "none";
    document.querySelector("body").style.overflow = "visible";
  }
});

const ANCHORS = document.querySelectorAll('a[href*="#"]');

for (let anchor of ANCHORS) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const BLOCK_ID = anchor.getAttribute("href");
    document.querySelector("" + BLOCK_ID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

let item = document.querySelectorAll(".item");
const itemLength = item.length;

const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");
let slider = [];
//Для перемещения элементов item в массив slider и удаление их из исходного массива item.
for (let i = 0; i < itemLength; i++) {
  slider[i] = item[i];
  item[i].remove();
}
let step = 0;
let offset = 0;
//Функция, которая создает новые элементы на основе элементов массива slider и добавляет их в документ.
function slideSlider() {
  let div = document.createElement("div");
  div = slider[slider.length - 1];
  div.classList.add("item");
  div.style.left = -140 + "px";
  document.querySelector(".items").appendChild(div);

  div = slider[step];
  div.classList.add("item");
  div.style.left = offset * 140 + "px";
  document.querySelector(".items").appendChild(div);

  div = slider[step + 1];
  div.classList.add("item");
  div.style.left = offset * 140 + 140 + "px";
  document.querySelector(".items").appendChild(div);
  offset = 1;

  div = slider[step + 2];
  div.classList.add("item");
  div.style.left = offset * 140 + 140 + 140 + "px";
  document.querySelector(".items").appendChild(div);
  offset = 2;

  div = slider[step + 3];
  div.classList.add("item");
  div.style.left = offset * 140 + 140 + 140 + 140 + "px";
  document.querySelector(".items").appendChild(div);
  offset = 3;

  div = slider[step + 4];
  div.classList.add("item");
  div.style.left = offset * 140 + 140 + 140 + 140 + 140 + "px";
  document.querySelector(".items").appendChild(div);
  offset = 4;

  div = slider[step + 5];
  div.classList.add("item");
  div.style.left = offset * 140 + 140 + 140 + 140 + 140 + 140 + "px";
  document.querySelector(".items").appendChild(div);
  offset = 5;

  div = slider[step + 6];
  div.classList.add("item");
  div.style.left = offset * 140 + 140 + 140 + 140 + 140 + 140 + 140 + "px";
  document.querySelector(".items").appendChild(div);
  offset = 6;
}
//Функция, которая изменяет значения переменных step и offset и создает новые элементы на основе элементов массива slider и добавляет их в HTML документ.
function slideSliderL() {
  if (step == slider.length - 1) {
    step = 1;
  } else {
    if (step == slider.length - 2) {
      step = 0;
    } else {
      step = step + 2;
    }
  }
  let div = document.createElement("div");
  div = slider[step];
  div.classList.add("item");
  div.style.left = offset * 140 + "px";
  document.querySelector(".items").appendChild(div);

  if (step == 0) {
    step = slider.length - 1;
  } else {
    step = step - 1;
  }
  offset = 1;
}
//Функция, которая изменяет позицию элементов в документе и вызывает функцию slideSliderL для создания новых элементов.
function left() {
  leftArrow.onclick = null;

  let slider2 = document.querySelectorAll(".item");
  let offset2 = -1;
  for (let i = 0; i < slider2.length; i++) {
    slider2[i].style.left = offset2 * 140 - 140 + "px";
    offset2++;
  }
  setTimeout(function () {
    slider2[0].remove();
    slideSliderL();
    leftArrow.onclick = left;
  }, 600);
}
//Функция, которая изменяет значения переменных step и offset и создает новые элементы на основе элементов массива slider и добавляет их в мой документ.
function slideSliderR() {
  if (step == 0) {
    step = slider.length - 2;
  } else {
    if (step == 1) {
      step = slider.length - 1;
    } else {
      step = step - 2;
    }
  }
  let offset = -1;
  let div = document.createElement("div");
  div = slider[step];
  div.classList.add("item");
  div.style.left = offset * 140 + "px";
  document.querySelector(".items").insertBefore(div, items.firstElementChild);
  if (step == slider.length - 1) {
    step = 0;
  } else {
    step = step + 1;
  }
  offset = 1;
}
//функция, которая изменяет позицию элементов в документе и вызывает функцию slideSliderR для создания новых элементов.
function right() {
  rightArrow.onclick = null;

  let slider2 = document.querySelectorAll(".item");
  let offset2 = slider2.length - 1;

  for (let i = slider2.length - 1; i >= 0; i--) {
    slider2[i].style.left = offset2 * 140 + "px";
    offset2--;
  }
  setTimeout(function () {
    slider2[slider2.length - 1].remove();
    slideSliderR();
    rightArrow.onclick = right;
  }, 600);
}
//Начальное состояние слайдера
slideSlider();
step = 0;
//Обработчики событий на элементы leftArrow и rightArrow, которые вызывают функции left и right соответственно.
document.querySelector(".leftArrow").addEventListener("click", () => {
  left();
});
document.querySelector(".rightArrow").addEventListener("click", () => {
  right();
});
