const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const cancelBtn2 = document.querySelector(".cancel-icon2");
const cartBtn = document.querySelector(".cart-icon");
const useBtn = document.querySelector(".user-icon");
const item = document.querySelector(".exul");
const menu = document.querySelector(".menu-icon");
const form = document.querySelector("form");
const cart = document.querySelector(".cartive");
const whencart = document.querySelector(".whencartive");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const content2 = document.querySelector(".main_content_2_flex");
let count = 0;

menuBtn.onclick = () => {
  item.classList.add("active");
  cancelBtn.classList.add("show");

}

cancelBtn.onclick = () => {
  item.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cartBtn.classList.remove("hide");
  useBtn.classList.remove("hide");

}

searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

cartBtn.onclick = () => {
  cart.classList.add("active");
  whencart.classList.add("active");
}

cancelBtn2.onclick = () => {
  cart.classList.remove("active");
  whencart.classList.remove("active");
}
let slideIndex = 0;
showSlides();

next.onclick = () => {
  count += 320;
  content2.style.right = `${count}px`;
  console.log(1);
}
prev.onclick = () => {
  if (count - 320 >= 0) {
    count -= 320;
    content2.style.right = `${count}px`;
    console.log(1);
  }

}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = " 0";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.opacity = " 1";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}