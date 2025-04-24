"use client"

import React, { FC } from 'react'
import Slider from "react-slick";

interface SimpleSliderProps {
    children: React.ReactNode,
    numberShowSlider: number
}

const SimpleSlider: FC<SimpleSliderProps> = ({ children, numberShowSlider }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: numberShowSlider,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    children
                }
            </Slider>
        </div>
    )
}

export default SimpleSlider