
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
import { filtraFloat } from '../../../utils/InputFilters';
import { LogRender } from '../../../utils/logRender';

function BuyFrame({ product, handleChanges }) {

    function filterAndChangePrice(e) {
        let { name, value } = e.target;

        value = value.replace(/^,|[^0-9.,]/g, '');


        var t = 0;
        value = value.replaceAll(',', function (match) { //remove apenas a segunda ocorrência de virgula
            t++;
            return (t === 2) ? '' : match;
        });

        value = value.replace('.', ',');

        handleChanges({ target: { value, name } });
        console.log(value);
    }

    //LogRender({ product }, "BuyFrame");

    return (
        <BuyFrameContainer>
            <textarea type='text' name='titulo' value={product.titulo} onChange={handleChanges} >Titulo...</textarea>
            <Row>
                <QuantityBlock>
                    <label>Estoque:</label>
                    <Row>
                        <ButtonIncreaseDecrease>-</ButtonIncreaseDecrease>
                        <input className="form-control text-center"  />
                        <ButtonIncreaseDecrease>+</ButtonIncreaseDecrease>
                    </Row>
                </QuantityBlock>
                <PriceBlock>
                    <label>Preço:</label>
                    <input id="preco"/>
                </PriceBlock>
            </Row>
            <Offer>
                <label>Oferta:</label>
                <OfferBody>
                    <div>
                        <label htmlFor="inicio">Início</label>
                        <input type="date" id='inicio'  />
                    </div>
                    <div>
                        <label htmlFor="fim">Fim</label>
                        <input type="date" id='fim'  />
                    </div>
                    <div>
                        <label htmlFor="novoValor">Valor na oferta</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="offerType">Tipo</label>
                        <select>
                            <option value='day'>Dia</option>
                            <option value='week'>semana</option>
                            <option value='month'>Mês</option>
                        </select>
                    </div>
                    <Row style={{ flexBasis: '300px' }}>
                        <ButtonFlat bgColor={colorTheme.secondary()}>Ativar oferta</ButtonFlat>
                        <ButtonFlat bgColor={colorTheme.secondary()} disabled={true}>Desativar oferta</ButtonFlat>
                    </Row>

                </OfferBody>
            </Offer>
            <Row ChildrenFlexGrow mx2 flexBasis150>
                <ButtonFlat bgColor={colorTheme.warning()}>Descartar alterações</ButtonFlat>
                <ButtonFlat type='submit' >Salvar</ButtonFlat>
            </Row>
        </BuyFrameContainer>
    );
}




const mapStateToProps = store => ({
    produto: store.produto,
    carrinho: store.carrinho
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(BuyFrame);
