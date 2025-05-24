import "./styles.css";
import { carArr, photosForCarousel } from "./imagecode-folder/imagecode";
import {
  bottomCarouselButtonCreator,
  lowerCounter,
  raiseCounter,
  timeoutFunc,
} from "./carousel-folder/carousel";
bottomCarouselButtonCreator;
photosForCarousel();
timeoutFunc(carArr);
lowerCounter(carArr);
raiseCounter(carArr);
carArr.forEach((image) => {
  bottomCarouselButtonCreator(image);
});
