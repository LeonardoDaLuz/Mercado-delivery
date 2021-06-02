import configs from '@configs';

import { Center, MobileGalleryContainer } from './style';

import Slider from 'react-slick';
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

export function MobileGallery({ imgs, currentSelectedImage, setCurrentSelectedImage, setStateShow }) {
    const slickSettings = {
        infinite: true,
        slidesToShow: 1,
        variableHeight: true,
        initialSlide: currentSelectedImage,
        afterChange: (currentSlide) => setCurrentSelectedImage(currentSlide),
    }

    return (
        <MobileGalleryContainer>
            <Slider {...slickSettings} style={{ height: '100%' }}>
                {imgs.map((img, index) =>
                    <Center><img key={index} src={configs.imgsPath + img} /></Center>
                )}
            </Slider>
        </MobileGalleryContainer>
    )
}

//quadro-de-foto mx-2'<img src={configs.imgsPath + img} />