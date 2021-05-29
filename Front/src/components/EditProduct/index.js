import { Component } from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Sub Components
import { BreadCumbs } from './BreadCumbs';
import { QuadroDeFotos } from './QuadroDeFotos';
import BuyFrame from './BuyFrame';
import { DescricaoProduto } from './DescricaoProduto';
//Others
import { carregaProduto } from '@actions/produto'
import './style.css';

class EditProduct extends Component {

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
                <div className='row'>
                    <QuadroDeFotos produto={produto} />
                    <BuyFrame produto={produto} loja={loja} />
                    <DescricaoProduto produto={produto} />
                </div>
            </div >
        );
    }
}

const mapStateToProps = store => ({
    produto: store.produto
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaProduto }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProduct));



