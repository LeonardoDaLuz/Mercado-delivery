import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductCarousel } from './ProductCarousel';
import { Caroulsel } from './Carousel';

function Home_() {
    return ( 
        <>
            <Caroulsel />
            <ProductCarousel title='Ofertas do Dia' path='/produtos/' query='offer=day'/><br />
            <ProductCarousel title='Ofertas do Dia' path='/produtos/' query='offer=week'/><br />
      
        </>
    )
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({}, dispatch);

const mapStateToProps = (store) => ({

});

export const Home = connect(mapStateToProps, mapDispatchToProps)(Home_);
