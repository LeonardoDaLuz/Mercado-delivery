
import React, { useEffect } from 'react'
import { colorTheme } from '../../../theme';
//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//styles and animation
import { Row, Col } from '@globalStyleds';
import moveElementFromTo from '@utils/moveElementFromTo';
import { BuyFrameContainer, PriceBlock, Offer, OfferBody, ButtonIncreaseDecrease, QuantityBlock, DraftStatus } from './styles';
import { ButtonFlat } from '../../../globalStyleds';
import { filtraFloat } from '../../../utils/InputFilters';
import { LogRender } from '../../../utils/logRender';

function BuyFrame({ product, handleChanges, draftStatus }) {

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


    //computa o tempo e seus formatos
    
    let _offerStarts = new Date(product.offer.time_range.starts);
    let _offerEnds = new Date(product.offer.time_range.ends);

    if (_offerEnds.getTime() < _offerStarts.getTime())
        _offerEnds = _offerStarts;

        console.log(_offerStarts);

    let offerStartsString = convertDateToInputDateValue(_offerStarts);
    let offerEndsString = convertDateToInputDateValue(_offerEnds);



    return (
        <BuyFrameContainer>
            <textarea type='text' name='title' value={product.title} onChange={handleChanges} >Titulo...</textarea>
            <Row>
                <QuantityBlock>
                    <label>Estoque:</label>
                    <Row>
                        <ButtonIncreaseDecrease>-</ButtonIncreaseDecrease>
                        <input className="form-control text-center" name="stock" value={product.stock} onChange={handleChanges} />
                        <ButtonIncreaseDecrease>+</ButtonIncreaseDecrease>
                    </Row>
                </QuantityBlock>
                <PriceBlock>
                    <label>Preço:</label>
                    <input type='text' name="price" value={product.price} onChange={filterAndChangePrice} />
                </PriceBlock>
            </Row>
            <Offer>
                <label>Oferta:</label>
                <OfferBody>
                    <div>
                        <label htmlFor="inicio">Início</label>
                        <input type="date" name='offer.time_range.starts' value={offerStartsString} onChange={handleChanges} />
                    </div>
                    <div>
                        <label htmlFor="fim">Fim</label>
                        <input type="date" name='offer.time_range.ends' value={offerEndsString} onChange={handleChanges} />
                    </div>
                    <div>
                        <label htmlFor="novoValor">Valor na oferta</label>
                        <input type="text" name='offer.off_price' value={product.offer.off_price} onChange={filterAndChangePrice} />
                    </div>
                    <div>
                        <label htmlFor="offerType">Tipo</label>
                        <select name='offer.type' value={product.offer.type} onChange={handleChanges} >
                            <option value='day'>Dia</option>
                            <option value='week'>Semana</option>
                            <option value='month'>Mês</option>
                        </select>
                    </div>
                    <Row style={{ flexBasis: '300px' }}>
                        <ButtonFlat
                            bgColor={colorTheme.secondary()}
                            name='offer.enabled'
                            value={true}
                            onClick={handleChanges}
                            disabled={product.offer.enabled == 'true'}>
                            Ativar oferta
                        </ButtonFlat>
                        <ButtonFlat
                            bgColor={colorTheme.secondary()}
                            name='offer.enabled'
                            value={false}
                            onClick={handleChanges}
                            disabled={product.offer.enabled == 'false'}>
                            Desativar oferta</ButtonFlat>
                    </Row>

                </OfferBody>
            </Offer>
            <Row ChildrenFlexGrow mx2 flexBasis150>
                <ButtonFlat bgColor={colorTheme.warning()}>Descartar alterações</ButtonFlat>
                <ButtonFlat disabled={draftStatus !== 'modified'} type='submit' >Salvar</ButtonFlat>
            </Row>
            <SaveStatus draftStatus={draftStatus} />
        </BuyFrameContainer >
    );
}

function SaveStatus({ draftStatus }) {
    switch (draftStatus) {
        case 'Saved':
            return <DraftStatus style={{ color: 'lime' }}>Salvo!</DraftStatus>
        case 'Saving...':
            return <DraftStatus>Salvando...</DraftStatus>
        default:
            return <></>
    }
}

function convertDateToInputDateValue(date) {
    var currentDate = date.toISOString().substring(0, 10);
    return currentDate;
}

const mapStateToProps = store => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(BuyFrame);
