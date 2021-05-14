import React, { Component } from 'react';
import './style.css';

export default class BarraCategorias extends Component {
    render() {
        return (
        <div className="d-none d-lg-block barra-categorias py-1">
            <div className="container">
                <ul className="d-flex c-px-3 px-0 my-0 mx-auto c-flex-grow-1 flex-wrap">
                    <li>Categorias</li>
                    <li>Ofertas do dias</li>
                    <li>Frutas e verduras</li>
                    <li>Enlatados</li>
                    <li>Grãos</li>
                    <li>Carnes</li>
                </ul>
            </div>
        </div>
        );
    }
}