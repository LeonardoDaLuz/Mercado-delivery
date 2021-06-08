import { Component, useEffect, useLayoutEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Sub Components
import { BreadcumbsSelector } from './BreadCumbsSelector';
import { PhotoFrame } from './PhotoFrame';
import BuyFrame from './BuyFrame';
import { ProductDescription } from './ProductDescription';
//Others
import { carregaProduto } from '@actions/produto'
import produce from 'immer';
import { useFormik } from 'formik';
import { useLogChangedPropsWhenUpdate } from '../../utils/useLogChangedPropsWhenUpdate';
//import './style.css';

function EditProduct(props) {

    const { carregaProduto, produto, match } = props;


 
    useEffect(() => {
      //  carregaProduto(match.params.id);
    }, [])



    const onSubmit = (values) => {
        alert(values);
    }
    let formik = useFormik({
        initialValues: produto,
        enableReinitialize: true,
        onSubmit
    })
    
    useLogChangedPropsWhenUpdate(props, 'editProduct');

    useEffect(() => {   

       // Object.assign(formik.values, produto);
        formik.setValues(produto);
       /* let keys = Object.keys(formik.values);
        console.log(JSON.stringify(produto)csss);
        keys.forEach(key => {
            formik.setFieldValue(key, produto[key]);
        })*/


    }, [])


    return (
        <div className="container-lg px-2 produto-page">
            <BreadcumbsSelector produto={produto} />
            <form className='row ' onSubmit={(e)=> { e.preventDefault(); console.log(formik.values)}}>
                <PhotoFrame formik={formik} produto={produto}  />
                <BuyFrame formik={formik} produto={produto}  />
                <ProductDescription formik={formik} produto={produto} values={formik.values}/>
            </form>
        </div >
    );

}

const mapStateToProps = store => ({
    produto: store.produto
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaProduto }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProduct));



