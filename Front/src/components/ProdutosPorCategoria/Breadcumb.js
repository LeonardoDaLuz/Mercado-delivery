
import react, { Component } from 'react';
import { Link } from "react-router-dom";
import './Breadcumb.css';
import { BreadcumbList } from './styles';

export default function BreadCumbs(props) {

    let path = props.path.split("/");
    path.shift();
    
    let links = path.map((item, index)=> {
        let newLink = path.slice(0, index+1).join('/');
        return "/"+newLink;
    })
    path[0] = "Todos";
    var breadLis = path.map(function (cat, index) {
        
        return (<li><Link key={index} to={links[index]} onClick={() => { props.loja.reiniciaListaDeProdutos(links[index], 12) }}>{cat}</Link></li>);
    });

    return (
        <BreadcumbList>
            <ul>
                {breadLis}
            </ul>
        </BreadcumbList>
    )
}