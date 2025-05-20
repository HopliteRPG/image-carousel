import gyro from "../images/gyro.jpeg";
import pizza from "../images/pizza.jpeg";
import sushi from "../images/sushi.jpg";
export { exportCreateImageObjAndPushArr, photosForCarousel, carArr };

let idCounter = 0;
const carArr = [];

function setAndIncreasePhotoIdCount(photo) {
  photo.photoId = idCounter;
  idCounter++;
}

function createImageObj(photo) {
  let photoHTML = photo;
  const photoId = undefined;
  const photoClassName = "photoTest";
  const photoVisible = false;
  return { photoHTML, photoId, photoClassName, photoVisible };
}

function exportCreateImageObjAndPushArr(photo) {
  let tempPhoto = createImageObj(photo);
  setAndIncreasePhotoIdCount(tempPhoto);
  carArr.push(tempPhoto);
  console.log(carArr);
}

function photosForCarousel() {
  exportCreateImageObjAndPushArr(gyro);
  exportCreateImageObjAndPushArr(pizza);
  exportCreateImageObjAndPushArr(sushi);
}
