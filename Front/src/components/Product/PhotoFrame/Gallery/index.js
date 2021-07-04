import configs from '@configs';
import { AddImgButton, Flex, ImageSelector, ImageViewer, ImgButton, ImagePlaceholder } from './style';
import Magnifier from "react-magnifier";

import { DeleteImage } from './style';
import { uploadImages } from '../../../../utils/uploadImagesToServer';
import assets from '../../../../assets';

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
                        {removeImage &&
                            <DeleteImage onClick={(e) => { removeImage(e, img) }} />
                        }
                        <img

                            src={configs.imgsPath + img}
                            onClick={() => setSelectedImageId(index)}
                        />
                    </ImgButton>
                )}

                {pushImages &&
                    <AddImgButton onClick={(e) => { uploadImages().then(imagesURLs => { pushImages(e, imagesURLs) }) }} />

                }

            </ImageSelector>
            <ImageViewer >
                {removeImage &&
                    <DeleteImage onClick={(e) => { removeImage(e, SelectedImageUrl) }} />
                }
                {SelectedImageUrl !== undefined &&
                    <Magnifier className='productImg' src={configs.imgsPath + SelectedImageUrl} mgWidth={200} mgHeight={200} onClick={() => setShowLightboxState(true)} />
                }
                {imgs.length === 0 && <img src={assets.imagePlaceholder} />}
            </ImageViewer>
        </Flex>
    )
}

