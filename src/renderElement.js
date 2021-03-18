

function makeBackground(div) {
  const newDiv = document.createElement("div");
  div.appendChild(newDiv);
}

function makeTitle(div) {
  const h1 = document.createElement("h1");
  const text = document.createTextNode("Strange Roots");
  h1.appendChild(text);
  h1.setAttribute("id", "title");

  const newDiv = document.createElement('div');
  newDiv.setAttribute("id", "empty")
  newDiv.appendChild(h1)

  div.appendChild(newDiv);
}

function makeSubtitle(div) {
  const h2 = document.createElement("h2");
  const text = document.createTextNode(
    "a subscription service for strange fruits."
  );
  h2.appendChild(text);
  h2.setAttribute("id", "subtitle");
  div.appendChild(h2);
}

function makeNav() {

}

export {makeBackground, makeTitle, makeSubtitle, makeNav };
