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

interface SlideCaptionProps {
  title: string;
  description: string;
}

function SlideCaption({ title, description }: SlideCaptionProps) {
  return (
    <div className="absolute right-0 left-0 bottom-0 px-8 py-[35px] sm:py-[40px] sm:px-[45px] xl:px-[154px] xl:py-[68px] text-[15px] text-white bg-gradient-to-t from-black to-transparent text-right">
      <p className="font-extrabold xl:text-[20px]">{title}</p>
      <p className="text-white xl:text-[18px]">{description}</p>
    </div>
  );
}

export const Slide1 = () => (
  <div className="relative">
    <ResponsiveImage
      mobile={slide1Mobile}
      tablet={slide1Tablet}
      desktop={slide1Desktop}
    />
    <SlideCaption title="Lean Product Roadmap" description="2019 Project" />
  </div>
);

export const Slide2 = () => (
  <div className="relative">
    <ResponsiveImage
      className="sm:max-w-[895px]"
      mobile={slide2Mobile}
      tablet={slide2Tablet}
      desktop={slide2Desktop}
    />
    <SlideCaption title="New Majestic Hotel" description="2018 Project" />
  </div>
);

export const Slide3 = () => (
  <div className="relative">
    <ResponsiveImage
      className="sm:max-w-[895px]"
      mobile={slide3Mobile}
      tablet={slide3Tablet}
      desktop={slide3Desktop}
    />
    <SlideCaption title="Crypto Dashboard" description="2016 Project" />
  </div>
);
