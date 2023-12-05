"use client"

import React, { useState } from 'react';

type ImageSliderProps = {
    imageSrc: string,
    alteredImageSrc: string,
    imageCaption: string,
    imageAlt: string
}

export default function ImageSlider({imageSrc, alteredImageSrc, imageCaption, imageAlt} : ImageSliderProps) {
    const [scrollValue, setScrollValue] = useState(0);

    const handleScroll = (e: React.ChangeEvent<HTMLInputElement>) => {
        setScrollValue(Number(e.target.value));
    }

    // Calculate opacity based on scroll value
    const alteredImageOpacity = scrollValue / 100;

    return (
        <figure className="mt-16 mb-60 min-h-[480px] relative">
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={scrollValue} 
                className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[12px] [&::-webkit-slider-thumb]:w-[30px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-500" 
                onChange={handleScroll} 
            />
            <img
                className="aspect-auto mb-10 rounded-xl bg-gray-50 object-cover absolute"
                src={imageSrc}
                alt={imageAlt}
                style={{ zIndex: 1 }}
            />
            <img
                className="aspect-auto mb-10 rounded-xl bg-gray-50 object-center absolute"
                src={alteredImageSrc}
                alt={imageAlt}
                style={{ opacity: alteredImageOpacity, zIndex: 2 }}
            />
            
        </figure>
    )
}
