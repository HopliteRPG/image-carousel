import gyro from "./images/gyro.jpeg";
import pizza from "./images/pizza.jpeg";
export { allTogether };

const carArr = [];

let imageContainer = document.querySelector(".image-container");
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
  carArr.push(gyroImage);
  console.log(carArr);
  imageContainer.appendChild(carArr[0].tempPhoto);
  alert("ran");
}
