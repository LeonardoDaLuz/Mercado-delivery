import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Jumbotron } from './Jumbotron';


function Home_() {
    return (
    <>
        <Jumbotron />
    </>
    )
}

const mapDispatchToProps = (dispatch)=> 
    bindActionCreators({},dispatch);

const mapStateToProps = (store) => ({

});

export const Home = connect(mapStateToProps, mapDispatchToProps)(Home_);
