// import { carArr } from "./imageCode";
export { dispayImages, timeoutFunc };

let displayImageCounter = 0;
function dispayImages(array) {
  console.log(array[displayImageCounter]);
  displayImageCounter++;
}

function timeoutFunc(array) {
  setInterval(() => {
    dispayImages(array);
  }, 2000);
}
