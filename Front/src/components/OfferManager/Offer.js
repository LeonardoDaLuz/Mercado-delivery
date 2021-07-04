import assets from "../../assets"
import { Row, Inline_block, CloseButton } from "../../globalStyleds"
import { Offer_, ImgInput, Teste } from "./style"
import configs from '@configs';
import { uploadImages } from "../../utils/uploadImagesToServer";
//import { useFormik } from 'formik';
//import * as Yup from 'yup';

export const Offer = ({ index, changeHandler }) => {

    return <Offer_>
        <Row >
            <div>
                <label htmlFor="name">Nome*:</label>
                <input {...changeHandler.getFieldProps(index + '.name')} />
                <span>Obrigatório</span>
            </div>
            <div>
                <label htmlFor="description">Descrição (opcional):</label>
                <input {...changeHandler.getFieldProps(index + '.description')} />
            </div>
            <div>
                <label htmlFor="startDate">Data de início *:</label>
                <input type='date' {...changeHandler.getFieldProps(index + '.start_time')} />
            </div>
            <div>
                <label htmlFor="endDate">Data de fim *:</label>
                <input type='date' {...changeHandler.getFieldProps(index + '.end_time')} />
            </div>
            <div style={{ flexGrow: 0 }}>
                <label htmlFor="thumbnail">Thumbnail:</label>
                <ImgInput {...changeHandler.getFieldMeta(index + '.thumbnail')}>
                    <img {...changeHandler.getImageFieldProps(index + '.thumbnail')} width='100%' />
                </ImgInput>
            </div>
            <div style={{ flexGrow: 0 }}>
                <label htmlFor="banner">Banner:</label>
                <ImgInput {...changeHandler.getFieldMeta(index + '.banner')}>
                    <img {...changeHandler.getImageFieldProps(index + '.banner')} width='100%' />
                </ImgInput>
            </div>
        </Row>
        <CloseButton size='30px' onClick={() => {

            changeHandler.setState(changeHandler.state.filter((element, _index) => _index !== index))
        }} />
    </Offer_>
}