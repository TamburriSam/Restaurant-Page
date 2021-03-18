import {  makeBackground, makeTitle, makeSubtitle, makeNav } from './renderElement.js'
//make factory


const contentDiv = document.querySelector('#content');
contentDiv.setAttribute("id", "mainpic");




makeBackground(contentDiv)
makeTitle(contentDiv)
makeSubtitle(contentDiv)