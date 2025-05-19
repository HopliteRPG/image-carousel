export { createImageHtml, removeImageHtml };
let imageContainer = document.querySelector(".image-container");
const imageVar = document.createElement("img");

function createImageHtml(imageSrc, className) {
  let cloneImageCreate = imageVar.cloneNode(true);
  cloneImageCreate.src = imageSrc;
  cloneImageCreate.classList.add(className);
  imageContainer.appendChild(cloneImageCreate);
}

function removeImageHtml() {
  let currentPhoto = document.querySelector(".photoTest");
  console.log(currentPhoto);
  if (currentPhoto !== null) {
    imageContainer.removeChild(currentPhoto);
  } else {
    return;
  }
}
