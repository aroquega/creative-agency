import { BulletItem } from "./components/BulletItem";
import { Button } from "./components/Button";
import { Carousel } from "./components/Carousel";
import { Slide1, Slide2, Slide3 } from "./components/slides";

import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Strategy } from "./sections/Strategy";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Strategy />
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
        <Button>Schedule a Call</Button>
      </div>
    </>
  );
}

export default App;
