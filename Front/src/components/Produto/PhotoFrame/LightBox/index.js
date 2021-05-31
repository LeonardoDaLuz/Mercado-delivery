import configs from '@configs';
import { useState } from 'react';
import { SlickLightBoxContainer, Center, BlackBackground } from './style';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SlickLightBox({ imgs, show = true }) {


    const slickSettings = {
        infinite: true,
        slidesToShow: 1,
        variableHeight: false
    }

    if(show)
        return (        
            <SlickLightBoxContainer>
                <BlackBackground />
                <Slider {...slickSettings} style={{ height: '100%' }}>
                    {imgs.map((img, index) =>
                        <Center><img key={index} src={configs.imgsPath + img} /></Center>
                    )}
                </Slider>
            </SlickLightBoxContainer>
        )
    else
        return (<></>)
}

//quadro-de-foto mx-2'<img src={configs.imgsPath + img} />