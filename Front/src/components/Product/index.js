import { Component, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Sub Components
import { BreadCumbs } from './BreadCumbs';
import { AdminOptions } from './AdminOptions';
import { PhotoFrame } from './PhotoFrame';
import BuyFrame from './BuyFrame';
import { ProductDescription } from './ProductDescription';
//Others
import { loadProduct, deleteProduct } from '@actions/product'
//import './style.css';
import { Container, Row } from '../../globalStyleds';
import { LogRender } from '../../utils/logRender';

function Produto({ loadProduct, produto, loja, match }) {

    useEffect(() => {
        loadProduct(match.params.id);
    }, []);

    //LogRender({ produto }, "Produto");
    return (
        <Container>
            <Row>
                <BreadCumbs product={produto} />
                <AdminOptions product={produto}/>
            </Row>
            <div style={{ clear: 'both' }} />
            <Row>
                <PhotoFrame product={produto} />
                <BuyFrame product={produto} />
                <ProductDescription product={produto} />
            </Row>
        </Container >
    );

}

const mapStateToProps = store => ({
    produto: store.product
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadProduct, deleteProduct }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Produto));



