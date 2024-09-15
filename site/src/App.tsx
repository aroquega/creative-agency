import heroMobile from "./assets/mobile/image-hero.jpg";
import imageStrategic from "./assets/mobile/image-strategic.jpg";
import imageStrategicTablet from "./assets/tablet/image-strategic.jpg";
import imageSlide from "./assets/mobile/image-slide-1.jpg";
import imageSlideTablet from "./assets/tablet/image-slide-1.jpg";
import logo from "./assets/logo.svg";
import menu from "./assets/mobile/icon-hamburger.svg";

import iconPrev from "./assets/icon-arrow-previous.svg";
import iconNext from "./assets/icon-arrow-next.svg";

import { BulletItem } from "./components/BulletItem";

function App() {
  return (
    <>
      <header className="flex md:items-stretch">
        <div className="py-10 px-6 flex items-center justify-between flex-1">
          <img src={logo} />
          <div className="md:hidden">
            <img src={menu} />
          </div>
        </div>
        <nav className="hidden md:block bg-red h-full py-[57px] pl-[33px] pr-10">
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
      <div className="px-6 md:px-[39px] md:pb-[150px] pt-14 md:pt-[77px] pb-24 sm:bg-hero-tablet bg-no-repeat bg-right">
        <h1 className="sm:max-w-[398px] text-[40px] md:text-[56px] font-extrabold leading-none h-[181px]">
          Branding & website design agency
        </h1>
        <p className="sm:max-w-[398px] text-[15px] mt-[15px] md:mt-[24px] mb-10 md:mb-8 font-normal leading-normal h-[75px]">
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
        <img src={imageStrategicTablet} className="hidden sm:block" />
        <div className="px-6 bg-black text-white py-[72px] sm:pt-[120px] md:pl-[69px] md:pr-[40px] text-[15px]">
          <h2 className="font-extrabold text-[32px] mb-6 leading-tight">
            <span className="text-red">Design </span>is
            <br className="hidden md:block" /> strategic.
          </h2>
          <p className="mb-10">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <button className="text-red font-extrabold text-[15px] border-b-2 border-red p-[9px]">
            Schedule a Call
          </button>
        </div>
      </div>
      <div className="bg-red md:bg-inherit px-6 py-24 md:p-0 text-white md:flex">
        <h2 className="text-[32px] font-extrabold md:text-black md:pt-[126px] md:pl-[39px]">
          Our approach for creating a winning brand
        </h2>
        <ul className="mt-[49px] md:-mt-[120px] space-y-10 md:bg-red z-10 relative md:py-[120px] md:pl-[43px] md:pr-[40px]">
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
        <img src={imageSlide} className="sm:hidden w-full" />
        <img src={imageSlideTablet} className="hidden sm:block" />
        <div className="bg-black py-16 px-6 sm:-mr-10 relative sm:py-[100px] sm:pl-[39px] sm:pr-[70px]">
          <h2 className="text-white font-extrabold text-[32px] mb-6">
            Brand naming & guidelines
          </h2>
          <div className="space-x-4">
            <button>
              <img src={iconPrev} />
            </button>
            <button>
              <img src={iconNext} />
            </button>
          </div>
        </div>
      </div>
      <div className="py-[100px] px-6 md:flex md:items-center md:space-x-24">
        <h2 className="text-[32px] font-extrabold mb-[47px]">
          Let's build something great together.
        </h2>
        <button className="bg-red py-[25px] px-10 font-extrabold text-white text-nowrap">
          Schedule a Call
        </button>
      </div>
    </>
  );
}

export default App;
