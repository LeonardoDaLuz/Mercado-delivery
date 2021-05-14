import React, { Component } from 'react';
import assets from '@assets';

import './Header.css';


export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="container-lg px-0">
                    <div className="d-flex navbar-light align-items-center">
                        <a className="navbar-logo" href="google.com"></a>
                        <form className="flex-grow-1 d-flex align-items-center">
                            <input className="form-control flex-grow-1" />
                            <button className="btn btn-outline-success flex-grow-1 ml-1" type="submit">Buscar</button>
                        </form>
                        <button id="sidebar-toogler" className="navbar-toggler d-lg-none" type="button" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="d-flex px-2 align-items-center m-0">
                            <li className="d-none d-lg-block nav-item flex-grow-1 mx-3">Crie sua conta</li>
                            <li className="d-none d-lg-block nav-item flex-grow-1 mx-3">Entre</li>
                            <li className="d-none d-lg-block flex-grow-1 mx-3 nav-item">Compras</li>
                            <li className="flex-grow-1 mx-0 nav-item"><a id="carrinho" href="google.com"><div className="quantidade">{this.props.loja.carrinho.quantosTemProdutosNoCarrinho()}</div><img src={assets.carrinho} /><div className="custo">R$ {this.props.loja.carrinho.custoTotalNoCarrinho()}</div></a></li>
                        </ul>
                    </div>
                </div>                
            </header >
        );
    }
}
/* <ul >
                        <li>Inicio</li>
                        <li>Buscar</li>
                        <li>Minhas Compras</li>
                        <li>Favoritos</li>
                        <li>Ofertas do dia</li>
                        <li>Minha Conta</li>
                        <li>Contato</li>
                    </ul>*/

