import { OfertasDoDiaContainer } from "../styles";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { carregarImagensCarousel } from "../../../store/actions/carousel";
import { bindActionCreators } from "redux";
import { CenterContainer } from "../../../globalStyleds";

function OfertasDoDia_({carousel, carregarImagensCarousel}) {

    useEffect(() => {
        //carregarImagensCarousel();
    }, [])


    return (

        <OfertasDoDiaContainer>
            <h2>Ofertas do Dia</h2>
            
        </OfertasDoDiaContainer>
    )
}


const mapStateToProps = (store) => ({
    carousel: store.carousel
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({carregarImagensCarousel}, dispatch)

export const OfertasDoDia = connect(mapStateToProps, mapDispatchToProps)(OfertasDoDia_);