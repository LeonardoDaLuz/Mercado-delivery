import { Component, useEffect, useState } from 'react';
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
//import './style.css';

function EditProduct({ carregaProduto, produto, match }) {


    const [editionState, setEditionState] = useState({
        titulo: "ss",
        imgs: ["sd "],
        preco: -1,
        descricao: "",
        categorias: [""],
        stock: 5,
        offer: {
            time_range: { starts: 'ds', ends: 'ao' },
            off_price: 123,
            type: 'day'
        }
    })

    const validation = {

    }

    useEffect(() => {
        carregaProduto(match.params.id);
    }, [])


    function handleChange(e) {
        const { name, value } = e.target;
        let newState = {
            ...editionState,
            [name]: value
        }
        setEditionState(newState);
        console.log(newState)
    }

    const onSubmit = (values) => {
        alert(values);
    }
    
    const formik = useFormik({
        initialValues: editionState,
        onSubmit
    })


    useEffect(() => {
        Object.assign(formik.values, produto);

    }, [produto])


    return (
        <div className="container-lg px-2 produto-page">
            <BreadcumbsSelector produto={produto} />
            <form className='row' onSubmit={(e)=> { e.preventDefault(); console.log(formik.values)}}>
                <PhotoFrame formik={formik} produto={produto} editionState={editionState} handleChange={handleChange} />
                <BuyFrame formik={formik} produto={produto} editionState={editionState} handleChange={handleChange} />
                <ProductDescription produto={produto} />
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



