import moveElementFromTo from '@utils/moveElementFromTo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect } from 'react'

import { BuyFrameContainer, LikeButton, ButtonIncreaseDecrease, BotaoAzul, BotaoVerde, BlocoPreco, BlocoCalcularFrete, BlocoQuantidade } from './styles';
import { likeProduct } from '@actions/product';
import { carregarCarrinho, editarQuantidadeDoProdutoAoCarrinho, adicionarProdutoAoCarrinho } from '@actions/carrinho';
import { quantosDesseForamAdicionadosAoCarrinho , custoTotalNoCarrinho } from '@analyzers/carrinho';
import { Col, Row } from '../../../globalStyleds';

function BuyFrame({ product, likeProduct, adicionarProdutoAoCarrinho, editarQuantidadeDoProdutoAoCarrinho }) {

    let addedQuantity = quantosDesseForamAdicionadosAoCarrinho(product._id);
    let liked = product.likes !== undefined && product.likes.includes(0);
    let disabled = addedQuantity < 1;

    useEffect(() => {
       // carregarCarrinho();
    }, []);


    function removerDoCarrinho(e) { adicionarProdutoAoCarrinho(product._id, -1); animarAdicao(e, -1); }
    function adicionarAoCarrinho(e) { adicionarProdutoAoCarrinho(product._id, 1); animarAdicao(e); }
    function editarQuantidade(e) { editarQuantidadeDoProdutoAoCarrinho(product._id, e.target.value); }


    return (
        <BuyFrameContainer>
            <Row>
                <h1>{product.title}   </h1>
                <LikeButton className={liked} onClick={() => likeProduct(product._id)}>♥</LikeButton>
            </Row>
            <Row>
                <BlocoQuantidade>
                    <label>Quantidade:</label>
                    <Row>
                        <ButtonIncreaseDecrease disabled={disabled} onClick={removerDoCarrinho}>-</ButtonIncreaseDecrease>
                        <input value={addedQuantity} onChange={editarQuantidade} />
                        <ButtonIncreaseDecrease onClick={adicionarAoCarrinho}>+</ButtonIncreaseDecrease>
                    </Row>
                </BlocoQuantidade>
                <BlocoPreco>
                    <span>{(product.price.toFixed(2)).replace('.',',')}</span><br />
                    <span>Em <b>12x de 35 <div>sem juros</div></b></span>
                </BlocoPreco>
            </Row>
            <BlocoCalcularFrete>
                <span>Acima de 100 reais em compras o <b>Frete é grátis!</b><br />
                Abaixo disso, o frete para sua localização atual é R$ <b>{'loja.state.frete.toFixed(2)'} </b>
                </span>
            </BlocoCalcularFrete>
            <Row>
                <BotaoAzul>Ir para o carrinho</BotaoAzul>
                <BotaoVerde onClick={adicionarAoCarrinho}>Adicionar ao carrinho</BotaoVerde>
            </Row>
        </BuyFrameContainer>
    );
}


function animarAdicao(e, dir = 1) {
    let fromImg = document.querySelector(".productImg img");
    let to = document.querySelector("#carrinho");
    moveElementFromTo(fromImg, fromImg, to, dir);
}

const mapStateToProps = store => ({
    produto: store.produto,
    carrinho: store.carrinho
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ likeProduct, adicionarProdutoAoCarrinho, carregarCarrinho, editarQuantidadeDoProdutoAoCarrinho }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(BuyFrame);
