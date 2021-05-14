import React, { Component } from 'react';
import './style.css';
import assets from '@assets';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={assets.logomonoWhite}/>
                        </div>
                        <div className="col">
                           <ul>
                           <li>Ofertas da Semana</li>
                           <li>Ofertas do Dia</li>
                               <li>Nossa Historia</li>
                               <li>Trabalhe conosco</li>
                               <li>Contato</li>
                           </ul>
                        </div>
                        <div className="col">
                        <ul>
                               <li>Minha Conta</li>
                               <li>Carrinho de compras</li>
                               <li>Sair</li>
                           </ul>
                        </div>
                    </div>
                </div>
                <div className="rodape">
                <b>© Mercado Delivery 2021</b> Todos os direitos reservados.
                </div>
            </footer>
        );
    }

}