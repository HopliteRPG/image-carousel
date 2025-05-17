import gyro from "./images/gyro.jpeg";
import pizza from "./images/pizza.jpeg";
export { allTogether, carArr };

let idCounter = 0;
const carArr = [];

//Declaring HTML Variables
let imageContainer = document.querySelector(".image-container");
const imageVar = document.createElement("img");

function createImageHtml(parentDiv, imageVar, imageSrc, className) {
  let cloneImageCreate = imageVar.cloneNode(true);
  cloneImageCreate.src = imageSrc;
  cloneImageCreate.classList.add(className);
  parentDiv.appendChild(cloneImageCreate);
}

function setAndIncreasePhotoIdCount(photo) {
  photo.photoId = idCounter;
  idCounter++;
}

//Photos
function createImageObj(photo) {
  let photoHTML = photo;
  const photoId = undefined;
  const photoClassName = "photoTest";
  const photoVisible = false;
  return { photoHTML, photoId, photoClassName, photoVisible };
}

function createAndAppendImageObj(photo) {
  let tempPhoto = createImageObj(photo);
  setAndIncreasePhotoIdCount(tempPhoto);

  createImageHtml(
    imageContainer,
    imageVar,
    tempPhoto.photoHTML,
    tempPhoto.photoClassName,
  );

  carArr.push(tempPhoto);
  console.log(carArr);
}

function allTogether() {
  createAndAppendImageObj(gyro);
  createAndAppendImageObj(pizza);
  alert("ran");
}
