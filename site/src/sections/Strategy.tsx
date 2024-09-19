import { ResponsiveImage } from "../components/ResponsiveImage";

import imageStrategic from "../assets/mobile/image-strategic.jpg";
import imageStrategicTablet from "../assets/tablet/image-strategic.jpg";
import imageStrategicDesktop from "../assets/desktop/image-strategic.jpg";
import redPattern from "../assets/bg-pattern-wave-red.svg";

import { Heading2, Paragraph } from "../components/text";
import { Button } from "../components/Button";

export function Strategy() {
  return (
    <div className="sm:flex relative">
      <div className="relative flex-shrink-0">
        <img
          src={redPattern}
          className="absolute top-0 left-6 -translate-y-1/2 sm:translate-y-0 w-14 sm:left-auto sm:right-0 sm:translate-x-1/2 sm:top-[145px] xl:top-[234px] xl:w-auto"
        />
        <ResponsiveImage
          className="sm:min-w-[378px] xl:min-w-[735px]"
          mobile={imageStrategic}
          tablet={imageStrategicTablet}
          desktop={imageStrategicDesktop}
        />
      </div>
      <div className="px-6 bg-black text-white py-[72px] sm:pt-[120px] sm:pl-[69px] sm:pr-[40px] xl:pt-[200px] xl:pl-[154px] xl:pr-[106px] text-[15px]">
        <Heading2 className="mb-6 xl:mb-11">
          <span className="text-red">Design </span>is
          <br className="hidden md:block" /> strategic.
        </Heading2>
        <Paragraph className="mb-10 xl:mb-12">
          “A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.”
        </Paragraph>
        <Button variant="secondary">Schedule a Call</Button>
      </div>
    </div>
  );
}
