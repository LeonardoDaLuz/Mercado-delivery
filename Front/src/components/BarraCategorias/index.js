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
                        <li>Ofertas do dia</li>
                        <li>Ofertas da semana</li>
                        <li>Ofertas do mês</li>
                        <li>Contato</li>
                        <li>Trabalhe Conosco</li>
                        <li></li>
                    </ul>
                </Container>
            </BarraCategorias_>
        );
    }
}