import { useState } from 'react';
import './slider.css';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-slide">{slides[currentIndex]}</div>

      <button className="slider-btn prev" onClick={goToPrevious}>
        ‹
      </button>
      <button className="slider-btn next" onClick={goToNext}>
        ›
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => goToSlide(index)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
