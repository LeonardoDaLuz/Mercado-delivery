import react, { Component } from 'react';
import configs from '../configs';

import './Produto.css';

export default class Produto extends Component {

    constructor() {
        super();
        this.state = {
            produto: {
                titulo: '',
                categorias: []
            }
        }
    }
    componentDidMount() {

        fetch('http://localhost:3001/produto/5')
            .then(T => T.json())
            .then(p => {
                this.setState({ produto: p })
                console.log(p)
            })
    }

    render() {
        console.log(this.state.produto);
        var breadLis = this.state.produto.categorias.map(function (cat) {
            return (
                <li>
                    {cat}
                </li>
            );
        })
        return (
            <div className="container-lg my-3">
                <nav class='bread' aria-label="breadcrumb">
                    <ol>
                        <li>Home</li>
                        {breadLis}
                    </ol>
                </nav>
                <h1 class="h2">{this.state.produto.titulo}</h1>
                <div class='d-flex flex-wrap justify-content-between'>
                    <div class='quadro-de-foto'>
                        <img src={configs.imgsPath + this.state.produto.img} />
                    </div>
                    <div className="quadro-comprar">
                        <div className="teste">MIST BOLO LINEA CHOCOLATE 300G</div>
                        <div className="preco">9,50</div>
                        <div>Em <span>12x de 35 sem juros</span></div>
                        Like
                        Quantidade
                        Frete
                        Chega em X dias
                        <div className="d-flex">
                            <button className="btn btn-primary mr-2 flex-grow-1">comprar agora</button>
                            <button className="btn btn-success  flex-grow-1">Adicionar ao carrinho</button>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}