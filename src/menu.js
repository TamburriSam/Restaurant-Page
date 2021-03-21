function test() {
  const mainpic = document.querySelector("#mainpic");
  const bigDiv = document.createElement("div");
  const infoDiv = document.querySelector("#infoDiv");
  const tryDiv = document.querySelector("#tryDiv");

  bigDiv.setAttribute("id", "bigDiv");

  mainpic.appendChild(bigDiv);

  infoDiv.style.display = "none";
  tryDiv.style.display = "none";
}

function testBackground() {
  const bigDiv = document.querySelector("#bigDiv");
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "menuBackground");

  bigDiv.appendChild(newDiv);

  const figDiv = document.createElement("div");
  figDiv.setAttribute("class", "foodDivs");
  figDiv.innerHTML =
    '<h2 class ="mango">Mango $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button><br>Starfruit $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> Passionfruit $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> Jackfruit $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> Durian $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> Rambutan $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> ';

  /* add add to cart btn  */

  const halfDiv = document.createElement('div');
  halfDiv.setAttribute('class', 'halfDiv');

  halfDiv.innerHTML = `<div id="mangos">m</div>
  <div id="starfruit">s</div> <div id="passion">p</div> <div id="jackfruit">j</div> <div id="durian">d</div> <div id="rambutan">r</div>`

  newDiv.appendChild(halfDiv)
  newDiv.appendChild(figDiv);
  
}

function removeMenu() {
  const menuBackground = document.querySelector("#menuBackground");
  menuBackground.style.display = "none";
}

function menu() {
  test();
  testBackground();
}

export { menu, removeMenu };
