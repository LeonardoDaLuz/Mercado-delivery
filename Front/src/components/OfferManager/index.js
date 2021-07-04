
import { OfferManager__ } from './style';
import { Container, ButtonFlat, Center } from '@globalStyleds';
import { useCallback, useEffect, useState } from 'react';
import { loadOffers, addOffer } from '@actions/offer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Offer } from './Offer';
import { nestedPropertySeletor } from '../../utils/nestedPropertySelector';
import { useFormik } from 'formik';
import produce from 'immer';
import { useChangeHandler } from '../../utils/inputChangeHandler';

function OfferManager_({ offers, loadOffers, addOffer }) {

    const [editedOffers, setEditedOffers] = useState([]);
    const [draftStatus, setDraftStatus]= useState('unmodified');

    useEffect(() => {
        loadOffers();
    }, []);

    useEffect(() => {
        setEditedOffers(offers);
    }, [offers]);


    const onSubmit = () => {

    }

    const changeHandler = useChangeHandler(editedOffers, setEditedOffers)

    return (
        <OfferManager__>
            <Container >
                <form onSubmit={onSubmit}>
                    <h1>Gerenciar Ofertas</h1>
                    {editedOffers.map((offer, index) => <Offer {...{ offer, index, changeHandler }} />)}
                    <Center>
                        <ButtonFlat style={{ fontSize: "20px" }} onClick={addOffer}>+ Adicionar Oferta</ButtonFlat>
                    </Center>
                    <br />
                    <Center>
                        <ButtonFlat type="submit">Salvar Alterações</ButtonFlat>
                        <ButtonFlat>Descartar Alterações</ButtonFlat>
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
    bindActionCreators({ loadOffers, addOffer }, dispatch);



export const OfferManager = connect(mapStateToProps, mapDispatchToProps)(withRouter(OfferManager_));