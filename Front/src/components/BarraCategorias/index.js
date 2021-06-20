import React, { Component } from 'react';
import { BarraCategorias_ } from './styles.js';
import { Container } from '@globalStyleds';

export default class BarraCategorias extends Component {
    render() {
        return (
            <BarraCategorias_>
                <Container>
                    <ul>
                        <li>Categorias</li>
                        <li>Ofertas do dias</li>
                        <li>Frutas e verduras</li>
                        <li>Enlatados</li>
                        <li>Grãos</li>
                        <li>Carnes</li>
                    </ul>
                </Container>
            </BarraCategorias_>
        );
    }
}