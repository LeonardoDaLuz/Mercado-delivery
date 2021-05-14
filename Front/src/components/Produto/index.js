import react, { Component } from 'react';

import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { carregaProdutos } from '../../store/actions/listaProdutos'
import { connect } from 'react-redux';

//Sub Components
import { BreadCumbs } from './BreadCumbs';
import './style.css';
import { QuadroDeFotos } from './QuadroDeFotos';
import { QuadroComprar } from './QuadroComprar';
import { DescricaoProduto } from './DescricaoProduto';

class Produto extends Component {

    constructor() {
        super();

        this.state = {
            produto: {
                _id: 5,
                titulo: '',
                categorias: [],
                descricao: '',
            }
        }
    }

    componentDidMount() {
        this.props.loja.carregaProduto(this.props.match.params.id);
    }


    render() {

        let loja = this.props.loja;
        let produto = loja.state.produtoCarregado;

        return (
            <div className="container-lg px-2 produto-page">
                <BreadCumbs produto={produto} />
                <div className='row'>
                    <QuadroDeFotos produto={produto} />
                    <QuadroComprar produto={produto} loja={loja} />
                    <DescricaoProduto produto={produto} />
                </div>
            </div >
        );
    }
}

const mapStateToProps = store => ({
    produtos: store.listaProdutos
})

const mapDispatchToProps = dispatch => {
    bindActionCreators({ carregaProdutos: carregaProdutos },);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Produto));



