import { Component } from 'react';
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
import './style.css';
import { Row } from '../../globalStyleds';

class Produto extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const { carregaProduto } = this.props;
        carregaProduto(this.props.match.params.id);
    }


    render() {

        let loja = this.props.loja;
        const { carregaProduto, produto } = this.props;

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
}

const mapStateToProps = store => ({
    produto: store.produto
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaProduto }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Produto));



