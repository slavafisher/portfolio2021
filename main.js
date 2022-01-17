"use strict";

const menuBtn = document.querySelector(".pointer");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {
  console.log(menu.className);
  menu.classList.toggle("display");
  menu.classList.toggle("noneDisplay");
  //   if (menu.className === "display") {
  //     menu.classList.remove("display");
  //     menu.classList.add("noneDisplay");
  //   } else {
  //     menu.classList.remove("noneDisplay");
  //     menu.classList.add("display");
  //   }
});
