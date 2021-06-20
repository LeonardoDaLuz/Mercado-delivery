import { Component, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Redirect, useHistory, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Sub Components
import { BreadcumbsSelector } from './BreadCumbsSelector';
import { PhotoFrame } from './PhotoFrame';
import BuyFrame from './BuyFrame';
import { ProductDescription } from './ProductDescription';
//Others
import { carregaProduto, updateProduct } from '@actions/produto'
import { resetProductList } from '../../store/actions/produtos';
import produce from 'immer';
import { useFormik } from 'formik';
import { LogRender } from '@utils/logRender';
import { nestedPropertySeletor } from '../../utils/nestedPropertySelector';
import { Row, ButtonFlat, Container} from '../../globalStyleds';
import { colorTheme } from '../../theme';
import { Options  } from './Options';
//import './style.css';

function EditProduct({ carregaProduto, updateProduct, produto, match, resetProductList }) {

    const [draftProduct, setDraftProductState] = useState({

        title: 'teste',
        categories: [],
        description: '',
        imgs: [],
        price: 0,
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

    const history = useHistory();

    useEffect(() => {
        setDraftStatus('Loading...');
        carregaProduto(match.params.id);
    }, []);


    useEffect(() => {
        if (draftStatus === 'Loading...')
            setDraftStatus('Loaded...');

        setDraftProductState({ ...produto });
    }, [produto]); //Quando o produto é carregado a partir do servidor, isto é copiado para um rascunho do produto, que é onde os dados serão alterados.


    const handleChanges = useCallback((e) => {
console.log('change');
        setDraftStatus('modified');
        setDraftProductState(produce(draftProduct, (draftState) => {
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

        setDraftProductState(produce(draftProduct, (draftState) => {
            draftState.categories[index] = newValue;
            draftState.categories.length = index + 1;

        }));
        console.log(draftProduct.categories);
    }

    const pushImages = (e, images) => {
        e.preventDefault();
        setDraftStatus('modified');
        setDraftProductState(produce(draftProduct, (draftState) => {
            draftState.imgs.push(...images);
        }));
    }

    const removeImage = (e, image) => {
        e.preventDefault();
        setDraftStatus('modified');
        setDraftProductState(produce(draftProduct, (draftState) => {
            let index = draftState.imgs.indexOf(image);
            if (index !== -1) {
                draftState.imgs.splice(index, 1);
            }
        }));
    }

    const discardChanges = (e) => {
        e.preventDefault();
        history.push('/product/' + produto._id);
    }

    const saveChanges = (e) => {
        e.preventDefault();

        console.log(draftProduct);

        setDraftStatus('Saving...')

        updateProduct(
            draftProduct,
            () => { setDraftStatus('Saved'); history.push('/product/' + produto._id); resetProductList();  },
            () => { setDraftStatus('Save failure'); }
        );
    }


    let childProps = { draftProduct, product: produto, produto: draftProduct, draftStatus, handleChanges, changeBreadcumb, pushImages, removeImage, saveChanges, discardChanges } //produto está redundante apenas para manter compatibilidade por enquanto 

    return (
        <Container>
            <Row>
                <BreadcumbsSelector {...childProps} />
                <Options {...childProps}/>
            </Row>
            <form onSubmit={saveChanges}>
                <Row>
                    <PhotoFrame   {...childProps} product={draftProduct} />
                    <BuyFrame   {...childProps} />
                    <ProductDescription  {...childProps} />
                </Row>
            </form>
        </Container >
    );

}

const mapStateToProps = store => ({
    produto: store.produto
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaProduto, updateProduct, resetProductList }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProduct));



