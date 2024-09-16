import { ResponsiveImage } from "../components/ResponsiveImage";

import imageStrategic from "../assets/mobile/image-strategic.jpg";
import imageStrategicTablet from "../assets/tablet/image-strategic.jpg";
import imageStrategicDesktop from "../assets/desktop/image-strategic.jpg";
import { Heading2, Paragraph } from "../components/text";
import { Button } from "../components/Button";

export function Strategy() {
  return (
    <div className="sm:flex">
      <ResponsiveImage
        mobile={imageStrategic}
        tablet={imageStrategicTablet}
        desktop={imageStrategicDesktop}
      />
      <div className="px-6 bg-black text-white py-[72px] sm:pt-[120px] md:pl-[69px] md:pr-[40px] xl:pt-[200px] xl:pl-[154px] xl:pr-[141px] text-[15px]">
        <Heading2 className="mb-6">
          <span className="text-red">Design </span>is
          <br className="hidden md:block" /> strategic.
        </Heading2>
        <h2 className=""></h2>
        <Paragraph className="mb-10">
          “A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.”
        </Paragraph>
        <Button variant="secondary">Schedule a Calla</Button>
      </div>
    </div>
  );
}
