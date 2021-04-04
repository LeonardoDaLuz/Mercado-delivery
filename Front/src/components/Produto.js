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

        fetch('http://localhost:3001/produto/804')
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
                <nav class='bread mx-2 mt-4' aria-label="breadcrumb">
                    <ol>
                        <li>Home</li>
                        {breadLis}
                    </ol>
                </nav>

                <div class='row flex-wrap'>
                    <div class='quadro-de-foto mx-2'>
                        <img src={configs.imgsPath + this.state.produto.img} />
                    </div>
                    <div className="quadro-comprar mb-auto mx-2">
                        <div className="titulo-produto row">
                            <h1 class="h3 col">{this.state.produto.titulo}   </h1>
                            <span className="like pr-3 col-auto">♥</span>
                        </div>

                        <div className="row">
                            <div className="quantidade flex-basis-150 col-auto">
                                <label for="exampleInputEmail1">Quantidade:</label>
                                <div className=" input-group mb-2">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                                    </div>
                                    <input type="text" id="quantidade" class="form-control text-center" placeholder="" value='1' aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="preco-pg-produto col">
                                <div className="preco text-right">9,50</div>
                                <div className="text-right">Em <span className="green-text">12x de 35 sem juros</span></div>
                            </div>

                        </div>

                        <div className="calcular-frete row">
                            <label className="col-12" for="inlineFormInputGroup">Calcular frete:</label>
                            <div class="col">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">CEP</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="00000-000" />
                                </div>
                            </div>
                            <div className="row col">
                                <div className="col-6">Normal:<br /><b>3 dias úteis</b></div>
                                <div className="col-6">R$ 19,90</div>
                                <div className="col-6">Sedex:<br /><b>2 dias úteis</b></div>
                                <div className="col-6">R$ 29,90</div>
                            </div>
                        </div>





                        <div className="row mx-1">
                            <button className="btn btn-primary mr-2 col">comprar agora</button>
                            <button className="btn btn-success ml-2 col">Adicionar ao carrinho</button>
                        </div>
                    </div>

                    <div className="descricao-pg-produto">
                        <div className=''><h3 >Descrição do produto</h3></div>
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