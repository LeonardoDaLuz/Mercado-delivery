import react, { Component } from 'react';
import configs from '@configs';

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

import './style.css';
import moveElementFromTo from '@utils/moveElementFromTo';

export default class Produtos extends Component {

    constructor() {
        super();

        this.loading = false;
        this.state = {
            produtos: [
            ]
        }
    }


    componentDidMount() {
        this.ligarInfiniteLoader();
    }

    async ligarInfiniteLoader() {
        await this.carregarMaisProdutos();
        await window.waitForSeconds(0.5);

        while (document.body.clientHeight < window.innerHeight) {
            if (!this.loading) {

                this.loading = true;
                await this.carregarMaisProdutos();
                await window.waitForSeconds(0.5);
                this.loading = false;
            }
        }

        window.addEventListener("scroll", async (e) => {
            if (!this.loading && window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {

                this.loading = true;
                await this.carregarMaisProdutos();
                this.loading = false;
            }
        });
    }

    async carregarMaisProdutos() {
        await fetch("http://localhost:3001/produtos/" + this.state.produtos.length + "/" + (this.state.produtos.length + 12))
            .then(x => x.json())
            .then(data => {
                let oldProdutos = this.state.produtos;
                this.setState({ produtos: oldProdutos.concat(data) });
            })
    }

    render() {



        let produtoCards = this.state.produtos.map((p, index) => {
            return <ProdutoCard produto={p} key={index} carrinho={this.props.loja.carrinho} />
        })
        return (
            <section className="container-lg px-2 produtos-page">
                <div className="container-lg">
                    <ul className="row">
                        {produtoCards}
                    </ul>
                </div>
            </section>

        );
    }
}


class ProdutoCard extends Component {
    render() {



        let quantidade = this.props.carrinho.quantosForamAdicionadosAoCarrinho(this.props.produto._id);
        return (
            <li key={this.props.index} className="produto-card card col-3 justify-content-between">
                <Link to={'/produto2/'+this.props.produto._id}>
                    <img data-chroma-key="#FFFFFF" src={configs.imgsPath + this.props.produto.img} />
                </Link>
                <h5>{this.props.produto.titulo}</h5>

                <div className="preco-pg-lista">
                    <div className="riscado">R$ {(this.props.produto.preco * 1.1).toFixed(2)}</div>
                    <div className="preco">{this.props.produto.preco}</div>
                </div>

                <div className="row justify-content-center" >
                    <button className="rem" type="button" disabled={quantidade < 1 ? true : false} onClick={(e) => { this.props.carrinho.adicionarAoCarrinho(this.props.produto._id, -1); this.animarAdicao(e, -1) }}
                    >-</button>
                    <div className="quant-number">{quantidade}</div>
                    <button className="add" type="button" onClick={(e) => { this.props.carrinho.adicionarAoCarrinho(this.props.produto._id, 1); this.animarAdicao(e) }}>+</button>
                </div>
            </li>
        );
    }

    async animarAdicao(e, dir = 1) {
        let img = e.target.parentElement.parentElement.querySelector("img");
        let carrinho = document.querySelector("#carrinho");
        moveElementFromTo(img, img, carrinho, dir);
    }
}