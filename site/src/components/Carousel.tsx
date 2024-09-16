import { ReactNode, useEffect, useRef, useState } from "react";

import iconPrev from "../assets/icon-arrow-previous.svg";
import iconNext from "../assets/icon-arrow-next.svg";
import { throttle } from "../utils";

interface Props {
  images: ReactNode[];
}

export function Carousel({ images }: Props) {
  const slidesContainer = useRef<HTMLDivElement>(null);
  const slideReference = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  const handlePrevSlide = () => {
    let prevSlide = slide - 1;
    if (prevSlide < 0) {
      prevSlide = images.length - 1;
    }
    setSlide(prevSlide);
    scrollToSlide(prevSlide);
  };

  const handleNextSlide = () => {
    const nextSlide = (slide + 1) % images.length;
    scrollToSlide(nextSlide);
    setSlide(nextSlide);
  };

  const scrollToSlide = (
    s: number,
    behavior: "smooth" | "instant" = "smooth"
  ) => {
    slidesContainer.current?.scroll({
      behavior,
      left: (slideReference.current?.clientWidth ?? 0) * s,
    });
  };

  useEffect(() => {
    const resize = () => {
      scrollToSlide(slide, "instant");
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [slide]);

  return (
    <>
      <div
        className="flex overflow-x-auto lg:overflow-hidden snap-x snap-mandatory"
        ref={slidesContainer}
      >
        {images.map((i, idx) => (
          <div key={idx} className="min-w-full snap-start" ref={slideReference}>
            {i}
          </div>
        ))}
      </div>
      <div className="bg-black py-16 px-6 sm:-mr-10 xl:-mr-[190px] relative sm:py-[100px] sm:pl-[39px] sm:pr-[70px] lg:pt-[152px] lg:pl-[165px] lg:pr-[125px]">
        <h2 className="text-white font-extrabold text-[32px] xl:text-[56px] mb-6 leading-none">
          Brand naming & guidelines
        </h2>
        <div className="space-x-4">
          <button onClick={throttle(handlePrevSlide, 5000)}>
            <img src={iconPrev} />
          </button>
          <button onClick={throttle(handleNextSlide, 5000)}>
            <img src={iconNext} />
          </button>
        </div>
      </div>
    </>
  );
}
