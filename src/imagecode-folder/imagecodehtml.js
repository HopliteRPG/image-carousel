//Declaring HTML Variables
let imageContainer = document.querySelector(".image-container");
const imageVar = document.createElement("img");

function createImageHtml(parentDiv, imageVar, imageSrc, className) {
  let cloneImageCreate = imageVar.cloneNode(true);
  cloneImageCreate.src = imageSrc;
  cloneImageCreate.classList.add(className);
  parentDiv.appendChild(cloneImageCreate);
}
