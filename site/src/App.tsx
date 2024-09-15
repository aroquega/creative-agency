import imageStrategic from "./assets/mobile/image-strategic.jpg";
import imageStrategicTablet from "./assets/tablet/image-strategic.jpg";
import imageStrategicDesktop from "./assets/desktop/image-strategic.jpg";

import { BulletItem } from "./components/BulletItem";
import { Carousel } from "./components/Carousel";
import { Slide1, Slide2, Slide3 } from "./components/slides";

import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
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
