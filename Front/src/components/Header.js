import React, { Component } from 'react';
import logo from '../UI-Imgs/LogoAlpha.png';
import carrinhoImg from '../UI-Imgs/Carrinho32px.png'
import '../main.css';
import './Header.css';


export default class Header extends Component {

    collapse(querySelector) {
        let element = document.querySelector(querySelector);
        element.classList.toggle("show");
        if (element.classList.contains('d-none')) {
            element.classList.remove('d-none')
        }
    }

    openSideBar() {
        let element = document.querySelector('#side-bar');
        document.body.classList.add("noscroll");
        element.classList.add("show");
    }

    closeSideBar() {

    }

    render() {
        return (
            <nav className="header">
                <div className="container-lg px-0">
                    <div className="d-flex navbar-light align-items-center">
                        <a className="navbar-logo" href="google.com"></a>
                        <form className="flex-grow-1 d-flex align-items-center">
                            <input className="form-control flex-grow-1" />
                            <button className="btn btn-outline-success flex-grow-1 ml-1" type="submit">Buscar</button>
                        </form>
                        <button id="sidebar-toogler" className="navbar-toggler d-lg-none" onClick={() => this.openSideBar()} type="button" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="d-flex px-2 align-items-center m-0">
                            <li className="d-none d-lg-block nav-item flex-grow-1 mx-3">Crie sua conta</li>
                            <li className="d-none d-lg-block nav-item flex-grow-1 mx-3">Entre</li>
                            <li className="d-none d-lg-block flex-grow-1 mx-3 nav-item">Compras</li>
                            <li className="flex-grow-1 mx-0 nav-item"><a id="carrinho" href="google.com"><img src={carrinhoImg} /></a></li>
                        </ul>
                    </div>
                </div>                
            </nav >
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

