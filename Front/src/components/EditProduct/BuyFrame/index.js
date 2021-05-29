
import React, { useEffect } from 'react'
import { colorTheme } from '../../../theme';
//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { likeProduto } from '@actions/produto';
import { carregarCarrinho, editarQuantidadeDoProdutoAoCarrinho, adicionarProdutoAoCarrinho } from '@actions/carrinho';
import { quantosDesseForamAdicionadosAoCarrinho, custoTotalNoCarrinho } from '@analyzers/carrinho';

//styles and animation
import { Row, Col } from '@globalStyleds';
import moveElementFromTo from '@utils/moveElementFromTo';
import { BuyFrameContainer, ButtonOutline_, SaveButton, DiscartButton, PriceBlock, StockBlock, Offer, OfferBody } from './styles';
import { ButtonFlat } from '../../../globalStyleds';






 

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
        <BuyFrameContainer>
            <textarea type='text' value={produto.titulo}>Titulo...</textarea>
            <Row>
                <StockBlock>
                    <label>Estoque:</label>
                    <Row>
                        <ButtonOutline_ disabled={disabled} onClick={removerDoCarrinho}>-</ButtonOutline_>
                        <input className="form-control text-center" value={quantidadeAdicionado} onChange={editarQuantidade} />
                        <ButtonOutline_ onClick={adicionarAoCarrinho}>+</ButtonOutline_>
                    </Row>
                </StockBlock>
                <PriceBlock>
                    <label>Preço:</label>
                    <input id="preco" name="preco" />
                </PriceBlock>
            </Row>
            <Offer>
                <label>Oferta:</label>
                <OfferBody>
                    <div>
                        <label for="inicio">Início</label>
                        <input type="date" id='inicio' />
                    </div>
                    <div>
                        <label for="fim">Fim</label>
                        <input type="date" id='fim' />
                    </div>
                    <div>
                        <label for="fim">Valor</label>
                        <input type="text" name="novoValor" />
                    </div>
                    <div>
                        <label for="offerType">Tipo</label>
                        <select>
                            <option value='day'>Dia</option>
                            <option value='week'>semana</option>
                            <option value='month'>Mês</option>
                        </select>
                    </div>
                    <ButtonFlat bgColor={colorTheme.primary()}>Ativar oferta</ButtonFlat>
                    <ButtonFlat disabled={true}>Desativar oferta</ButtonFlat>

                </OfferBody>
            </Offer>
            <Row>
                <SaveButton>Descartar alterações</SaveButton>
                <DiscartButton onClick={adicionarAoCarrinho}>Salvar</DiscartButton>
            </Row>
        </BuyFrameContainer>
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
