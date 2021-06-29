
import react, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './Breadcumb.css';
import { BreadcumbList } from './styles';
import { reloadProductList } from '@actions/products';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function BreadCumbs({ reloadProductList, path, location }) {


    path = path.split("/");
    path.shift();

    let links = path.map((item, index) => {
        let newLink = path.slice(0, index + 1).join('/');
        return "/" + newLink;
    })
    path[0] = "Todos";
    var breadLis = path.map(function (cat, index) {

        return (<li key={index}><Link key={index} to={links[index]} onClick={() => { reloadProductList(links[index], location.search, 12) }}>{cat}</Link></li>);
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
    bindActionCreators({ reloadProductList }, dispatch);

export default connect(null, mapDispatchToProps)(withRouter(BreadCumbs));