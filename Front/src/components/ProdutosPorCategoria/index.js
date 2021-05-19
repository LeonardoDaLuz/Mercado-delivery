import { Component, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SidebarCategorias from './SidebarCategorias';
import ProdutoCard from './ProdutoCard';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';

import { Container, ListaDeProdutos } from './styles';
import assets from '@assets';
import './style.css';
import { carregaMaisProdutos } from '../../store/actions/produtos';

let loading = false;

function ProdutosPorCategoria({ loja, produtos, carregaMaisProdutos, location }) {


    useEffect(() => {
        ligarInfiniteLoader();
    }, [])

    async function ligarInfiniteLoader() {
        let path = location.pathname;
        await carregaMaisProdutos(path, 12);
        await window.waitForSeconds(0.5);

        while (document.body.clientHeight < window.innerHeight) {
            if (!loading) {

                loading = true;
                await carregaMaisProdutos(path, 12);
                await window.waitForSeconds(0.5);
                loading = false;
            }
        }

        window.addEventListener("scroll", async (e) => {
            if (!loading && window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {

                loading = true;
                await carregaMaisProdutos(path, 12);
                loading = false;
            }
        });
    }


    let produtoCards = produtos.map((p, index) => {
        return <ProdutoCard produto={p} key={index} carrinho={loja.carrinho} />
    })
    return (
        <Container>
            <SidebarCategorias loja={loja} />
            <ListaDeProdutos>

                {produtoCards}

            </ListaDeProdutos>
        </Container>

    );

}


const mapStateToProps = store => ({
    produtos: store.produtos
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaMaisProdutos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProdutosPorCategoria));
