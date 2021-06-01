import configs from '@configs';
import { useState } from 'react';
import { PhotoFrame_, ImageViewer, ImageSelector, SlickLightBoxContainer, Center, BlackBackground } from '../../Produto/PhotoFrame/style';
import Magnifier from "react-magnifier";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickLightBox } from './LightBox';

export function PhotoFrame(props) {

    const [selectedImageId, setSelectedImageId] = useState(0);
    const [showLightbox, setShowLightBox] = useState(false);

    let SelectedImageUrl = props.produto.img; //como a versão do banco de dados anteriormente só continha 1 imagem por produto, isto se faz necessário para manter compatibilidade.

    if (props.produto.imgs)
        SelectedImageUrl = props.produto.imgs[selectedImageId];

    function show() {
        setShowLightBox(true);
    }

    return (
        <PhotoFrame_>

            {props.produto.imgs &&
                <ImageSelector>
                    {props.produto.imgs.map((img, index) =>
                        <img
                            key={index}
                            className={index==selectedImageId?'selected':''}
                            src={configs.imgsPath + img}
                            onClick={() => setSelectedImageId(index)}
                        />)}
                </ImageSelector>
            }

            <ImageViewer >
                <Magnifier src={configs.imgsPath + SelectedImageUrl} mgWidth={200} mgHeight={200} onClick={show} />
            </ImageViewer>

            <SlickLightBox
                showState={showLightbox}
                imgs={props.produto.imgs}
                currentSelectedImage={selectedImageId}
                setCurrentSelectedImage={setSelectedImageId}
                setStateShow={setShowLightBox}
            />

        </PhotoFrame_ >
    )
}

//quadro-de-foto mx-2'<img src={configs.imgsPath + img} />