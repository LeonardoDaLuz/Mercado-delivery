import React, { Component, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import assets from '@assets';
import { carregarCarrinho } from '@actions/carrinho'

import { quantosDesseForamAdicionadosAoCarrinho, quantosProdutosTemNoCarrinho, custoTotalNoCarrinho } from '@analyzers/carrinho';

import './style.css';
import { Header, ContainerLg, NavbarLogo, SearchBar, Sandwich, Carrinho } from './styles';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function Header_({ carregarCarrinho, history, location }) {
    let query = new URLSearchParams(location.SearchBar);
    let teste = 'asdasd';
    useEffect(() => {
        carregarCarrinho();
    }, [])

    function buscaSubmit(e) {
        e.preventDefault();
        let query = new URLSearchParams(location.SearchBar);
        let formData = new FormData(e.target);
        query.set('busca', formData.get('busca'));
        history.push(location.pathname + "?" + query);
    }

    return (
        <Header>
            <ContainerLg>
                <Row>
                    <NavbarLogo href="/"></NavbarLogo>
                    <SearchBar onSubmit={buscaSubmit}>
                        <input type='text' name="busca" />
                        <ButtonOutline type='submit'>Buscar</ButtonOutline>
                    </SearchBar>
                    <Sandwich id="sidebar-toogler">
                    </Sandwich>
                    <HorizontalFlexList_Lg>
                        <li>Crie sua conta</li>
                        <li>Entre</li>
                        <li>Compras</li>
                        <li className="d-block">
                            <Carrinho id="carrinho" href="#">
                                <div className="quantidade">{quantosProdutosTemNoCarrinho()}</div>
                                <img src={assets.carrinho} />
                                <div className="custo">R$ {custoTotalNoCarrinho()}</div>
                            </Carrinho>
                        </li>
                    </HorizontalFlexList_Lg>
                </Row>
            </ContainerLg>
        </Header>
    );
}


const mapStateToProps = store => ({
    carrinho: store.carrinho
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregarCarrinho }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header_));
