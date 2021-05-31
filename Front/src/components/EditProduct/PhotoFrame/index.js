import configs from '@configs';
import { PhotoFrame_, ImageViewer, ImageSelector } from '../../Produto/PhotoFrame/style';

export function PhotoFrame(props) {
    return (
        <PhotoFrame_>
            <ImageSelector>
                <img src={configs.imgsPath + props.produto.imgs[0]} />
                <img src={configs.imgsPath + props.produto.imgs[1]} />
                <img src={configs.imgsPath + props.produto.img} />
                <img className='active' src={configs.imgsPath + props.produto.img} />
            </ImageSelector>
            <ImageViewer >
                <img src={configs.imgsPath + props.produto.img} />
            </ImageViewer>

        </PhotoFrame_>
    )
}

//quadro-de-foto mx-2'