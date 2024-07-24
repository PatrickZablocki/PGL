import React, { useState, useEffect } from 'react';
import './Slides.module.css';

const images = [
    '/SlideImage/HS_Slide1.jpg',
    '/SlideImage/HS_Slide2.webp',
    '/SlideImage/HS_Slide3.jpg',
    '/SlideImage/HS_Slide4.webp',
    '/SlideImage/HS_Slide5.png',
    '/SlideImage/Pred_Slide2.jpg',
    '/SlideImage/Pred_Slide3.jpg',
    '/SlideImage/Pred_Slide4.jpg',
    '/SlideImage/Pred_Slide5.png'
];

const Slides = () => {
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
}, []);

return (
    <div className="slider-container">
        <img src={images[currentIndex]} alt="Slider" className="slider-image" />
    </div>
);
};

export default Slides;
