import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductCarousel } from './ProductCarousel';
import { Caroulsel } from './Carousel';

function Home_() {
    return ( 
        <>
            <Caroulsel />
            <ProductCarousel title='Ofertas do Dia' path='/SearchProducts/' query='offer=day'/><br />
            <ProductCarousel title='Ofertas da Semana' path='/SearchProducts/' query='offer=week'/><br />
            <ProductCarousel title='Ofertas do Mês' path='/SearchProducts/' query='offer=month'/><br />
      
        </>
    )
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({}, dispatch);

const mapStateToProps = (store) => ({

});

export const Home = connect(mapStateToProps, mapDispatchToProps)(Home_);
