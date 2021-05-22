import { CarrouselContainer, SlideFoto } from "./styles";
import Carousel from 'react-elastic-carousel';
import React, { useRef } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Jumbotron_() {

    const settings = {
        dots: true,
        infinite: true,

        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        variableWidth: false
    }

    return (
        <div>
            <Slider {...settings} style={{ width: '100%' }}>
                <SlideFoto>
                    <img src="http://localhost:3001/img/uploads/carousel/7.png" />
                </SlideFoto>
                <SlideFoto>
                    <img src="http://localhost:3001/img/uploads/carousel/4.png" />
                </SlideFoto>
                <SlideFoto>
                    <img src="http://localhost:3001/img/uploads/carousel/5.png" />
                </SlideFoto>
                <SlideFoto>
                    <img src="http://localhost:3001/img/uploads/carousel/02.png" />
                </SlideFoto>
            </Slider>
        </div>
    )
}

export const Jumbotron = Jumbotron_;