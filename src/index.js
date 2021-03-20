import { home } from "./renderElement.js";
import { menu, removeMenu } from "./menu.js";
import { contact } from "./contact.js";

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
  menuBtn.style.textDecoration = "overline wavy";
  if (contactBtn.style.textDecoration) {
    contactBtn.style.textDecoration = "none";
  }

  menuBtn.disabled = true;
  contactBtn.disabled = false;

 
  menu();
});

contactBtn.addEventListener("click", function () {
  homeBtn.style.textDecoration = "none";
  contactBtn.style.textDecoration = "overline wavy";

  if (menuBtn.style.textDecoration) {
    menuBtn.style.textDecoration = "none";
        removeMenu();
  }
  contactBtn.disabled = true;
  menuBtn.disabled = false;
  contact();

  
 

});
