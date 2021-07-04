import assets from "../../assets"
import { Row, Inline_block, CloseButton } from "../../globalStyleds"
import { Offer_, ImgInput } from "./style"
import configs from '@configs';

export const Offer = ({ formik, offer, index }) => {

    let thumbnailUrl = formik.values[index].thumbnail ? configs.imgsPath + formik.values[index].thumbnail : assets.imagePlaceholder;

    return <Offer_>
        <Row>

            <div>
                {formik.values[index].thumbnail}
                <label htmlFor="name">Nome:</label>
                <input {...formik.getFieldProps(index + '.name')}></input>
            </div>
            <div>
                <label htmlFor="description">Descrição (opcional):</label>
                <input {...formik.getFieldProps(index + '.description')}></input>
            </div>
            <div>
                <label htmlFor="startDate">Data de início:</label>
                <input type='date'{...formik.getFieldProps(index + '.start_time')}></input>
            </div>
            <div>
                <label htmlFor="endDate">Data de fim:</label>
                <input type='date' {...formik.getFieldProps(index + '.end_time')}></input>

            </div>
            <div style={{ flexGrow: 0 }}>
                <label htmlFor="thumbnail">Thumbnail:</label>
                <ImgInput onClick={() => formik.values[0].thumbnail = 'porra'}>
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