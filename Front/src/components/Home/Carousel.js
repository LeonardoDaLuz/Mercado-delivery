import { CarrouselContainer, SlideFoto } from "./styles";
import React, { useEffect, useRef } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { connect } from "react-redux";
import { carregarImagensCarousel } from "../../store/actions/carousel";
import { bindActionCreators } from "redux";

function Caroulsel_({carousel, carregarImagensCarousel}) {

    useEffect(() => {
        carregarImagensCarousel();
    }, [])


    console.log(carousel);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        variableWidth: false
    }

    let slideFotos = carousel.images.map(image=> <SlideFoto><img src={"http://localhost:3001/"+image.path}/></SlideFoto>)
    return (

        <Slider {...settings} style={{ width: '100%' }}>
            {slideFotos}
        </Slider>
    )
}


const mapStateToProps = (store) => ({
    carousel: store.carousel
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({carregarImagensCarousel}, dispatch)

export const Caroulsel = connect(mapStateToProps, mapDispatchToProps)(Caroulsel_);