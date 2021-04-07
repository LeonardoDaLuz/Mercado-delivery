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

import './Produtos.css';

export default class Produtos extends Component {

    constructor() {
        super();


        this.state = {
            produtos: [
                {
                    titulo: '',
                    categorias: [],
                    descricao: ''
                },
                {
                    titulo: '',
                    categorias: [],
                    descricao: ''
                }
            ]
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/produtos/0/6")
            .then(x => x.json())
            .then(data => {
                this.setState({ produtos: data });
            })
    }

    render() {

        let produtoCards = this.state.produtos.map(p => {
            return <ProdutoCard produto={p} />
        })
        return (
            <section className="container-lg px-2 produtos-page">
                <div className="container-lg">
                    <div className="row">
                        {produtoCards}
                    </div>
                </div>
            </section>

        );
    }
}


class ProdutoCard extends Component {
    render() {
        console.log(this.props.produto.titulo);
        return (

            <div class="produto-card card col-3 justify-content-between">
                <img src={configs.imgsPath + this.props.produto.img} />
      
                    <h5>{this.props.produto.titulo}</h5>
                    <div className="preco-pg-lista">
                        <div className="riscado">R$ 10,50</div>
                        <div className="preco">9,50</div>
                    </div>
        
                <div className="row justify-content-center">
                        <button className="rem" type="button">-</button>
                        <div className="quant-number">0</div>
                        <button className="add" type="button">+</button>
                </div>
            </div>
        );
    }
}