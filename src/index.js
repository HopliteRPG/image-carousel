import "./styles.css";
import { carArr, photosForCarousel } from "./imagecode-folder/imagecode";
import {
  lowerCounter,
  raiseCounter,
  timeoutFunc,
} from "./carousel-folder/carousel";
photosForCarousel();
timeoutFunc(carArr);
lowerCounter(carArr);
raiseCounter(carArr);
