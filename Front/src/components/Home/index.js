import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { OfertasDoDiaContainer } from './styles';
import { OfertasDoDia } from './OfertasDoDia';
import { Caroulsel } from './Carousel';

function Home_() {
    return ( 
        <>
            <Caroulsel />
            <OfertasDoDia />
        </>
    )
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({}, dispatch);

const mapStateToProps = (store) => ({

});

export const Home = connect(mapStateToProps, mapDispatchToProps)(Home_);
