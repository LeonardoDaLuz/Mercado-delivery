import react, { Component } from 'react';
import configs from '../configs';
import like from './svg/heart-black.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import l from '../utilities/log';

import './Produtos.css';
import makeChroma from '../utilities/chroma-key';

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
        if (this.state.produtos.length == 0)
            return (<div></div>);

        let produtoCards = this.state.produtos.map((p, index) => {
            return <ProdutoCard produto={p} key={index} carrinho={this.props.carrinho} />
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
                <img data-chroma-key="#FFFFFF" src={configs.imgsPath + this.props.produto.img} />

                <h5>{this.props.produto.titulo}</h5>
                <div className="preco-pg-lista">
                    <div className="riscado">R$ {(this.props.produto.preco * 1.1).toFixed(2)}</div>
                    <div className="preco">{this.props.produto.preco}</div>
                </div>

                <div className="row justify-content-center" >
                    <button className="rem" type="button" disabled={quantidade < 1 ? true : false} onClick={(e) => { this.props.carrinho.adicionarAoCarrinho(this.props.produto._id, -1); this.animarAdicao(e,-1) }}
                    >-</button>
                    <div className="quant-number">{quantidade}</div>
                    <button className="add" type="button" onClick={(e) => { this.props.carrinho.adicionarAoCarrinho(this.props.produto._id, 1); this.animarAdicao(e) }}>+</button>
                </div>
            </li>
        );
    }

    async animarAdicao(e, dir=1) {
        let img = e.target.parentElement.parentElement.querySelector("img");
        let carrinho = document.querySelector("#carrinho");
        this.animacaoFromTo(img, img, carrinho, dir);
    }

    async animacaoFromTo(img, from, to, dir = 1) {

        //   let rect = img.getBoundingClientRect();
        let fromRect = from.getBoundingClientRect();
        let toRect = to.getBoundingClientRect();

        let _img = document.createElement("img")
        _img.src = img.src;
        _img.classList.add('fromToAnimated')

        let updatePosition = {
            left: fromRect.left,
            top: fromRect.top,
            width: fromRect.width,
            height: fromRect.height
        }

        SetStyles();

        UpdatePosition();

        document.body.append(_img);


        let duracao = 1;
        let time = 0;
        while (time < duracao) {
            await window.waitForEndOfFrame();
            time += 0.016;
            toRect = to.getBoundingClientRect();
            fromRect = from.getBoundingClientRect();
            let progress = dir == 1 ? time / duracao : (duracao - time) / duracao;
            updatePosition.left = window.mathf.smoothStep(fromRect.left, toRect.left, progress);
            updatePosition.top = window.mathf.smoothStep(fromRect.top, toRect.top, progress);
            updatePosition.width = window.mathf.sphereLerp(fromRect.width, toRect.width, progress);
            updatePosition.height = window.mathf.sphereLerp(fromRect.height, toRect.height, progress);
            UpdatePosition();
        }

        _img.remove();

        function UpdatePosition() {
            _img.style = `
            width: ${updatePosition.width}px;
            height: ${updatePosition.height}px;
            top: ${updatePosition.top}px;
            left: ${updatePosition.left}px;
            `;
        }

        function SetStyles() {

            let style = document.getElementById("animation_product_add");

            if(style==undefined) {
                style = document.createElement("style");
                style.id='animation_product_add';
                document.body.append(style);

                style.innerHTML = `

                .fromToAnimated {
                    position: fixed;
                    z-index: 100;
                    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.333);
                    background-color: white;
                    animation: adicao-carrinho-fade-in 1.1s ease-out;
                }

                @keyframes adicao-carrinho-fade-in {
                    0% {
                        opacity: 0;
                        transform: scale(1);
                    }
                    15% {
                        opacity: 1;
                      
                    }
                    50% {
                        box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.333);
                        transform: scale(1.3);
                    }

                    100% {
                        box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.333);
                        transform: scale(1);
                 
                    }
                }`;
            }
           
        }

    }

}