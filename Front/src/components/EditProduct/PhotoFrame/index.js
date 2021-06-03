import configs from '@configs';
import { useState } from 'react';
import { PhotoFrame_, ImageViewer, ImageSelector, SlickLightBoxContainer, Center, BlackBackground, MobileView } from '../../Produto/PhotoFrame/style';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickLightBox } from './SlickLightBox';
import { Gallery } from '../../Produto/PhotoFrame/Gallery';
import { DesktopView } from './style';
import { MobileGallery } from './MobileGallery';

export function PhotoFrame(props) {

    const [selectedImageId, setSelectedImageId] = useState(0);
    const [showLightbox, setShowLightBox] = useState(false);


    return (
        <PhotoFrame_>
            <DesktopView>
                <Gallery
                    img={props.produto.img}
                    imgs={props.produto.imgs}
                    selectedImageId={selectedImageId}
                    setSelectedImageId={setSelectedImageId}
                    setShowLightboxState={setShowLightBox}
                />
                <SlickLightBox
                    showState={showLightbox}
                    imgs={props.produto.imgs}
                    currentSelectedImage={selectedImageId}
                    setCurrentSelectedImage={setSelectedImageId}
                    setStateShow={setShowLightBox}
                />
            </DesktopView>
            <MobileView>
                <MobileGallery
                    img={props.produto.img}
                    imgs={props.produto.imgs}
                    currentSelectedImage={selectedImageId}
                    setCurrentSelectedImage={setSelectedImageId}
                    setStateShow={setShowLightBox}
                />
            </MobileView>
        </PhotoFrame_ >
    )
}

//quadro-de-foto mx-2'<img src={configs.imgsPath + img} />