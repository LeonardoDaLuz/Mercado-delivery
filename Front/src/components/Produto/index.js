import { Component, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Sub Components
import { BreadCumbs } from './BreadCumbs';
import { PhotoFrame } from './PhotoFrame';
import BuyFrame from './BuyFrame';
import { ProductDescription } from './ProductDescription';
//Others
import { carregaProduto } from '@actions/produto'
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
            <BreadCumbs produto={produto} />
            <Row>
                <PhotoFrame produto={produto} />
                <BuyFrame produto={produto} loja={loja} />
                <ProductDescription produto={produto} />
            </Row>
        </div >
    );

}

const mapStateToProps = store => ({
    produto: store.produto
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaProduto }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Produto));



