import "./styles.css";
import { carArr, photosForCarousel } from "./imagecode-folder/imagecode";
import { lowerCounter, timeoutFunc } from "./carousel-folder/carousel";
photosForCarousel();
timeoutFunc(carArr);
lowerCounter(carArr);
