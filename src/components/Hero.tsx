'use client'
import { useState } from 'react'
import useBaseUrl from '@/Hooks/useBaseUrl'

const Hero = () => {
    const baseUrl = useBaseUrl()

    const slides = [
        {
            image: `${baseUrl}/images/desktop-image-hero-1.jpg`,
            imageMobile: `${baseUrl}/images/mobile-image-hero-1.jpg`,
            title: 'Discover innovative ways to decorate',
            description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        },
        {
            image: `${baseUrl}/images/desktop-image-hero-2.jpg`,
            imageMobile: `${baseUrl}/images/mobile-image-hero-2.jpg`,
            title: 'We are available all across the globe',
            description: 'With stores all over the world, it’s easy for you to find forniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.',
        },
        {
            image: `${baseUrl}/images/desktop-image-hero-3.jpg`,
            imageMobile: `${baseUrl}/images/mobile-image-hero-3.jpg`,
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

    if (baseUrl === '') return <div className='h-screen flex justify-center items-center'>Loading...</div>;

    return (
        <div className='flex flex-col lg:flex-row h-screen lg:h-auto'>

            <div className='lg:h-full lg:w-[58%] h-[360px] relative'>
                <picture className='w-full h-full block'>
                    <source
                        srcSet={slides[activeSlide].imageMobile}
                        media="(max-width: 768px)"
                    />
                    <source
                        srcSet={slides[activeSlide].image}
                        media="(min-width: 769px)"
                    />
                    <img
                        className="w-full h-full object-cover"
                        src={slides[activeSlide].image}
                        alt={slides[activeSlide].title}
                    />
                </picture>

                <div className='absolute bottom-0 right-0 w-[112px] h-[56px] bg-black flex justify-center items-center gap-6 lg:right-auto lg:left-[calc(100%-112px)]'>
                    <button onClick={prevSlide} className='hover:opacity-70 transition-opacity'>
                        <img className='filter-white h-6'
                            src={`${baseUrl}/images/icon-arrow-left.svg`} alt="Previous" />
                    </button>
                    <button onClick={nextSlide} className='hover:opacity-70 transition-opacity'>
                        <img className='filter-white h-6'
                            src={`${baseUrl}/images/icon-arrow-right.svg`} alt="Next" />
                    </button>
                </div>
            </div>

            <div className='lg:h-full lg:w-[42%] px-[30px] relative lg:p-16 flex flex-col justify-center overflow-y-auto'>
                <div className='pt-[50px] lg:py-0'>
                    <h2 className='font-bold text-[39.5px] lg:text-4xl mb-4 tracking-n5 leading-none'>
                        {slides[activeSlide].title}
                    </h2>
                    <p className=' mb-6 tracking-n25 font-semibold text-darkGray'>{slides[activeSlide].description}</p>
                    <div className='flex flex-row gap-4 items-center hover:cursor-pointer'>
                        <span className='font-bold tracking-l5'>SHOP NOW</span>
                        <img className='h-[12px]' src={`${baseUrl}/images/icon-arrow.svg`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero