import { useState } from "react";

interface CarouselData {
  id: number;
  headline: string;
  intro: string;
}

interface CarouselProps {
  data: CarouselData[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < data.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="w-full max-w-8xl mx-auto py-10 px-10">
      <div className="flex overflow-hidden">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${(currentIndex / 3) * 100}%)` }}>
          {data.map((item, index) => (
            <div key={index} className="flex-none w-1/3 px-4 py-2">
              <img src="https://via.placeholder.com/600x400" alt="Card Image" className="w-full h-24 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{item.headline}</h3>
                <p className="text-gray-600 line-clamp-2">{item.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
          disabled={currentIndex + 3 >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
