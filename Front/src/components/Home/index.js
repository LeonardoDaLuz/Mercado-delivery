import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Caroulsel } from './Carousel';


function Home_() {
    return (
    <>
        <Caroulsel />
    </>
    )
}

const mapDispatchToProps = (dispatch)=> 
    bindActionCreators({},dispatch);

const mapStateToProps = (store) => ({

});

export const Home = connect(mapStateToProps, mapDispatchToProps)(Home_);
