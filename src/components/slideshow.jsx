import { useState, useEffect } from 'react';
import img1 from '../assets/images/centrictiwanon.jpg';
import img2 from '../assets/images/supalaicasariwa.jpg';

export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [img1, img2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-[300px] md:h-[500px]">
            <img
                src={slides[currentSlide]}
                alt="Slideshow"
                className="w-full h-full object-cover"
            />
        </div>
    );
}
