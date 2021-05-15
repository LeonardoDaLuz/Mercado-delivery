import moveElementFromTo from '@utils/moveElementFromTo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect } from 'react'

import { QuadroComprarContainer, Row, Col, LikeButton, BotaoOutline } from './styles';
import { likeProduto } from '@actions/produtos'
import { carregarCarrinho, editarQuantidadeDoProdutoAoCarrinho, adicionarProdutoAoCarrinho } from '@actions/carrinho'
import { quantosForamAdicionadosAoCarrinho } from '@analyzers/carrinho';

function QuadroComprar(props) {

    let { produto, likeProduto, carregarCarrinho, adicionarProdutoAoCarrinho, editarQuantidadeDoProdutoAoCarrinho } = props;
    let loja = props.loja;
    let quantidadeAdicionado = quantosForamAdicionadosAoCarrinho(produto._id);
    let liked = produto.likes !== undefined && produto.likes.includes(0);
    let disabled = quantidadeAdicionado < 1;
    
    useEffect(() => {
        carregarCarrinho();
    }, []);

    return (
        <QuadroComprarContainer>
            <Row>
                <h1>{produto.titulo}   </h1>
                <LikeButton className={liked} onClick={() => likeProduto(produto._id)}>♥</LikeButton>
            </Row>
            <Row>
                <Col style={{ flexBasis: "150px", flexGrow: '0' }}>
                    <label>Quantidade:</label>
                    <Row>
                        <BotaoOutline disabled={disabled} onClick={(e) => { adicionarProdutoAoCarrinho(produto._id, -1); animarAdicao(e, -1); }}>-</BotaoOutline>
                        <input className="form-control text-center" value={quantidadeAdicionado} onChange={(e) => editarQuantidadeDoProdutoAoCarrinho(produto._id, e.target.value)} />
                        <BotaoOutline onClick={(e) => { adicionarProdutoAoCarrinho(produto._id, 1); animarAdicao(e) }}>+</BotaoOutline>
                    </Row>
                </Col>
                <Col className="bloco-preco">
                    <span>{produto.preco}</span><br />
                    <span>Em <b>12x de 35 sem juros</b></span>
                </Col>
            </Row>
            <Row className="calcular-frete">
                <span>Acima de 100 reais em compras o <b>Frete é grátis!</b><br />
                Abaixo disso, o frete para sua localização atual é R$ <b>{loja.state.frete.toFixed(2)} </b>
                </span>
            </Row>
            <Row>
                <button className="botao-azul">Ir para o carrinho</button>
                <button className="botao-verde" onClick={(e) => { adicionarProdutoAoCarrinho(produto._id, 1); animarAdicao(e) }}>Adicionar ao carrinho</button>
            </Row>
        </QuadroComprarContainer>
    );
}

function animarAdicao(e, dir = 1) {
    let fromImg = document.querySelector(".quadro-de-foto img");
    let to = document.querySelector("#carrinho");
    moveElementFromTo(fromImg, fromImg, to, dir);
}

const mapStateToProps = store => ({
    produto: store.produto,
    carrinho: store.carrinho
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ likeProduto, adicionarProdutoAoCarrinho, carregarCarrinho, editarQuantidadeDoProdutoAoCarrinho }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(QuadroComprar);
