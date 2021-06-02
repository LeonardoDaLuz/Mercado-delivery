import moveElementFromTo from '@utils/moveElementFromTo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect } from 'react'

import { QuadroComprarContainer, LikeButton, ButtonIncreaseDecrease, BotaoAzul, BotaoVerde, BlocoPreco, BlocoCalcularFrete, BlocoQuantidade } from './styles';
import { likeProduto } from '@actions/produto';
import { carregarCarrinho, editarQuantidadeDoProdutoAoCarrinho, adicionarProdutoAoCarrinho } from '@actions/carrinho';
import { quantosDesseForamAdicionadosAoCarrinho , custoTotalNoCarrinho } from '@analyzers/carrinho';
import { Col, Row } from '../../../globalStyleds';

function BuyFrame(props) {

    let { produto, likeProduto, carregarCarrinho, adicionarProdutoAoCarrinho, editarQuantidadeDoProdutoAoCarrinho } = props;
    let loja = props.loja;
    let quantidadeAdicionado = quantosDesseForamAdicionadosAoCarrinho(produto._id);
    let liked = produto.likes !== undefined && produto.likes.includes(0);
    let disabled = quantidadeAdicionado < 1;

    useEffect(() => {
       // carregarCarrinho();
    }, []);


    function removerDoCarrinho(e) { adicionarProdutoAoCarrinho(produto._id, -1); animarAdicao(e, -1); }
    function adicionarAoCarrinho(e) { adicionarProdutoAoCarrinho(produto._id, 1); animarAdicao(e); }
    function editarQuantidade(e) { editarQuantidadeDoProdutoAoCarrinho(produto._id, e.target.value); }

    return (
        <QuadroComprarContainer>
            <Row>
                <h1>{produto.titulo}   </h1>
                <LikeButton className={liked} onClick={() => likeProduto(produto._id)}>♥</LikeButton>
            </Row>
            <Row>
                <BlocoQuantidade>
                    <label>Quantidade:</label>
                    <Row>
                        <ButtonIncreaseDecrease disabled={disabled} onClick={removerDoCarrinho}>-</ButtonIncreaseDecrease>
                        <input className="form-control text-center" value={quantidadeAdicionado} onChange={editarQuantidade} />
                        <ButtonIncreaseDecrease onClick={adicionarAoCarrinho}>+</ButtonIncreaseDecrease>
                    </Row>
                </BlocoQuantidade>
                <BlocoPreco>
                    <span>{(produto.preco.toFixed(2)).replace('.',',')}</span><br />
                    <span>Em <b>12x de 35 <div>sem juros</div></b></span>
                </BlocoPreco>
            </Row>
            <BlocoCalcularFrete>
                <span>Acima de 100 reais em compras o <b>Frete é grátis!</b><br />
                Abaixo disso, o frete para sua localização atual é R$ <b>{loja.state.frete.toFixed(2)} </b>
                </span>
            </BlocoCalcularFrete>
            <Row>
                <BotaoAzul>Ir para o carrinho</BotaoAzul>
                <BotaoVerde onClick={adicionarAoCarrinho}>Adicionar ao carrinho</BotaoVerde>
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


export default connect(mapStateToProps, mapDispatchToProps)(BuyFrame);
