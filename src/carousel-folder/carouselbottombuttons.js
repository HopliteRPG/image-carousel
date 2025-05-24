import { displayImageCounter } from "./carousel";

export { bottomCarouselButtonCreator };

const divCreate = document.createElement("div");
const pCreate = document.createElement("p");
const buttonCreate = document.createElement("button");
let bottomCaroContainer = document.querySelector(".bottom-caro-container");

function createDivSection(parentDiv, div, className) {
  let cloneDivCreate = div.cloneNode(true);
  cloneDivCreate.classList.add(className);
  parentDiv.appendChild(cloneDivCreate);
  return { cloneDivCreate };
}

function createButton(div, button, buttonClass) {
  let cloneButtonCreate = button.cloneNode(true);
  cloneButtonCreate.classList.add(buttonClass);
  div.appendChild(cloneButtonCreate);
  return { cloneButtonCreate };
}

function bottomCarouselButtonCreator(image) {
  let bottomButtonDiv = createDivSection(
    bottomCaroContainer,
    divCreate,
    "bottomButtonDiv",
  );
  let bottomButton = createButton(
    bottomButtonDiv.cloneDivCreate,
    buttonCreate,
    "bottomButton",
  );

  bottomButton.cloneButtonCreate.addEventListener("click", function () {
    displayImageCounter = image.photoId;
    displayImageCounter(displayImageCounter);
    alert(image.photoId);
  });
}
