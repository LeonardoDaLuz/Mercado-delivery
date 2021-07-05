
import { OfferManager__ } from './style';
import { Container, ButtonFlat, Center } from '@globalStyleds';
import { useCallback, useEffect, useRef, useState } from 'react';
import { loadOffers, saveOffers } from '@actions/offer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Offer } from './Offer';
import { useChangeHandler } from '../../utils/inputChangeHandler';

function OfferManager_({ offers, loadOffers, saveOffers }) {

    const [editedOffers, setEditedOffers] = useState(offers);

    useEffect(() => {
        loadOffers();
    }, []);

    useEffect(() => {
        setEditedOffers(offers);
    }, [offers])

    const allFormiksValuesRef = useRef([]);

    return (
        <OfferManager__>
            <Container >
                <form>
                    <h1>Gerenciar Ofertas</h1>
                    {editedOffers.map((offer, index) => <Offer key={index} {...{ index, offer, allFormiksValuesRef }} />)}
                    <Center>
                        <ButtonFlat style={{ fontSize: "20px" }} onClick={() => setEditedOffers([...editedOffers, {}],)}>+ Adicionar Oferta</ButtonFlat>
                    </Center>
                    <br />
                    <Center>
                        <ButtonFlat disabled={false} onClick={() => saveOffers(allFormiksValuesRef.current)}>Salvar Alterações 3</ButtonFlat>
                        <ButtonFlat disabled={false}>Descartar Alterações</ButtonFlat>
                        <ButtonFlat>is valid</ButtonFlat>
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