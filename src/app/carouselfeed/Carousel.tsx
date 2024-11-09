import { useRef, useState } from "react";

interface CarouselData {
  id: number;
  headline: string;
  intro: string;
}

interface CarouselProps {
  data: CarouselData[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsToShow = 3; 
  const cardWidth = 360;

  const nextSlide = () => {
    if (sliderRef.current) {
      const newIndex = Math.min(activeIndex + 3, data.length - cardsToShow);
      setActiveIndex(newIndex);
      sliderRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      const newIndex = Math.max(activeIndex - 3, 0);
      setActiveIndex(newIndex);
      sliderRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-7xl px-10">
      <div ref={sliderRef} className="overflow-hidden w-full mx-auto">
        <div className="flex gap-4 transition-transform duration-500 ease-in-out" style={{ width: `${cardWidth * data.length}px` }}>
          {data.map((item: CarouselData, index: number) => (
            <div
              key={index}
              className="border-[1px] border-solid w-[360px] shrink-0"
            >
              <div className="w-[360px] h-[240px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://via.placeholder.com/600x400"
                  alt=""
                />
              </div>
             <div className="px-4 py-4">
              <div className="line-clamp-1">
                  <h1 className="font-bold text-xl">{item.headline}</h1>
                </div>
                <div className="line-clamp-2">
                  <p>{item.intro}</p>
                </div>
             </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between px-4 py-10">
        <button
          onClick={previousSlide}
          className="text-2xl px-4 py-4 bg-blue-200"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="text-2xl px-4 py-4 bg-blue-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
