import { OfertasDoDiaContainer } from "./styles";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { carregarImagensCarousel } from "../../../store/actions/carousel";
import { bindActionCreators } from "redux";
import { CenterContainer } from "../../../globalStyleds";
import { loadHome } from '@actions/home';
import Slider from 'react-slick';
import { ProductCard } from "./ProductCard";
import { loadMoreProducts } from '@actions/products';
import { combinePathWithQuery } from "../../../utils/combinePathWithQuery";

function ProductCarousel_({ title, produtos, path, query, loadMoreProducts }) {

    useEffect(() => {
        loadMoreProducts(path, query, 12);
    }, [])

    produtos = produtos[combinePathWithQuery(path, query)];
    produtos = produtos === undefined ? [] : produtos;

    if (produtos.length < 3)
        return <></>

    const settings = {
        dots: false,
        infinite: produtos.length < 5 ? false : true,
        slidesToShow: (produtos.length > 4 ? 5 : produtos.length),
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
    produtos: store.products
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ loadMoreProducts }, dispatch)

export const ProductCarousel = connect(mapStateToProps, mapDispatchToProps)(ProductCarousel_);