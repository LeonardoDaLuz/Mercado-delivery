
import { OfferManager__ } from './style';
import { Container, ButtonFlat, Center } from '@globalStyleds';
import { useCallback, useEffect, useState } from 'react';
import { loadOffers, saveOffers } from '@actions/offer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Offer } from './Offer';
import { useChangeHandler } from '../../utils/inputChangeHandler';

function OfferManager_({ offers, loadOffers, saveOffers }) {

    useEffect(() => {
        loadOffers();
    }, []);


    const changeHandler = useChangeHandler(offers)
    return (
        <OfferManager__>
            <Container >
                <form>
                    <h1>Gerenciar Ofertas</h1>
                    {changeHandler.getDraftStatus()}
                    {changeHandler.state.map((offer, index) => <Offer key={index} {...{ index, changeHandler }} />)}
                    <Center>
                        <ButtonFlat style={{ fontSize: "20px" }} onClick={() => changeHandler.setState([...changeHandler.state, {}])}>+ Adicionar Oferta</ButtonFlat>
                    </Center>
                    <br />
                    <Center>
                        <ButtonFlat disabled={changeHandler.getDraftStatus()==='unchanged'} onClick={() => saveOffers(changeHandler.state)}>Salvar Alterações 3</ButtonFlat>
                        <ButtonFlat disabled={changeHandler.getDraftStatus()==='unchanged'} onClick={() => changeHandler.discardChanges()}>Descartar Alterações</ButtonFlat>
                    </Center>
                </form>
            </Container>
        </OfferManager__>
    );
}

const mapStateToProps = store => ({
    offers: store.offers.data
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadOffers, saveOffers }, dispatch);



export const OfferManager = connect(mapStateToProps, mapDispatchToProps)(withRouter(OfferManager_));