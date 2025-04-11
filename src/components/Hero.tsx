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
        <div className='flex flex-col lg:flex-row w-full h-screen lg:h-auto'>

            {/* Sección de la imagen */}
            <div className='flex lg:h-full lg:w-[59%] h-[360px] md:h-[400px] relative'>
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

                {/* Controles de navegación */}
                <div className='absolute bottom-0 right-0 lg:left-[unset] lg:right-0 xl:left-[calc(100%)] w-[112px] h-[56px] lg:w-[140px] lg:h-[70px] xl:w-[160px] xl:h-[80px] flex justify-center items-center group'>
                    <button 
                        onClick={prevSlide} 
                        className='flex justify-center items-center bg-black w-[56px] h-[56px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] hover:bg-darkGray hover:cursor-pointer transition-opacity'
                    >
                        <img 
                            className='filter-white h-6 self-center'
                            src={`${baseUrl}/images/icon-arrow-left.svg`} 
                            alt="Previous" 
                        />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className='flex justify-center items-center bg-black w-[56px] h-[56px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] hover:bg-darkGray hover:cursor-pointer transition-opacity'
                    >
                        <img 
                            className='filter-white h-6'
                            src={`${baseUrl}/images/icon-arrow-right.svg`} 
                            alt="Next" 
                        />
                    </button>
                </div>
            </div>

            {/* Sección de texto */}
            <div className='lg:h-full lg:w-[41%] px-[30px] md:px-[50px]  xl:px-[100px] py-[50px] lg:py-0 flex flex-col justify-center overflow-y-auto'>
                <div className='pt-0 lg:pt-[20px] xl:pt-[110px]'>
                    <h2 className='font-bold text-[39.5px] md:text-[42px] lg:text-[44px] xl:text-[47.5px] mb-4  tracking-n5 leading-none'>
                        {slides[activeSlide].title}
                    </h2>
                    <p className='mb-6 tracking-n25 font-semibold text-darkGray'>
                        {slides[activeSlide].description}
                    </p>
                    <div className='flex flex-row gap-4 items-center hover:cursor-pointer group'>
                        <span className='font-bold tracking-l5 group-hover:text-darkGray'>SHOP NOW</span>
                        <img 
                            className='h-[12px] group-hover:filter-darkGray' 
                            src={`${baseUrl}/images/icon-arrow.svg`} 
                            alt="" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero