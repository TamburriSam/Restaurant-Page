import { home } from './renderElement.js';
import {menu} from './menu.js';
import {contact} from './contact.js';



const contentDiv = document.querySelector('#content');
contentDiv.setAttribute("id", "mainpic"); 

//tabbed event listeners



home();



const homeBtn = document.querySelector('.home');
const contactBtn = document.querySelector('.contact');
const menuBtn = document.querySelector('.menu');



homeBtn.addEventListener('click', function(){
    location.reload();
})

menuBtn.addEventListener('click', function(){
    homeBtn.style.textDecoration = 'none';
    menuBtn.style.textDecoration = 'overline wavy';

    menu();
})

contactBtn.addEventListener('click', function(){
    homeBtn.style.textDecoration = 'none';
    contactBtn.style.textDecoration = 'overline wavy';

    contact();
})



//makeTitle(contentDiv)
//makeSubtitle(contentDiv)