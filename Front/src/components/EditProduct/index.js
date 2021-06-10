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

    const draftStatus = useRef('empty');

    useEffect(() => {
        draftStatus.current = 'loading';
        carregaProduto(match.params.id);
    }, []);

    useEffect(() => {

        setDraftProductState({ ...produto });
        if (draftStatus.current === 'saving')
            draftStatus.current = 'saved';
        else
            draftStatus.current = 'loaded';

    }, [produto]); //Quando o produto é carregado a partir do servidor, isto é copiado para um rascunho do produto, que é onde os dados serão alterados.

    const submit = (e) => {
        e.preventDefault();
        draftStatus.current = 'saving';

        updateProduct(
            draftProductState,
            () => { draftStatus.current = 'saved'; },
            () => { draftStatus.current = 'save failure'; }
        );
    }


    const handleChanges = useCallback((e) => {

        draftStatus.current = 'modified';

        setDraftProductState(produce(draftProductState, (draftState) => {

            console.log(e);
            // console.log('handleChanges type: ' + e.target.type);
            switch (e.target.type) {
                case 'date':
                    nestedPropertySeletor(draftState, e.target.name).set(e.target.value + "T00:00:00.000Z");
                    break;
                default:
                    nestedPropertySeletor(draftState, e.target.name).set(e.target.value);
            }


        }));
  

    });

    let childProps = { product: draftProductState, produto: draftProductState, draftStatus, handleChanges } //produto está redundante apenas para manter compatibilidade por enquanto

    return (
        <div className="container-lg px-2 produto-page">
            {draftStatus.current}
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



