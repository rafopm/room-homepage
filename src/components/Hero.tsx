'use client'
import { useState } from 'react'


const hero = () => {
    const slides = [
        {
            image: '/images/desktop-image-hero-1.jpg',
            title: 'Discover innovative ways to decorate',
            description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        },
        {
            image: '/images/desktop-image-hero-2.jpg',
            title: 'We are available all across the globe',
            description: 'With stores all over the world, it’s easy for you to find forniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.',
        },
        {
            image: '/images/desktop-image-hero-3.jpg',
            title: 'Manufactured with the best materials',
            description: 'Our modern forniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        },
    ]

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    return (
        <div>
            <div>
                <div>
                    <img src={slides[activeSlide].image} alt={slides[activeSlide].title} />
                </div>
                <div>
                    <button onClick={prevSlide}></button>
                    <button onClick={nextSlide}>next</button>
                </div>

            </div>
            <div>
                <h2>{slides[activeSlide].title}</h2>
                <p>{slides[activeSlide].description}</p>
            </div>
        </div>

    )
}

export default hero