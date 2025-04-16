"use client"

import React, { FC } from 'react'
import Slider from "react-slick";

interface SimpleSliderProps {
    children: React.ReactNode,
    numberShowSlider: number
}

const SimpleSlider: FC<SimpleSliderProps> = ({ children, numberShowSlider }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: numberShowSlider,
        slidesToScroll: 1,
        
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