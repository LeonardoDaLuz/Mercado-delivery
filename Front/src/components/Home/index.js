import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { OfertasDoDia } from './OfertasDoDia';
import { Caroulsel } from './Carousel';

function Home_() {
    return ( 
        <>
            <Caroulsel />
            <OfertasDoDia title='Bebidas' path='/produtos/Bebidas' query=''/><br />
            <OfertasDoDia title='Ofertas do Dia' path='/produtos/Alimentos/Doces%20e%20sobremesas' query=''/>
        </>
    )
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({}, dispatch);

const mapStateToProps = (store) => ({

});

export const Home = connect(mapStateToProps, mapDispatchToProps)(Home_);
