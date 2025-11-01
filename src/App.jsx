// src/App.jsx
import "./index.css";
import Slider from "./components/slider.jsx";
import { useState, useCallback } from "react";
import Login from "./components/Login.jsx";

const TOTAL_SLIDES = 5;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = useCallback((indexOrFn) => {
    if (typeof indexOrFn === "function") {
      setCurrentSlide((prev) => {
        const newIndex = indexOrFn(prev);
        return newIndex;
      });
    } else {
      setCurrentSlide(indexOrFn);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-5 md:max-h-screen">
      <div className="flex flex-col  md:flex-row gap-6 w-full h-full">
        {/* Sol div - col-7 */}
        <div className="w-full md:w-7/12 bg-white p-7 flex flex-col items-center rounded-xl">
          <Slider
            currentIndex={currentSlide}
            onSlideChange={handleSlideChange}
          />
          <div className="flex space-x-5 mt-6">
            {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-800" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Sağ div - col-5 */}
        <div className="w-full md:w-5/12 bg-white p-8 rounded-xl flex flex-col">
          {/* Giriş formu gelecek */}
          <div className="flex-1 flex items-center justify-center">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
