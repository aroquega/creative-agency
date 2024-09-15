import heroMobile from "./assets/mobile/image-hero.jpg";
import imageStrategic from "./assets/mobile/image-strategic.jpg";
import imageStrategicTablet from "./assets/tablet/image-strategic.jpg";
import imageStrategicDesktop from "./assets/desktop/image-strategic.jpg";

import logo from "./assets/logo.svg";
import menu from "./assets/mobile/icon-hamburger.svg";
import close from "./assets/mobile/icon-cross.svg";

import { BulletItem } from "./components/BulletItem";
import { Carousel } from "./components/Carousel";
import { Slide1, Slide2, Slide3 } from "./components/slides";
import { Menu } from "./components/Menu";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex md:items-stretch relative">
        <div className="py-10 px-6 xl:pl-[165px] flex items-center justify-between flex-1 z-10 bg-white">
          <img src={logo} />
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img src={isOpen ? close : menu} />
          </button>
        </div>
        <Menu isOpen={isOpen} onClick={() => setIsOpen(false)} />
        <nav className="hidden md:block bg-red h-full py-[57px] pl-[33px] pr-10 xl:pl-[69px] lg:pr-[165px]">
          <ul className="flex h-full space-x-5 text-white items-center">
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
            <li>
              <button className="bg-black pt-[23px] px-[19px] pb-[21px] font-extrabold leading-tight">
                Schedule a Call
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <img className="sm:hidden w-full" src={heroMobile} alt="Our Team" />
      <div className="px-6 md:px-[39px] md:pb-[150px] xl:pt-[112px] lg:pl-[165px] pt-14 md:pt-[77px] pb-24 sm:bg-hero-tablet lg:bg-hero-desktop bg-no-repeat bg-right">
        <h1 className="sm:max-w-[398px] xl:max-w-[550px] text-[40px] md:text-[56px] lg:text-[80px] font-extrabold leading-none">
          Branding & website design agency
        </h1>
        <p className="sm:max-w-[398px] xl:max-w-[540px] text-[15px] lg:text-[18px] mt-[15px] md:mt-[24px] mb-10 md:mb-8 font-normal leading-normal h-[75px]">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button className="bg-red py-[25px] px-10 font-extrabold text-white">
          Learn More
        </button>
      </div>
      <div className="sm:flex">
        <img src={imageStrategic} alt="" className="sm:hidden w-full" />
        <img src={imageStrategicTablet} className="hidden sm:block xl:hidden" />
        <img src={imageStrategicDesktop} className="hidden xl:block" />
        <div className="px-6 bg-black text-white py-[72px] sm:pt-[120px] md:pl-[69px] md:pr-[40px] xl:pt-[200px] xl:pl-[154px] xl:pr-[141px] text-[15px]">
          <h2 className="font-extrabold text-[32px] xl:text-[56px] mb-6 leading-tight">
            <span className="text-red">Design </span>is
            <br className="hidden md:block" /> strategic.
          </h2>
          <p className="mb-10 xl:text-[18px]">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <button className="text-red font-extrabold text-[15px] xl:text-[18px] border-b-2 border-red p-[9px]">
            Schedule a Call
          </button>
        </div>
      </div>
      <div className="bg-red md:bg-inherit px-6 py-24 md:p-0 text-white md:flex">
        <h2 className="text-[32px] xl:text-[56px] relative z-10 leading-none lg:max-w-[705px] lg:pt-[200px] lg:pl-[165px] font-extrabold md:text-black md:pt-[126px] md:pl-[39px]">
          Our approach for creating a winning brand
        </h2>
        <ul className="mt-[49px] md:-mt-[120px] xl:flex-1 lg:-ml-[160px] lg:pr-[150px] space-y-10 md:bg-red relative md:py-[120px] md:pl-[43px] md:pr-[40px] lg:pl-[280px] lg:py-[200px]">
          <BulletItem order="01" title="Brand Strategy">
            Brand strategy is critical for long-term success. Outshining
            competitors and capturing the target audience are key.
          </BulletItem>
          <BulletItem order="02" title="Brand Design">
            Keeping the brand design unique and meaningful helps in
            communicating the brand’s value effectively.
          </BulletItem>
          <BulletItem order="03" title="Web Design">
            A beautifully crafted website is the best tool for brand awareness,
            and ultimately results in increased revenues.
          </BulletItem>
        </ul>
      </div>
      <div className="sm:flex sm:flex-row-reverse sm:items-start">
        <Carousel images={[<Slide1 />, <Slide2 />, <Slide3 />]} />
      </div>
      <div className="py-[100px] px-6 md:flex md:items-center md:space-x-24 justify-between sm:px-10 xl:px-[165px]">
        <h2 className="text-[32px] xl:text-[56px] font-extrabold mb-[47px] sm:mb-0">
          Let's build something
          <br /> great together.
        </h2>
        <button className="bg-red py-[25px] px-10 font-extrabold text-white text-nowrap">
          Schedule a Call
        </button>
      </div>
    </>
  );
}

export default App;
