import configs from '@configs';
import { useState } from 'react';
import { SlickLightBoxContainer, Center, BlackBackground, CloseButton } from './style';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SlickLightBox({ showState = true, imgs, selectedImageId, setSelectedImageId, setStateShow }) {
    const slickSettings = {
        infinite: true,
        slidesToShow: 1,
        variableHeight: false,
        initialSlide: selectedImageId,
        afterChange: (currentSlide) => setSelectedImageId(currentSlide),
    }

    console.log("eita", imgs);

    if (showState)
        return (
            <SlickLightBoxContainer>
                <BlackBackground onClick={() => setStateShow(false)}>
                    <CloseButton />
                </BlackBackground>
                <Slider {...slickSettings} style={{ height: '100%' }}>
                    {imgs.map((img, index) => {
                        console.log(img, index);
                        return <Center key={img}><img src={configs.imgsPath + img} /></Center>
                    }
                    )}
                </Slider>
            </SlickLightBoxContainer>
        )
    else
        return (<></>)
}

//quadro-de-foto mx-2'<img src={configs.imgsPath + img} />