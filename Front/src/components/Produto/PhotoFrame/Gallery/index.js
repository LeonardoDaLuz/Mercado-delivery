import configs from '@configs';
import { Flex, ImageSelector, ImageViewer } from './style';
import Magnifier from "react-magnifier";

export function Gallery({ img, imgs, selectedImageId, setSelectedImageId, setShowLightboxState }) {

    let SelectedImageUrl = img; //como a versão do banco de dados anteriormente só continha 1 imagem por produto, isto se faz necessário para manter compatibilidade.

    if (imgs)
        SelectedImageUrl = imgs[selectedImageId];

    return (
        <Flex>
            {imgs &&
                <ImageSelector>
                    {imgs.map((img, index) =>
                        <img
                            key={index}
                            className={index == selectedImageId ? 'selected' : ''}
                            src={configs.imgsPath + img}
                            onClick={() => setSelectedImageId(index)}
                        />)}
                </ImageSelector>
            }

            <ImageViewer >
                <Magnifier src={configs.imgsPath + SelectedImageUrl} mgWidth={200} mgHeight={200} onClick={()=> setShowLightboxState(true)} />
            </ImageViewer>
        </Flex>
    )
}

