// import { carArr } from "./imageCode";
import { carArr } from "../imagecode-folder/imagecode";
import {
  createImageHtml,
  removeImageHtml,
} from "../imagecode-folder/imagecodehtml";
export {
  dispayImages,
  displayImageCounter,
  timeoutFunc,
  lowerCounter,
  raiseCounter,
};

let displayImageCounter = 0;

function autoChange() {}

function dispayImages(array) {
  if (displayImageCounter == array.length) {
    displayImageCounter = 0;
    console.log(array[displayImageCounter]);
    removeImageHtml();
    createImageHtml(
      array[displayImageCounter].photoHTML,
      array[displayImageCounter].photoClassName,
    );
  } else if (displayImageCounter == -1) {
    displayImageCounter = array.length - 1;
    removeImageHtml();
    createImageHtml(
      array[displayImageCounter].photoHTML,
      array[displayImageCounter].photoClassName,
    );
  } else {
    console.log(array[displayImageCounter]);
    removeImageHtml();
    createImageHtml(
      array[displayImageCounter].photoHTML,
      array[displayImageCounter].photoClassName,
    );
  }
}

function timeoutFunc(array) {
  dispayImages(array);
  setInterval(() => {
    displayImageCounter++;
    dispayImages(array);
  }, 5000);
}

//button code
let leftButton = document.querySelector(".left-btn");
let rightButton = document.querySelector(".right-btn");

function lowerCounter(array) {
  leftButton.addEventListener("click", () => {
    displayImageCounter--;
    dispayImages(array);
  });
}

function raiseCounter(array) {
  rightButton.addEventListener("click", () => {
    console.log(displayImageCounter);
    displayImageCounter++;
    dispayImages(array);
  });
}

//bottom button code
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
    dispayImages(carArr);
  });
}
