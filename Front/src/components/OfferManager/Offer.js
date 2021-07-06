import assets from "../../assets"
import { Row, Inline_block, CloseButton } from "../../globalStyleds"
import { Offer_, ImgInput, Teste } from "./style"
import configs from '@configs';
import { uploadImages } from "../../utils/uploadImagesToServer";
import { useFormik } from "formik";
import { useEffect } from "react";
//import { useFormik } from 'formik';
//import * as Yup from 'yup';

export const Offer = ({ offer, index,  allFormiksValuesRef }) => {


    const formik = useFormik({
        initialvalues: offer,
        enableReinitialize: true,
        onSubmit: values => {
            alert(values);
        }
    });

    useEffect(() => {
        formik.setValues({ ...offer });
    }, [offer]);

    let thumbnailUrl = formik.values?.thumbnail;
    let bannerUrl = formik.values?.banner;

    allFormiksValuesRef.current[index]=formik.values;

    return <Offer_>
        {JSON.stringify(formik.values)}
        <Row >

            <div>
                <label htmlFor="name">Nome*:</label>
                <input {...formik.getFieldProps('name')} />
                <span>Obrigatório</span>
            </div>
            <div>
                <label htmlFor="description">Descrição (opcional):</label>
                <input {...formik.getFieldProps('description')} />
            </div>
            <div>
                <label htmlFor="start_time">Data de início *:</label>
                <input type='date' {...formik.getFieldProps('start_time')} />
            </div>
            <div>
                <label htmlFor="end_time">Data de fim *:</label>
                <input type='date' {...formik.getFieldProps('end_time')} />
            </div>
            <div style={{ flexGrow: 0 }}>
                <label htmlFor="thumbnail">Thumbnail:</label>
                <ImgInput onClick={() => {
                    uploadImages(false)
                    .then((imageUrl) => formik.setValues({ ...offer, thumbnail: imageUrl }))
                }}>
                    <img width='100%' src={configs.imgsPath + thumbnailUrl} />
                </ImgInput>
            </div>
            <div style={{ flexGrow: 0 }}>
                <label htmlFor="banner">Banner:</label>
                <ImgInput onClick={() => {
                  
                    uploadImages(false)
                    .then((imageUrl) => formik.setValues({ ...offer, banner: imageUrl }))
                }}>
                    <img width='100%' src={configs.imgsPath + bannerUrl} />
                </ImgInput>
            </div>
        </Row>
        <CloseButton size='30px' onClick={() => {

           // changeHandler.setState(changeHandler.state.filter((element, _index) => _index !== index))
        }} />
    </Offer_>
}