import { Component } from 'react';
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
//import './style.css';

class EditProduct extends Component {

    constructor() {
        super();
        this.state =
        {
            titulo: "ss",
            imgs: [ "sd "],
            preco: -1,
            descricao: "",
            categorias: [""],
        }
     
    }

    componentDidMount() {
        const { carregaProduto } = this.props;
        carregaProduto(this.props.match.params.id);
        this.setState({
            ...this.state,
            titulo: 'leo2'
        })
    }


    render() {

        let loja = this.props.loja;
        const { carregaProduto, produto } = this.props;

        return (
            <div className="container-lg px-2 produto-page">
                <BreadcumbsSelector produto={produto} />
                <div className='row'>
                    <PhotoFrame produto={produto} editionState={this.state} setEditionState={this.setState}/>
                    <BuyFrame produto={produto}  editionState={this.state} setEditionState={this.setState} />
                    <ProductDescription produto={produto} />
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



