export { bottomCarouselButtonCreator };

const divCreate = document.createElement("div");
const pCreate = document.createElement("p");
let bottomCaroContainer = document.querySelector(".bottom-caro-container");

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
  console.log(div);
  console.log(clonePCreate);
  div.appendChild(clonePCreate);
  return { clonePCreate };
}

function bottomCarouselButtonCreator(image) {
  let bottomButtonDiv = createDivSection(
    bottomCaroContainer,
    divCreate,
    "bottomButtonDiv",
  );
  let bottomButton = createP(
    bottomButtonDiv.cloneDivCreate,
    pCreate,
    ".",
    "bottomButton",
  );

  bottomButton.clonePCreate.addEventListener("click", function () {
    alert(image.photoId);
  });
}
