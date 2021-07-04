
import { OfferManager__ } from './style';
import { Container, ButtonFlat, Center } from '@globalStyleds';
import { useEffect, useState } from 'react';
import { loadOffers, addOffer } from '@actions/offer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Offer } from './Offer';
import { nestedPropertySeletor } from '../../utils/nestedPropertySelector';
import { useFormik } from 'formik';

function OfferManager_({ offers, loadOffers, addOffer }) {

    const [editedOffers, setEditedOffers] = useState([]);

    const formik = useFormik({
        initialValues: offers,
        enableReinitialize: true,
        onSubmit: values => {
            console.log(values);
        }
    })

    useEffect(() => {
        loadOffers();
    }, []);

    useEffect(() => {
        setEditedOffers(offers);
        formik.setValues(offers);
    }, [offers]);

    //const handleChange= ()
    console.log("formik.values", formik.values);

    return (
        <OfferManager__>
            <Container >
                <form onSubmit={formik.handleSubmit}>
                    <h1>Gerenciar Ofertas</h1>
                    {formik.values.map((offer, index) => <Offer {...{ key: index, formik, offer, index }} />)}
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