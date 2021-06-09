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
import { LogRender } from '@utils/logRender';
//import './style.css';

function EditProduct({ carregaProduto, produto, match }) {

    const [draftProductState, setDraftProductState] = useState({
        _id: 5,
        titulo: 'teste',
        categorias: [],
        descricao: '',
        imgs: [],
        preco: 0,
        stock: 1
    });

    useEffect(() => {
        carregaProduto(match.params.id);
    }, []);

    useEffect(() => {
        setDraftProductState({ ...produto });
    }, [produto]);

    const onSubmit = (values) => {
        alert(values);
    }

    const handleChanges = (e) => {

        setDraftProductState(produce(draftProductState, (draftState) => {
            draftState[e.target.name] = e.target.value;
        }));
    }

    let childProps = { product: draftProductState, produto: draftProductState, handleChanges } //produto está redundante apenas para manter compatibilidade por enquanto

    return (
        <div className="container-lg px-2 produto-page">
            <BreadcumbsSelector {...childProps} />
            <form className='row ' onSubmit={(e) => { e.preventDefault(); }}>
                <PhotoFrame   {...childProps} />
                <BuyFrame   {...childProps} />
                <ProductDescription   {...childProps} />
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



