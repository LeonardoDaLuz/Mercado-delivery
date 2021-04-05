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

    }

    render() {
     
       
        return (
            <section className="container-lg px-2 produtos-page">
                <div className="container-lg">
                    <div className="row">
                        <div className="col product-card">
                                lkjklj
                        </div>
                        <div className="col product-card">
                                lkjklj
                        </div>
                        <div className="col product-card">
                                lkjklj
                        </div>
                        <div className="col product-card">
                                lkjklj
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}