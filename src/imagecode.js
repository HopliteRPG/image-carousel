import gyro from "./images/gyro.jpeg";
import pizza from "./images/pizza.jpeg";
export { allTogether };

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

//Photos
function createImageObj(photo, id, className) {
  const tempPhoto = document.createElement("img");
  tempPhoto.src = photo;
  const photoId = id;
  const photoClassName = className;
  return { tempPhoto, photoId, photoClassName };
}

function allTogether() {
  let gyroImage = createImageObj(gyro, 0, "photoTest");

  createImageHtml(imageContainer, imageVar, gyro, "photoTest");
  alert("ran");
}
