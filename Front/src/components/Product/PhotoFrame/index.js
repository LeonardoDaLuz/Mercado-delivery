import configs from '@configs';
import { useState } from 'react';
import { PhotoFrame_, ImageViewer, ImageSelector, SlickLightBoxContainer, Center, BlackBackground, MobileView } from './style';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickLightBox } from './SlickLightBox';
import { Gallery } from './Gallery';
import { DesktopView } from './style';
import { MobileGallery } from './MobileGallery';

export function PhotoFrame({ product, pushImages, removeImage }) {

    const [selectedImageId, setSelectedImageId] = useState(0);
    const [showLightbox, setShowLightBox] = useState(false);

    const childProps = {
        imgs: product.imgs,
        selectedImageId: selectedImageId,
        showState: showLightbox,
        setSelectedImageId: setSelectedImageId,
        setShowLightboxState: setShowLightBox,
        setStateShow: setShowLightBox,
        pushImages,
        removeImage
    }

    return (
        <PhotoFrame_>
            <DesktopView>
                <Gallery {...childProps} />
                <SlickLightBox {...childProps} />
            </DesktopView>
            <MobileView>
                <MobileGallery{...childProps} />
            </MobileView>
        </PhotoFrame_ >
    )
}

//quadro-de-foto mx-2'<img src={configs.imgsPath + img} />