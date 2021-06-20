import { OfertasDoDiaContainer } from "./styles";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { carregarImagensCarousel } from "../../../store/actions/carousel";
import { bindActionCreators } from "redux";
import { CenterContainer } from "../../../globalStyleds";
import { loadHome } from '@actions/home';
import Slider from 'react-slick';
import { ProductCard } from "./ProductCard";
import { carregaMaisProdutos } from '@actions/produtos';
import { combinePathWithQuery } from "../../../utils/combinePathWithQuery";

function OfertasDoDia_({ title, produtos, path, query, carregaMaisProdutos }) {

    useEffect(() => {
        carregaMaisProdutos(path, query, 12);
    }, [])

    produtos = produtos[combinePathWithQuery(path, query)];
    produtos = produtos === undefined ? [] : produtos;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        variableWidth: false,
        autoplay: false,
        adaptativeHeight: false,
        pauseOnHover: true,

    }

    return (

        <OfertasDoDiaContainer>
            <h2>{title}</h2>
            <Slider {...settings}>
                {produtos.map(product =>
                    <ProductCard product={product} />
                )}
            </Slider>
        </OfertasDoDiaContainer>
    )
}




const mapStateToProps = (store) => ({
    produtos: store.produtos
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ carregaMaisProdutos }, dispatch)

export const OfertasDoDia = connect(mapStateToProps, mapDispatchToProps)(OfertasDoDia_);