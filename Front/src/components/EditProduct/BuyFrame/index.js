
import React, { useEffect } from 'react'
import { colorTheme } from '../../../theme';
//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//styles and animation
import { Row, Col } from '@globalStyleds';
import moveElementFromTo from '@utils/moveElementFromTo';
import { BuyFrameContainer, PriceBlock, Offer, OfferBody, ButtonIncreaseDecrease, QuantityBlock } from './styles';
import { ButtonFlat } from '../../../globalStyleds';


function BuyFrame( { produto, editionState, setEditionState }) {

    function handleChange (e) {
        const { name, value } = e.target;
        setEditionState({
            ...editionState,
            titulo: 'leo'
        });
        console.log("kct");
    }

    return (
        <BuyFrameContainer>
            <textarea type='text' name='titulo' value={editionState.titulo} onChange={handleChange}>Titulo...</textarea>
            <Row>
                <QuantityBlock>
                    <label>Estoque:</label>
                    <Row>
                        <ButtonIncreaseDecrease>-</ButtonIncreaseDecrease>
                        <input className="form-control text-center" />
                        <ButtonIncreaseDecrease>+</ButtonIncreaseDecrease>
                    </Row>
                </QuantityBlock>
                <PriceBlock>
                    <label>Preço:</label>
                    <input id="preco" name="preco" />
                </PriceBlock>
            </Row>
            <Offer>
                <label>Oferta:</label>
                <OfferBody>
                    <div>
                        <label htmlFor="inicio">Início</label>
                        <input type="date" id='inicio' />
                    </div>
                    <div>
                        <label htmlFor="fim">Fim</label>
                        <input type="date" id='fim' />
                    </div>
                    <div>
                        <label htmlFor="novoValor">Valor na oferta</label>
                        <input type="text" name="novoValor" />
                    </div>
                    <div>
                        <label htmlFor="offerType">Tipo</label>
                        <select>
                            <option value='day'>Dia</option>
                            <option value='week'>semana</option>
                            <option value='month'>Mês</option>
                        </select>
                    </div>
                    <Row style={{flexBasis: '300px'}}>
                        <ButtonFlat bgColor={colorTheme.secondary()}>Ativar oferta</ButtonFlat>
                        <ButtonFlat bgColor={colorTheme.secondary()} disabled={true}>Desativar oferta</ButtonFlat>
                    </Row>

                </OfferBody>
            </Offer>
            <Row ChildrenFlexGrow mx2 flexBasis150>
                <ButtonFlat bgColor={colorTheme.warning()}>Descartar alterações</ButtonFlat>
                <ButtonFlat >Salvar</ButtonFlat>
            </Row>
        </BuyFrameContainer>
    );
}


/*  

 


*/

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
    bindActionCreators({  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(BuyFrame);
