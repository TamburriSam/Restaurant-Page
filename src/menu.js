import {makeNav} from './renderElement'


function test(){
    const mainpic = document.querySelector('#mainpic');
    const bigDiv = document.createElement('div');
    const infoDiv = document.querySelector('#infoDiv');
    const tryDiv = document.querySelector('#tryDiv')

    bigDiv.setAttribute('id', 'bigDiv')

    mainpic.appendChild(bigDiv)

    infoDiv.style.display ='none';
    tryDiv.style.display='none';
}

function testBackground(){
 const bigDiv = document.querySelector('#bigDiv');
 const newDiv = document.createElement('div');
 newDiv.setAttribute('id', 'menuBackground');

 bigDiv.appendChild(newDiv)


}



function menu(){
    test();
    testBackground();

}

export { menu }