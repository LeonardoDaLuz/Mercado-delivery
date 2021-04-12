import react, { Component } from 'react';
import configs from '../configs';
import like from './svg/heart-black.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    withRouter
} from "react-router-dom";
import moveElementFromTo from '../utilities/moveElementFromTo';
import './Produto.css';

export default withRouter(class Produto extends Component {

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
        console.log(this.props);
        fetch('http://localhost:3001/produto2/' + this.props.match.params.id)
            .then(T => T.json())
            .then(p => {
                this.setState({ produto: p })
                //console.log(p)
            });
    }


    render() {

        let loja = this.props.loja;
    
        let produto = this.state.produto;
        console.log(produto);


        return (
            <div className="container-lg px-2 produto-page">
                <BreadCumbs produto={produto} />
                <div className='row'>
                    <QuadroDeFoto produto={produto} />
                    <QuadroComprar produto={produto} loja={loja} />
                    <DescricaoProduto produto={produto} />
                </div>
            </div >
        );
    }



})

function BreadCumbs(props) {

    var breadLis = props.produto.categorias.map(function (cat) { return (<li key={cat}>{cat}</li>); });

    return (
        <nav className='bread mx-2 mt-4' aria-label="breadcrumb">
            <ol>
                <li>Home</li>
                {breadLis}
            </ol>
        </nav>
    )
}

function QuadroDeFoto(props) {
    return (
        <div className='quadro-de-foto mx-2'>
            <img src={configs.imgsPath + props.produto.img} />
        </div>
    )
}

function QuadroComprar(props) {
    let produto = props.produto;
    let loja = props.loja;
    let quantidadeAdicionado = loja.carrinho.quantosForamAdicionadosAoCarrinho(produto._id);

    function animarAdicao(e, dir = 1) {
        let img = document.querySelector(".quadro-de-foto img");
        let carrinho = document.querySelector("#carrinho");
        moveElementFromTo(img, img, carrinho, dir);
    }

    return (
        <div className="quadro-comprar mb-auto mx-2">
            <div className="titulo-produto row">
                <h1 className="h3 col">{produto.titulo}   </h1>
                <span className="like pr-3 col-auto">♥</span>
            </div>
            <div className="row">
                <div className="quantidade flex-basis-150 col-auto">
                    <label htmlFor="quantidade">Quantidade:</label>
                    <div className=" input-group mb-2">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" disabled={quantidadeAdicionado < 1 ? true : false} onClick={(e) => { loja.carrinho.adicionarAoCarrinho(produto._id, -1); animarAdicao(e, -1) }}>-</button>
                        </div>
                        <input className="form-control text-center" placeholder="" value={quantidadeAdicionado} aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => loja.carrinho.editarQuantidadeDoProdutoAoCarrinho(produto._id, e.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={(e) => { loja.carrinho.adicionarAoCarrinho(produto._id, 1); animarAdicao(e) }}>+</button>
                        </div>
                    </div>
                </div>
                <div className="preco-pg-produto col">
                    <div className="preco text-right">{produto.preco}</div>
                    <div className="text-right">Em <span className="green-text">12x de 35 sem juros</span></div>
                </div>
            </div>
            <div className="calcular-frete">
                <span>Acima de 100 reais em compras o <b>Frete é grátis!</b><br />
                            Abaixo disso, o frete para sua localização atual é R$ <b>{loja.state.frete.toFixed(2)} </b>
                </span>
            </div>
            <div className="row mx-0">
                <button className="btn btn-primary mr-2 col">Ir para o carrinho</button>
                <button className="btn btn-success ml-2 col">Adicionar ao carrinho</button>
            </div>
        </div>
    );
}

function DescricaoProduto(props) {

    return (
        <div className="descricao-pg-produto">
            <div className=''><h3 >Descrição do produto</h3></div>
            <div
                dangerouslySetInnerHTML={{
                    __html: props.produto.descricao
                }}></div>

        </div>
    )
}