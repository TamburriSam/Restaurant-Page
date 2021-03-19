import { home } from './renderElement.js';
import {menu} from './menu.js'



const contentDiv = document.querySelector('#content');
contentDiv.setAttribute("id", "mainpic"); 

//tabbed event listeners



home();

const homeBtn = document.querySelector('.home');
const contactBtn = document.querySelector('.contact');
const menuBtn = document.querySelector('.menu');



homeBtn.addEventListener('click', function(){
    home();
})

menuBtn.addEventListener('click', function(){

    menu();
})

contactBtn.addEventListener('click', function(){

})



//makeTitle(contentDiv)
//makeSubtitle(contentDiv)