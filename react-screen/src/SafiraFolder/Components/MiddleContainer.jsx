import React, { useState } from 'react'

const MiddleContainer = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            image: '/assets/slider4.webp',
            title: 'Fresh Organic',
            subtitle: 'Tomatoes, Onions & Garlic',
            para: '10% certified organic mix of fruit and veggies. Perfect for weekly cooking and snacking'
        },
        {
            image: '/assets/slider5.png',
            title: 'Onions & Shallots',
            subtitle: 'Natural Farm Products',
            para: 'Widest range of farm-fresh Vegetables, Fruits & seasonal produce'
        },
        {
            image: '/assets/slider6.webp',
            title: 'Fresh Organic Food',
            subtitle: 'Cabbage, Root Vegetables',
            para: 'Natural organic tomatoes make your health stronger, Put your information here'
        },
    ]

    const handleSlideChange = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div className="main-container">
            <div className="container1">
                <div className="carousel">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <img src={slide.image} alt={slide.title} className="carousel-image" />
                            <div className="carousel-content">
                                <h2>{slide.title}</h2>
                                <p>{slide.subtitle}</p>
                                <p className='para'>{slide.para}</p>
                                <button className="shop-now">Read More</button>
                            </div>
                        </div>
                    ))}

                    <div className="carousel-dots" role="tablist" aria-label="Slide dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => handleSlideChange(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === currentSlide ? 'true' : 'false'}
                                type="button"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleContainer