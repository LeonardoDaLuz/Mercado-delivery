import configs from '@configs';
import { PhotoFrame_, ImageViewer } from './style';

export function PhotoFrame(props) {
    return (
        <PhotoFrame_>
            <ImageViewer src={configs.imgsPath + props.produto.img} />

        </PhotoFrame_>
    )
}

//quadro-de-foto mx-2'