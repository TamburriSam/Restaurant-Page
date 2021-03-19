import { makeAdvertisement, makeBackground, headingDiv, makeTitle, makeNav, homeContent, info } from './renderElement.js'
//make factory


const contentDiv = document.querySelector('#content');
contentDiv.setAttribute("id", "mainpic");

//tabbed event listeners
const home = document.querySelector('.home')

/* home.addEventListener('click', function(){
    clear();
}) */

function homeClick(){
    home.addEventListener('click', function(){
        console.log('j')
    })
}


makeAdvertisement();
makeBackground(contentDiv); //background container
headingDiv();
makeTitle();
makeNav();
homeContent();
info();

//makeTitle(contentDiv)
//makeSubtitle(contentDiv)