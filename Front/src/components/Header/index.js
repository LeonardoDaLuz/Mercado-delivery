import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import assets from '@assets';
import { carregarCarrinho } from '@actions/carrinho'

import { quantosDesseForamAdicionadosAoCarrinho,  quantosProdutosTemNoCarrinho, custoTotalNoCarrinho  } from '@analyzers/carrinho';

import './style.css';
import { Header, ContainerLg, NavbarLogo, SearchBar, Sandwich, Carrinho } from './styles';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';
import { connect } from 'react-redux';

 class Header_ extends Component {

    componentDidMount(props) {

        let { carregarCarrinho } = this.props;
        console.log("kct");
        console.log(carregarCarrinho);
        carregarCarrinho();
    }

    render() {
        return (
            <Header>
                <ContainerLg>
                    <Row>
                        <NavbarLogo href="/"></NavbarLogo>
                        <SearchBar>
                            <input/>
                            <ButtonOutline>Buscar</ButtonOutline>
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
}


const mapStateToProps = store=> ({
    carrinho: store.carrinho
})

const mapDispatchToProps = dispatch=> 
    bindActionCreators({ carregarCarrinho }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Header_);
