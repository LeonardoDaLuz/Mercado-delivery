import assets from "../../assets"
import { Row, Inline_block, CloseButton } from "../../globalStyleds"
import { Offer_, ImgInput } from "./style"
import configs from '@configs';
import { uploadImages } from "../../utils/uploadImagesToServer";

export const Offer = ({ offer, index, changeHandler }) => {

    let thumbnailUrl = offer.thumbnail ? configs.imgsPath + offer.thumbnail : assets.imagePlaceholder;

    return <Offer_>
        <Row>

            <div>
                <label htmlFor="name">Nome:</label>
                <input {...changeHandler.getFieldProps(index + '.name')} />
            </div>
            <div>
                <label htmlFor="description">Descrição (opcional):</label>
                <input {...changeHandler.getFieldProps(index + '.description')} />
            </div>
            <div>
                <label htmlFor="startDate">Data de início:</label>
                <input type='date' {...changeHandler.getFieldProps(index + '.start_time')} />
            </div>
            <div>
                <label htmlFor="endDate">Data de fim:</label>
                <input type='date' {...changeHandler.getFieldProps(index + '.end_time')} />
            </div>
            <div style={{ flexGrow: 0 }}>
                <label htmlFor="thumbnail">Thumbnail:</label>
                <ImgInput onClick={() => { uploadImages(false).then(imageUrl => {  changeHandler.setFieldValue(index + '.thumbnail', imageUrl) }) }}>
                    <img src={thumbnailUrl} width='200px'></img>
                </ImgInput>
            </div>
            <div style={{ flexGrow: 0 }}>
                <label htmlFor="banner">Banner:</label>
                <ImgInput>
                    <img src={assets.imagePlaceholder} width='200px'></img>
                </ImgInput>
            </div>
        </Row>
        <CloseButton size='30px' />
    </Offer_>
}