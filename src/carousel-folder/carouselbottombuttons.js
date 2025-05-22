const divCreate = document.createElement("div");
const pCreate = document.createElement("p");
let bottomCaroContainer = document.querySelector(".bottomCaroDiv");

function createDivSection(parentDiv, div, className) {
  let cloneDivCreate = div.cloneNode(true);
  cloneDivCreate.classList.add(className);
  parentDiv.appendChild(cloneDivCreate);
  return { cloneDivCreate };
}

function createP(div, p, text, className) {
  let clonePCreate = p.cloneNode(true);
  clonePCreate.innerText = text;
  clonePCreate.classList.add(className);
  div.appendChild(clonePCreate);
}

function bottomCarouselButtonCreator(image) {
  let bottomButtonDiv = createDivSection(
    bottomCaroContainer,
    divCreate,
    "bottomButtonDiv",
  );
  let bottomButton = createP(bottomButtonDiv, pCreate, ".", "bottomButton");
}
