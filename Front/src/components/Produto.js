import react, { Component } from 'react';
import configs from '../configs';
import like from './svg/heart-black.svg';
import './Produto.css';
import icons from 'glyphicons';

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
        console.log(icons);
        var breadLis = this.state.produto.categorias.map(function (cat) {
            return (
                <li>
                    {cat}
                </li>
            );
        })
        return (
            <div className="container-lg px-2 produto-page">
                <nav class='bread mx-2' aria-label="breadcrumb">
                    <ol>
                        <li>Home</li>
                        {breadLis}
                    </ol>
                </nav>
                <h1 class="h2 mx-2">{this.state.produto.titulo}</h1>
                <div class='d-flex flex-wrap'>
                    <div class='quadro-de-foto mx-2'>
                        <img src={configs.imgsPath + this.state.produto.img} />
                    </div>
                    <div className="quadro-comprar mb-auto mx-2">
                        <div className="teste">MIST BOLO LINEA CHOCOLATE 300G</div>
                        <div className="preco">9,50</div>
                        <div>Em <span className="green-text">12x de 35 sem juros</span></div>
                        <img className="like" src={like} height='32' />
                        <span className="like">♥</span>
                        <span className="like">{icons.heart}</span>
"
                        Quantidade
                        Frete
                        Chega em X dias
                        <div className="d-flex">
                            <button className="btn btn-primary mr-2 flex-grow-1">comprar agora</button>
                            <button className="btn btn-success  flex-grow-1">Adicionar ao carrinho</button>
                        </div>
                    </div>

                    <div className="w-100 mx-2">
                        <div className=''><h3>Descrição do produto</h3></div>
             
                        <p>{this.state.produto.descricao}</p>
                    </div>
                   
                </div>
            </div>

        );
    }
}