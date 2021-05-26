import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ButtonFlat, CenterContainer } from '../../globalStyleds';
import { DeleteImage, GerenciarImagensCarousel, ImgCardLi, LoadIndicator } from './styles';
import { carregarImagensCarousel, uploadImagensCarousel, removeImageCarousel } from '@actions/carousel'
import configs from "@configs";

function CarouselManager_({ carousel, carregarImagensCarousel, uploadImagensCarousel, removeImageCarousel }) {

    useEffect(() => {
        carregarImagensCarousel();
    }, [])

    function openFileSelectDialog(e, callback) {
        var elemento = document.createElement("input");
        elemento.type = "file";
        elemento.setAttribute('multiple', "");
        elemento.onchange = callback;
        elemento.click();
    }

    function filesUpload(e) {

        uploadImagensCarousel(e);

    }

    //<input type="file" name="files" accept=".jpg,.jpeg,.png"multiple onChange={handleInput} />
    //{configs.imgsPath + produto.img}
    return (
        <CenterContainer>
            
            <GerenciarImagensCarousel>
                <ImageCardList images={carousel.images} removeImage={removeImageCarousel} />
                {carousel.status === "loading" &&
                    <LoadIndicator />
                }
                <ButtonFlat style={{ margin: "10px auto", display: "block" }} onClick={(e) => openFileSelectDialog(e, filesUpload)}>Adicionar imagem</ButtonFlat>

            </GerenciarImagensCarousel>
        </CenterContainer>
    )
}

function ImageCardList({ images, removeImage }) {

    let imageCards = images.map(image => (<ImagemCard key={image._id} image={image} removeImage={removeImage}></ImagemCard>))

    return (
        <ul>
            {imageCards}
        </ul>
    );
}

function ImagemCard({ image, removeImage }) {
    return (
        <ImgCardLi waiting={image.status=='deleting'}>
            <img src={configs.imgsPath + image.path} />
            <DeleteImage onClick={(e) => { removeImage(image._id) }}></DeleteImage>

        </ImgCardLi>
    );
}
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ carregarImagensCarousel, uploadImagensCarousel, removeImageCarousel }, dispatch);

const mapStateToProps = (store) => ({
    carousel: store.carousel
});

export const CarouselManager = connect(mapStateToProps, mapDispatchToProps)(CarouselManager_);
