// src/components/Slider.jsx
import { useState, useEffect, useRef } from "react";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";

const images = [img1, img2, img3, img4, img5];
const INTERVAL_TIME = 6000;

export default function Slider({ currentIndex, onSlideChange }) {
  const [showControls, setShowControls] = useState(false);
  const intervalRef = useRef(null);



  const nextSlide = () => {
    const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onSlideChange(next);
  };

  const prevSlide = () => {
    const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onSlideChange(prev);
  };

  // Otomatik geçiş — App.jsx'ten gelen currentIndex değişirse sıfırlanır
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      onSlideChange((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, INTERVAL_TIME);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]); // currentIndex her değiştiğinde yeniden başlat

  return (
    <div
      className="h-full w-full relative overflow-hidden rounded-l-xl"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      {showControls && (
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90  text-black p-2 rounded-full hover:bg-white/100 focus:outline-none z-10"
          aria-label="Previous slide"
        >
          ❮
        </button>
      )}

      {showControls && (
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 text-black p-2 rounded-full hover:bg-white/100 focus:outline-none z-10"
          aria-label="Next slide"
        >
          ❯
        </button>
      )}
    </div>
  );
}
