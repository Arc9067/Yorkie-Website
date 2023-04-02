let menu = document.querySelector(".menu");
let navUl = document.querySelector(".nav-ul");
let cursor = document.querySelector(".custom-cursor");
let loader = document.querySelector("#loading");

menu.addEventListener("click", () => {
  navUl.classList.toggle("display");
});

window.addEventListener("load", () => {
  const element = document.querySelector(".loader");
  const beforeStyle = window.getComputedStyle(element, "::before");

  loader.style.display = "none";
});
