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

const figDiv = document.createElement('div');
figDiv.setAttribute('class', 'foodDivs');
figDiv.innerHTML = '<h2 class ="mango">Mango $100/lb <br> Starfruit $100/lb <br> Passionfruit $100/lb <br> Jackfruit $100/lb <br> Durian $100/lb <br> Rambutan $100/lb <br> Mangosteen $100/lb</>'

/* add add to cart btn  */

newDiv.appendChild(figDiv)
}

function removeMenu(){
    const menuBackground = document.querySelector('#menuBackground');
    menuBackground.style.display = 'none';

  


 

}



function menu(){
    test();
    testBackground();

}

export { menu, removeMenu }