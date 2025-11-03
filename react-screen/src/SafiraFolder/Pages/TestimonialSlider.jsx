import React, { useState } from "react";


const testimonials = [
    {
        id: 1,
        name: "Lindsy Neloms",
        text: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..",
        img: "/assets/testimonial1.webp",
        color: "white",
    },
    {
        id: 2,
        name: "Rebecka Filson",
        text: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..",
        img: "/assets/testimonial2.webp",
        color: "white",
    },
    {
        id: 3,
        name: "Amber Laha",
        text: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..",
        img: "/assets/testimonial3.webp",
        color: "white",
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <div
            className="testimonial-container"
            style={{
                background: `linear-gradient(to bottom, ${testimonials[currentIndex].color} 25%, #bcb7b725 25%)`,
                transition: "background 0.6s ease",
            }}
        >
            <div className="testimonial-content">
                <div className="image-section" onClick={handleImageClick}>
                    <img
                        src={testimonials[currentIndex].img}
                        alt={testimonials[currentIndex].name}
                        className="testimonial-image"
                    />
                </div>

                <div className="text-section">
                    <div className="quote-icon">❝</div>
                    <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                    <h3 className="testimonial-name">
                        {testimonials[currentIndex].name}
                    </h3>
                    <div className="dots">
                        {testimonials.map((t, idx) => (
                            <span
                                key={t.id}
                                className={`dot ${idx === currentIndex ? "active" : ""}`}
                                onClick={() => setCurrentIndex(idx)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
