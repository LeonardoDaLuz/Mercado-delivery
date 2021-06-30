
import { OfferManagerContainer } from './style';
import { Container } from '@globalStyleds';
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
        <OfferManagerContainer>
            <Container >
                <h1>Gerenciar Ofertas</h1>
                {offers.map((offer)=> <Offer/>)}
            </Container>

        </OfferManagerContainer>
    );
}

const mapStateToProps = store => ({
    offers: store.offers.data
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadOffers }, dispatch);



export const OfferManager = connect(mapStateToProps, mapDispatchToProps)(withRouter(OfferManager_));;