import configs from '@configs';
import { AddImgButton, Flex, ImageSelector, ImageViewer, ImgButton } from './style';
import Magnifier from "react-magnifier";

import { DeleteImage } from './style';
import { uploadImages } from '../../../../utils/uploadImagesToServer';

export function Gallery({ img, imgs, selectedImageId, setSelectedImageId, setShowLightboxState, pushImages, removeImage }) {


    const SelectedImageUrl = imgs[selectedImageId];


    return (
        <Flex>
            <ImageSelector>
                {imgs.map((img, index) =>
                    <ImgButton
                        className={index == selectedImageId ? 'selected' : ''}
                        key={index}
                    >
                        <DeleteImage />
                        <img

                            src={configs.imgsPath + img}
                            onClick={() => setSelectedImageId(index)}
                        />
                    </ImgButton>
                )}
                <AddImgButton onClick={() => { uploadImages().then(images => { pushImages(images) }) }}>


                </AddImgButton>
            </ImageSelector>
            <ImageViewer >
                <DeleteImage onClick={() => { removeImage(SelectedImageUrl) }} />
                {SelectedImageUrl !== undefined &&
                    <Magnifier className='productImg' src={configs.imgsPath + SelectedImageUrl} mgWidth={200} mgHeight={200} onClick={() => setShowLightboxState(true)} />
                }
            </ImageViewer>
        </Flex>
    )
}

