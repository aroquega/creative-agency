import { ResponsiveImage } from "./ResponsiveImage";

import slide1Mobile from "../assets/mobile/image-slide-1.jpg";
import slide1Tablet from "../assets/tablet/image-slide-1.jpg";
import slide1Desktop from "../assets/desktop/image-slide-1.jpg";

import slide2Mobile from "../assets/mobile/image-slide-2.jpg";
import slide2Tablet from "../assets/tablet/image-slide-2.jpg";
import slide2Desktop from "../assets/desktop/image-slide-2.jpg";

import slide3Mobile from "../assets/mobile/image-slide-3.jpg";
import slide3Tablet from "../assets/tablet/image-slide-3.jpg";
import slide3Desktop from "../assets/desktop/image-slide-3.jpg";

export const Slide1 = () => (
  <ResponsiveImage
    mobile={slide1Mobile}
    tablet={slide1Tablet}
    desktop={slide1Desktop}
  />
);

export const Slide2 = () => (
  <ResponsiveImage
    mobile={slide2Mobile}
    tablet={slide2Tablet}
    desktop={slide2Desktop}
  />
);

export const Slide3 = () => (
  <ResponsiveImage
    mobile={slide3Mobile}
    tablet={slide3Tablet}
    desktop={slide3Desktop}
  />
);
