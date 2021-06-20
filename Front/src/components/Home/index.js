import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductCarousel } from './ProductCarousel';
import { Caroulsel } from './Carousel';

function Home_() {
    return ( 
        <>
            <Caroulsel />
            <ProductCarousel title='Bebidas' path='/produtos/Bebidas' query=''/><br />
            <ProductCarousel title='Ofertas do Dia' path='/produtos/Alimentos/Doces%20e%20sobremesas' query=''/>
        </>
    )
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({}, dispatch);

const mapStateToProps = (store) => ({

});

export const Home = connect(mapStateToProps, mapDispatchToProps)(Home_);
