// import { carArr } from "./imageCode";
export { dispayImages, timeoutFunc, lowerCounter, raiseCounter };

let displayImageCounter = 0;

function dispayImages(array) {
  if (displayImageCounter == array.length) {
    displayImageCounter = 0;
    console.log(array[displayImageCounter]);
    displayImageCounter++;
  } else {
    console.log(array[displayImageCounter]);
    displayImageCounter++;
  }
}

function timeoutFunc(array) {
  dispayImages(array);
  setInterval(() => {
    dispayImages(array);
  }, 5000);
}

//button code
let leftButton = document.querySelector(".left-btn");
let rightButton = document.querySelector(".right-btn");

function lowerCounter(array) {
  leftButton.addEventListener("click", () => {
    if (displayImageCounter == 0) {
      displayImageCounter = array.length - 1;
      dispayImages(array);
    } else {
      displayImageCounter - 1;
      dispayImages(array);
    }
  });
}

function raiseCounter(array) {
  rightButton.addEventListener("click", () => {
    console.log(displayImageCounter);
    // displayImageCounter++;
    dispayImages(array);
  });
}
