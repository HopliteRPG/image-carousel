import "./styles.css";
import { carArr, photosForCarousel } from "./imagecode-folder/imagecode";
import { timeoutFunc } from "./carousel-folder/carousel";
photosForCarousel();
timeoutFunc(carArr);
