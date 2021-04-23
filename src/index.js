import { home } from "./renderElement.js";
import { menu, removeMenu } from "./menu.js";
import { contact, removeContact } from "./contact.js";

const contentDiv = document.querySelector("#content");
contentDiv.setAttribute("id", "mainpic");

home();

const homeBtn = document.querySelector(".home");
const contactBtn = document.querySelector(".contact");
const menuBtn = document.querySelector(".menu");

homeBtn.addEventListener("click", function () {
  location.reload();
});

menuBtn.addEventListener("click", function () {
  homeBtn.style.textDecoration = "none";
  menuBtn.style.textDecoration = "overline solid";
  if (contactBtn.style.textDecoration) {
    contactBtn.style.textDecoration = "none";
    removeContact();
  }

  menuBtn.disabled = true;
  contactBtn.disabled = false;

  menu();
});

contactBtn.addEventListener("click", function () {
  homeBtn.style.textDecoration = "none";
  contactBtn.style.textDecoration = "overline solid";

  if (menuBtn.style.textDecoration) {
    menuBtn.style.textDecoration = "none";
    removeMenu();
  }
  contactBtn.disabled = true;
  menuBtn.disabled = false;
  contact();
});

document.getElementById("githubBtn").onclick = function () {
  window.open("https://github.com/TamburriSam", "_blank");
};
