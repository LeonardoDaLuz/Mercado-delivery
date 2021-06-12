import { Component, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Sub Components
import { BreadcumbsSelector } from './BreadCumbsSelector';
import { PhotoFrame } from './PhotoFrame';
import BuyFrame from './BuyFrame';
import { ProductDescription } from './ProductDescription';
//Others
import { carregaProduto, updateProduct } from '@actions/produto'
import produce from 'immer';
import { useFormik } from 'formik';
import { LogRender } from '@utils/logRender';
import { nestedPropertySeletor } from '../../utils/nestedPropertySelector';
//import './style.css';

function EditProduct({ carregaProduto, updateProduct, produto, match }) {

    const [draftProductState, setDraftProductState] = useState({

        titulo: 'teste',
        categorias: [],
        descricao: '',
        imgs: [],
        preco: 0,
        stock: 1,
        offer: {
            time_range: {
                starts: 0,
                ends: 0
            },
            off_price: 0,
            enabled: false
        },
    });

    const [draftStatus, setDraftStatus] = useState('empty');

    useEffect(() => {
        setDraftStatus('Loading...');
        carregaProduto(match.params.id);
    }, []);


    useEffect(() => {
        if (draftStatus === 'Loading...')
            setDraftStatus('Loaded...');

        setDraftProductState({ ...produto });
    }, [produto]); //Quando o produto é carregado a partir do servidor, isto é copiado para um rascunho do produto, que é onde os dados serão alterados.

    const submit = (e) => {

        e.preventDefault();

        setDraftStatus('Saving...')

        updateProduct(
            draftProductState,
            () => { setDraftStatus('Saved') },
            () => { setDraftStatus('Save failure'); }
        );
    }


    const handleChanges = useCallback((e) => {

        setDraftStatus('modified');
        setDraftProductState(produce(draftProductState, (draftState) => {
            switch (e.target.type) {
                case 'date':
                    nestedPropertySeletor(draftState, e.target.name).set(e.target.value + "T00:00:00.000Z");
                    break;
                default:
                    nestedPropertySeletor(draftState, e.target.name).set(e.target.value);
            }
        }));
    });

    const changeBreadcumb = (index, newValue) => {
        setDraftStatus('modified');

        setDraftProductState(produce(draftProductState, (draftState) => {
            draftState.categorias[index] = newValue;
            draftState.categorias.length = index + 1;

        }));
        console.log(draftProductState.categorias);
    }

    const pushImages = (images) => {
        setDraftStatus('modified');
        setDraftProductState(produce(draftProductState, (draftState) => {
            draftProductState.imgs.push(...images);
        }));
    }

    const removeImage = (image) => {
        setDraftStatus('modified');
        setDraftProductState(produce(draftProductState, (draftState) => {
            let index = draftProductState.imgs.indexOf(image);
            if (index !== -1) {
                draftProductState.imgs.splice(index, 1);
            }
        }));
    }

    let childProps = { product: draftProductState, produto: draftProductState, draftStatus, handleChanges, changeBreadcumb, pushImages, removeImage } //produto está redundante apenas para manter compatibilidade por enquanto 

    return (
        <div className="container-lg px-2 produto-page">
            <BreadcumbsSelector {...childProps} />
            <form className='row ' onSubmit={submit}>
                <PhotoFrame   {...childProps} />
                <BuyFrame   {...childProps} />
                <ProductDescription  {...childProps} />
            </form>
        </div >
    );

}

const mapStateToProps = store => ({
    produto: store.produto
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaProduto, updateProduct }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProduct));



