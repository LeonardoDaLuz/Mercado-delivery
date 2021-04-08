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
        l(1);
        while (document.body.clientHeight < window.innerHeight) {
            if (!this.loading) {
                l(2);
                this.loading = true;
                await this.loadMaisProdutos();
                await window.waitForSeconds(0.5);
                this.loading = false;
            }
        }
        window.addEventListener("scroll", async (e) => {
            if (!this.loading && window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {
                l(4);
                this.loading = true;
                await this.loadMaisProdutos();
                this.loading = false;
            }
        });
    }

    async loadMaisProdutos() {
        l(3);
        l(this.state.produtos.length + "/" + this.state.produtos.length + 1);
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
            return <ProdutoCard produto={p} key={index} />
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
        console.log(this.props.index);
        return (

            <li key={this.props.index} className="produto-card card col-3 justify-content-between">
                <img data-chroma-key="#FFFFFF" src={configs.imgsPath + this.props.produto.img} />

                <h5>{this.props.produto.titulo}</h5>
                <div className="preco-pg-lista">
                    <div className="riscado">R$ 10,50</div>
                    <div className="preco">9,50</div>
                </div>

                <div className="row justify-content-center">
                    <button className="rem" type="button">-</button>
                    <div className="quant-number">0</div>
                    <button className="add" type="button" onClick={this.animarAdicao}>+</button>
                </div>
            </li>
        );


    }



    async animarAdicao(e) {
        console.log();
        let img = e.target.parentElement.parentElement.querySelector("img");

        /*
        function getBase64Image(imgUrl) {
            return new Promise(resolve => {
                var img = new Image();
                img.src = imgUrl;
                img.setAttribute('crossOrigin', 'anonymous');
                img.onload = (() => {
                    var canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0);
                    var dataURL = canvas.toDataURL("image/png");
                    //console.log('UgetBase64Image.dataURL ', dataURL);
                    resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
                });
            });
        }

        var os = await getBase64Image(img.src);*/

        //img.crossOrigin = "anonymous";
        // makeChroma(img);

        let rect = img.getBoundingClientRect();
        let _img = document.createElement("img")
        _img.src = img.src;

        let position = {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        }

        UpdatePosition();

        document.body.append(_img);
        let carrinho = document.querySelector("#carrinho");
        let carrinhoRect = carrinho.getBoundingClientRect();

        let duracao = 1;
        let time = 0;
        while (time < duracao) {
            await window.waitForEndOfFrame();
            time += 0.016;
            position.left = window.mathf.smoothStep(rect.left, carrinhoRect.left, time / duracao);
            position.top = window.mathf.smoothStep(rect.top, carrinhoRect.top, time / duracao);
            position.width = window.mathf.sphereLerp(rect.width, 15, time / duracao);
            position.height = window.mathf.sphereLerp(rect.height, 15, time / duracao);
            UpdatePosition();
        }

        _img.remove();

        function UpdatePosition() {
            _img.style = `
            width: ${position.width}px;
            height: ${position.height}px;
            position: fixed;
            top: ${position.top}px;
            left: ${position.left}px;
            z-index: 100;
            `;
        }
        console.log(rect);
    }
}