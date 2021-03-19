import { home } from './renderElement.js'



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

contactBtn.addEventListener('click', function(){

})

menuBtn.addEventListener('click', function(){
    
})

//makeTitle(contentDiv)
//makeSubtitle(contentDiv)