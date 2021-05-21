import { useEffect } from 'react';
import { useHistory, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SidebarCategorias from './SidebarCategorias';
import ProdutoCard from './ProdutoCard';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';

import { Container, ListaDeProdutos } from './styles';
import assets from '@assets';
import './style.css';
import { carregaMaisProdutos, reiniciaListaDeProdutos } from '../../store/actions/produtos';


let loading = false;
let path = "";
let query = "";

function ProdutosPorCategoria({ loja, produtos, carregaMaisProdutos, reiniciaListaDeProdutos, location, history }) {

    query = location.search;
    path = location.pathname;

    useEffect(() => {
        ligarInfiniteLoader();

        return history.listen(location => {
            reiniciaListaDeProdutos(location.pathname, location.search, 12)
        }
        );

    }, [])


    async function ligarInfiniteLoader() {

        await carregaMaisProdutos(path, query, 12);
        await window.waitForSeconds(0.5);

        while (document.body.clientHeight < window.innerHeight) { //Faz com que mais produtos sejam carregados até que preencha a tela toda.
            if (!loading) {

                loading = true;
                await carregaMaisProdutos(path, query, 12);
                await window.waitForSeconds(0.5);
                loading = false;
            }
        }

        window.addEventListener("scroll", async (e) => { //carrega mais produtos a medida que dá scroll (infinite loader)
            if (!loading && window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {

                loading = true;
                await carregaMaisProdutos(path, query, 12);
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
    bindActionCreators({ carregaMaisProdutos, reiniciaListaDeProdutos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProdutosPorCategoria));

