const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const item = document.querySelector("ul");
const menu = document.querySelector(".menu-icon");
const form = document.querySelector("form");
const user = document.querySelector(".user-icon");
const cart = document.querySelector(".cart-icon");
const hidesearch = document.querySelector(".hide-search-icon");
const cartdrawer = document.querySelector(".cartdrawer");
const canclecart = document.querySelector(".cancle-cart");
const userdrawer = document.querySelector(".userdrawer");

menuBtn.onclick = () => {
    item.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    user.classList.add("hide");
    cart.classList.add("hide");
}

cancelBtn.onclick = () => {
    item.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    user.classList.remove("hide");
    cart.classList.remove("hide");
}

searchBtn.onclick = () => {
    form.classList.add("active");
}

hidesearch.onclick = () => {
    form.classList.remove("active");
}

cart.onclick = () => {
    cartdrawer.classList.add("active");
    userdrawer.classList.remove("active");
}

canclecart.onclick = () => {
    cartdrawer.classList.remove("active");
}

user.onclick = () => {
    userdrawer.classList.toggle("active");
    cartdrawer.classList.remove("active");
}
