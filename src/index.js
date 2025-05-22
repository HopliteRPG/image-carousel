import "./styles.css";
import { carArr, photosForCarousel } from "./imagecode-folder/imagecode";
import {
  lowerCounter,
  raiseCounter,
  timeoutFunc,
} from "./carousel-folder/carousel";
import { bottomCarouselButtonCreator } from "./carousel-folder/carouselbottombuttons";
photosForCarousel();
timeoutFunc(carArr);
lowerCounter(carArr);
raiseCounter(carArr);
carArr.forEach((image) => {
  bottomCarouselButtonCreator(image);
});
