// import { carArr } from "./imageCode";
export { dispayImages, timeoutFunc };

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
  }, 2000);
}
