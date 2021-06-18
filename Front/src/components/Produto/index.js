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
import { carregaProduto, deleteProduct } from '@actions/produto'
//import './style.css';
import { Row } from '../../globalStyleds';
import { LogRender } from '../../utils/logRender';

function Produto({ carregaProduto, produto, loja, match }) {

    useEffect(() => {
        carregaProduto(match.params.id);
    }, []);

    //LogRender({ produto }, "Produto");
    return (
        <div className="container-lg px-2 produto-page">
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
        </div >
    );

}

const mapStateToProps = store => ({
    produto: store.produto
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaProduto, deleteProduct }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Produto));



