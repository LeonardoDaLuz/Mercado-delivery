import React, { Component } from 'react';
import './style.css';
import assets from '@assets';
import { Container, Row, Col } from '@globalStyleds';
import { Footer_, FooterLogo } from './style';
export default class Footer extends Component {

    render() {
        return (
            <Footer_>
                <Container>
                    <Row>
                        <FooterLogo>
                           
                        </FooterLogo>
                        <Col>
                            <ul>
                                <li>Ofertas da Semana</li>
                                <li>Ofertas do Dia</li>
                                <li>Nossa Historia</li>
                                <li>Trabalhe conosco</li>
                                <li>Contato</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Minha Conta</li>
                                <li>Carrinho de compras</li>
                                <li>Sair</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="rodape">
                    <b>© Mercado Delivery 2021</b> Todos os direitos reservados.
                </div>
            </Footer_>
        );
    }

}