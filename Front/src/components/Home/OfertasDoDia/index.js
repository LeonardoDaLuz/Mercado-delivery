import { OfertasDoDiaContainer } from "../styles";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { carregarImagensCarousel } from "../../../store/actions/carousel";
import { bindActionCreators } from "redux";
import { CenterContainer } from "../../../globalStyleds";
import { loadHome } from '@actions/home';
import Slider from 'react-slick';
import { ProductCard } from "./ProductCard";

function OfertasDoDia_({ home, loadHome }) {

    useEffect(() => {
        loadHome();
    }, [])


    return (

        <OfertasDoDiaContainer>
            <h2>Ofertas do Dia</h2>
            asd
            {home.offerDay.map(item =>
                <ProductCard product={item} />
            )}
        </OfertasDoDiaContainer>
    )
}




const mapStateToProps = (store) => ({
    home: store.home
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ loadHome }, dispatch)

export const OfertasDoDia = connect(mapStateToProps, mapDispatchToProps)(OfertasDoDia_);