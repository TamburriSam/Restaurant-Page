

function makeAdvertisement(){
    const content = document.querySelector('#mainpic')
    const advertisement = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Get 20% off your first two orders with code 20OFF2NOW';

    advertisement.setAttribute('id', 'advertisement');
    advertisement.appendChild(h1)

    content.appendChild(advertisement)



}

function makeBackground() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "background")
  
  const content = document.querySelector('#mainpic');
  content.appendChild(newDiv)
}

function headingDiv(){
  const heading = document.createElement('div');
  heading.setAttribute("class", "heading")
  const background = document.querySelector('.background');
  background.appendChild(heading)
}

function makeTitle(){
    const heading = document.querySelector('.heading');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h2.innerHTML = 'a subscription service for strange fruits. '
    h1.innerHTML = '<i class="far fa-lemon"></i> Strange Roots <br>';
    h1.setAttribute('id', 'title');
    h2.setAttribute('id', 'subtitle');
    h1.appendChild(h2)
    heading.appendChild(h1)
}


function makeNav() {
    const background = document.querySelector('.background');
    const home = document.createElement('button');
    home.setAttribute('class', 'home');
    background.appendChild(home)

    const navContainer = document.createElement('div');
    background.appendChild(navContainer);

   const h2 =  document.createElement('h2');
   h2.innerHTML = 'home';
   home.appendChild(h2)

    const menu = document.createElement('button');
   menu.setAttribute('class', 'menu');
   background.appendChild(menu)

   const h22 = document.createElement('h2');
   h22.innerHTML = 'menu';
   menu.appendChild(h22)

   const contact = document.createElement('button');
   contact.setAttribute('class', 'contact');
   background.appendChild(contact)

   const h21 = document.createElement('h2');
   h21.innerHTML ='contact';
   contact.appendChild(h21)

   const social = document.createElement('div');
   const socialh2 = document.createElement('h2');
   
   socialh2.innerHTML = `<i class="fab fa-instagram"></i>&nbsp  <i class="fab fa-twitter"></i>  <i class="fab fa-youtube"></i>`
   social.appendChild(socialh2)
   navContainer.appendChild(social)
   socialh2.setAttribute('id', 'socialh2')
   social.setAttribute('id', 'socialcontainer')

   navContainer.setAttribute('id', 'navcontainer')
   navContainer.appendChild(home)
   navContainer.appendChild(menu)
   navContainer.appendChild(contact)
   navContainer.appendChild(social);


} 

function homeContent(){
    const mainpic = document.querySelector('#mainpic');
    const tryDiv = document.createElement('div');
    tryDiv.innerHTML = 'Try Your First Month Free!';
    tryDiv.setAttribute('id', 'tryDiv')
    mainpic.appendChild(tryDiv);

    const tryBtn = document.createElement('button');
    tryBtn.innerHTML ='Try Now';
    tryBtn.setAttribute('id', 'tryBtn')
    tryDiv.appendChild(tryBtn)
}

function info(){
    const mainpic = document.querySelector('#mainpic');
    const infoDiv = document.createElement('div');
    infoDiv.innerHTML = `Tired of spending loot <br> on same ol' fruit? <br>Try <span id = "strange">Strange Roots</span> <br> <i class="lemon fas fa-lemon"></i>`;

    //VIEW CATALOG BUTTON SHOULD GO HERE FOR AUTHENTICITY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!LINK IT TO MENU !!!!!!!!!!!!!!!!!!!!!!

    infoDiv.setAttribute('id', 'infoDiv')
    mainpic.appendChild(infoDiv);
}

function newsLetter(){
const form = document.createElement('div');
const mainpic = document.querySelector('#mainpic');



form.innerHTML = `<input type="text" id="formInput" placeholder="Enter Email"> <h2 id="signup">Sign Up for our weekly newsletter, get 10% off your first order.</h2> <br> <button type ="button" id ="email">Sign Up</button>`

form.setAttribute('id', 'form')

mainpic.appendChild(form)
}

function home(){
makeAdvertisement();
makeBackground(); //background container
headingDiv();
makeTitle();
makeNav();
homeContent();
info();
newsLetter();
}


export { home, makeNav };
