
import react, { Component } from 'react';
import { Link } from "react-router-dom";
import './Breadcumb.css';
import { BreadcumbList } from './styles';
import { reiniciaListaDeProdutos } from '../../store/actions/produtos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function BreadCumbs({ reiniciaListaDeProdutos, path }) {


    path = path.split("/");
    path.shift();

    let links = path.map((item, index) => {
        let newLink = path.slice(0, index + 1).join('/');
        return "/" + newLink;
    })
    path[0] = "Todos";
    var breadLis = path.map(function (cat, index) {

        return (<li><Link key={index} to={links[index]} onClick={() => { reiniciaListaDeProdutos(links[index], 12) }}>{cat}</Link></li>);
    });

    return (
        <BreadcumbList>
            <ul>
                {breadLis}
            </ul>
        </BreadcumbList>
    )
}


const mapDispatchToProps = dispatch =>
    bindActionCreators({ reiniciaListaDeProdutos }, dispatch);

export default connect(null, mapDispatchToProps)(BreadCumbs);