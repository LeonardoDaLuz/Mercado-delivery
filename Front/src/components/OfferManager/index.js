
import { OfferManager__ } from './style';
import { Container, ButtonFlat, Center } from '@globalStyleds';
import { useEffect } from 'react';
import { loadOffers } from '@actions/offer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Offer } from './Offer';

function OfferManager_({ offers, loadOffers }) {

    console.log(offers);
    useEffect(() => {
        loadOffers();
    }, []);
    return (
        <OfferManager__>
            <Container >
                <h1>Gerenciar Ofertas</h1>
                {offers.map((offer)=> <Offer/>)}
                <Center><ButtonFlat>Adicionar Oferta</ButtonFlat></Center>
            </Container>
        </OfferManager__>
    );
}

const mapStateToProps = store => ({
    offers: store.offers.data
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadOffers }, dispatch);



export const OfferManager = connect(mapStateToProps, mapDispatchToProps)(withRouter(OfferManager_));