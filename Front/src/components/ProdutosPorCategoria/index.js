import { Component, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators, connect } from 'redux';
import SidebarCategorias from './SidebarCategorias';
import { ProdutoCard } from './ProdutoCard';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';

import { Container, ListaDeProdutos } from './styles';
import assets from '@assets';
import './style.css';

export default withRouter(function ProdutosPorCategoria(props) {

    useEffect(()=> {
        ligarInfiniteLoader();
    }, [])

    async function ligarInfiniteLoader() {
        let loja = props.loja;
        let path = props.location.pathname;
        let loading = false;
        await loja.carregarMaisProdutos(path, 12);
        await window.waitForSeconds(0.5);

        while (document.body.clientHeight < window.innerHeight) {
            if (!loading) {

                loading = true;
                await loja.carregarMaisProdutos(path, 12);
                await window.waitForSeconds(0.5);
                loading = false;
            }
        }

        window.addEventListener("scroll", async (e) => {
            if (!loading && window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {

                loading = true;
                await loja.carregarMaisProdutos(path, 12);
                loading = false;
            }
        });
    }


    let produtoCards = props.loja.state.listaProdutos.map((p, index) => {
        return <ProdutoCard produto={p} key={index} carrinho={props.loja.carrinho} />
    })
    return (
        <Container>
            <SidebarCategorias loja={props.loja} />
            <ListaDeProdutos>

                {produtoCards}

            </ListaDeProdutos>
        </Container>

    );

})

