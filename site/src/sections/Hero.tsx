import { Heading1, Paragraph } from "../components/text";

import heroMobile from "../assets/mobile/image-hero.jpg";
import { Button } from "../components/Button";

export function Hero() {
  return (
    <>
      <img className="sm:hidden w-full" src={heroMobile} alt="Our Team" />
      <div className="px-6 md:px-[39px] md:pb-[150px] xl:pt-[112px] lg:pl-[165px] pt-14 md:pt-[77px] pb-24 sm:bg-hero-tablet lg:bg-hero-desktop lg:min-h-[800px] bg-no-repeat bg-right">
        <Heading1 className="sm:max-w-[398px] xl:max-w-[550px]">
          Branding & website design Agency
        </Heading1>
        <Paragraph className="sm:max-w-[398px] xl:max-w-[540px] mt-[15px] md:mt-[24px] xl:mt-10 mb-10 md:mb-8 xl:mb-12">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </Paragraph>
        <Button>Lear More</Button>
      </div>
    </>
  );
}
