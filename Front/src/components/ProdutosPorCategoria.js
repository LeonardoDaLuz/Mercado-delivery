import react, { Component } from 'react';
//import { CSSTransition } from 'react-transition-group';
import configs from '../configs';
import like from './svg/heart-black.svg';
import {
    BrowserRouter as Router,
    Link,
    withRouter
} from "react-router-dom";
import l from '../utilities/log';

import './ProdutosPorCategoria.css';
import moveElementFromTo from '../utilities/moveElementFromTo';
import Breadcumb from "./Breadcumb";

export default withRouter(class ProdutosPorCategoria extends Component {

    componentDidMount() {
        this.ligarInfiniteLoader();
    }

    async ligarInfiniteLoader() {
        let loja = this.props.loja;
        let path = this.props.location.pathname;
        await loja.carregarMaisProdutos(path, 12);
        await window.waitForSeconds(0.5);

        while (document.body.clientHeight < window.innerHeight) {
            if (!this.loading) {

                this.loading = true;
                await loja.carregarMaisProdutos(path, 12);
                await window.waitForSeconds(0.5);
                this.loading = false;
            }
        }

        window.addEventListener("scroll", async (e) => {
            if (!this.loading && window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {

                this.loading = true;
                await loja.carregarMaisProdutos(path, 12);
                this.loading = false;
            }
        });
    }

    render() {
        let produtoCards = this.props.loja.state.listaProdutos.map((p, index) => {
            return <ProdutoCard produto={p} key={index} carrinho={this.props.loja.carrinho} />
        })
        return (
            <section className="container-lg px-2 produtos-page d-flex">
                <Categorias loja={this.props.loja} />
                <div className="col-9">
                    <ul className="row">
                        {produtoCards}
                    </ul>
                </div>
            </section>

        );
    }
})

let Categorias = withRouter(class Categorias extends Component {


    render() {
        let isRoot = this.props.match.params.cat1 === undefined;
        let categoriaSelecionada = this.selecionaSubcategoria(this.props.loja.state.categorias);
        let CategoriaLista = this.obtemListaAPartirDaCategoria(categoriaSelecionada);
        let caminhoAcima = this.caminho().caminhoAcima;
        console.log("teste");
        return (
            <aside className="categorias col-3">
                {!isRoot &&
                    <Breadcumb path={caminhoAcima} loja={this.props.loja} />
                }
                <h3>{this.caminho().ultimaCategoria}</h3>           
                    {CategoriaLista}


            </aside>
        )
    }

    componentDidMount() {
        this.props.loja.carregaCategorias();
    }

    obtemListaAPartirDaCategoria(objeto) {

        let path = this.props.location.pathname;
        if (path[path.length - 1] != '/')
            path += '/';

        let loja = this.props.loja;
        let keys =  Object.keys(objeto);
        let resultado = keys.map(function (key, index) {

            let id = key;
            let link = Object.keys(objeto[key]).length > 0 ? <Link to={path + key} onClick={() => { loja.reiniciaListaDeProdutos(path + key, 12) }}>{key}</Link> : key;
            return <li>{link}</li>;
        });

        

        return keys.length==0?<></>:<ul className="lista">{resultado}</ul>;
    }

    selecionaSubcategoria(categorias) {
        let path = this.props.match.params;
        let newCategorias = categorias;

        for (let key in path) {
            if (path[key] !== undefined && newCategorias[path[key]] !== undefined) {
                newCategorias = newCategorias[path[key]];
            } else {
                break;
            }
        }
        return newCategorias;
    }

    caminho() {
        let path = this.props.location.pathname;
        let splitedPath = path.split('/');
        //splitedPath.pop();
        let ultimaCategoria = splitedPath.pop();

        ultimaCategoria=ultimaCategoria=="produtos"?"Todos":ultimaCategoria;

        return {
            ultimaCategoria,
            caminhoAcima: splitedPath.join('/')            
        }
    }

})

class ProdutoCard extends Component {
    render() {



        let quantidade = this.props.carrinho.quantosForamAdicionadosAoCarrinho(this.props.produto._id);
        return (
            <li key={this.props.index} className="produto-card card col-3 justify-content-between">
                <Link to={'/produto2/' + this.props.produto._id}>
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