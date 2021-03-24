const mainpic = document.querySelector('#mainpic');


function clear(){
    const mainpic = document.querySelector('#mainpic');
    const overDiv = document.createElement('div');
    const infoDiv = document.querySelector('#infoDiv');
    const tryDiv = document.querySelector('#tryDiv');
    const signup = document.querySelector('#form');

    overDiv.setAttribute('id', 'overdiv');

    mainpic.appendChild(overDiv)

    infoDiv.style.display ='none';
    tryDiv.style.display='none';
    signup.style.display='none';
}

function contactSheet(){
    const overlay = document.createElement('div');
    const overDiv = document.querySelector('#overdiv')

    overlay.setAttribute('id', 'overlay')
    overDiv.appendChild(overlay)

    overlay.innerHTML = 'Phone: 555-999-2394 <br> Email: StrangeRoots@tamburri.com <br> HR Office: 153 Johnson Ave, Brooklyn, NY 11206 <br>' + '<div style="width: 100%"><iframe width="100%" height="380" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=123%20Graham%20Ave,%20Brooklyn%20NY%2011206+(Strange%20Roots)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/route-planner.htm">Driving Route Planner</a></div>'

}

function contact(){
    clear();
    contactSheet();
}

function removeContact(){
    const contactForm = document.querySelector('#overdiv');

    contactForm.style.display = 'none'
}

export { contact, removeContact }