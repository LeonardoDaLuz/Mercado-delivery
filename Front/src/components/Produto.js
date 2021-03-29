import react, { Component } from 'react';
import configs from '../configs';
import like from './svg/heart-black.svg';
import './Produto.css';

export default class Produto extends Component {

    constructor() {
        super();
        this.state = {
            produto: {
                titulo: '',
                categorias: [],
                descricao: ''
            }
        }
    }
    componentDidMount() {

        fetch('http://localhost:3001/produto/904')
            .then(T => T.json())
            .then(p => {
                this.setState({ produto: p })
                console.log(p)
            })
    }

    render() {
        var breadLis = this.state.produto.categorias.map(function (cat) {
            return (
                <li>
                    {cat}
                </li>
            );
        })
        var excerpt = this.state.produto.descricao;
        if (excerpt != null) {
            excerpt = excerpt.substring(0, 150);
            console.log(excerpt);
            var splited = excerpt.split(' ');
            console.log(splited);
            splited.splice(splited.length - 1, 1)

            excerpt = splited.join(' ');
            excerpt += "...<a href='#descricao' class='d-inline-block'>ver mais</a>";
            console.log(excerpt);
        }

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
                        <div className="d-flex align-items-start">
                            <div className="quantidade">
                                <label for="exampleInputEmail1">Quantidade:</label>
                                <div className=" input-group mb-3 text-right">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                                    </div>
                                    <input type="text" id="quantidade" class="form-control text-center" placeholder="" value='1' aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                    </div>
                                </div>
                            </div>
                            <span className="like">♥</span>
                        </div>
                        <div className="d-flex">
                            <div class="input-group cep mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">CEP</span>
                                </div>
                                <input type="text" class="form-control" placeholder="83209-000" aria-label="cep" aria-describedby="basic-addon1" />
                            </div>
                            <div className="preco-bloco flex-grow-1 pl-3">
                                <div className="preco text-right">9,50</div>
                                <div className="text-right">Em <span className="green-text">12x de 35 sem juros</span></div>
                            </div>
                        </div>





                        <div className="d-flex w-100">
                            <button className="btn btn-primary mr-2 flex-grow-1">comprar agora</button>
                            <button className="btn btn-success  flex-grow-1">Adicionar ao carrinho</button>
                        </div>
                    </div>

                    <div className="w-100 mx-2">
                        <div className=''><h3 id="descricao">Descrição do produto</h3></div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.state.produto.descricao
                            }}></div>

                    </div>

                </div>
            </div>

        );
    }
}