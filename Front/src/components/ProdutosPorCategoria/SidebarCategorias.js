import react, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    withRouter
} from "react-router-dom";
import Breadcumb from "./Breadcumb";


export default withRouter(class SidebarCategorias extends Component {

    render() {
        let isRoot = this.props.match.params.cat1 === undefined;
        let categoriaSelecionada = this.selecionaSubcategoria(this.props.loja.state.categorias);
        let CategoriaLista = this.obtemListaAPartirDaCategoria(categoriaSelecionada);
        let caminhoAcima = this.caminho().caminhoAcima;
        console.log("teste");
        return (
            <aside className="categorias col-3">
                {!isRoot &&
                    <Breadcumb path={caminhoAcima} loja={this.props.loja} />
                }
                <h3>{this.caminho().ultimaCategoria}</h3>
                {CategoriaLista}
                <FaixaDePreco loja={this.props.loja} />
            </aside>
        )
    }

    componentDidMount() {
        this.props.loja.carregaCategorias();
    }

    obtemListaAPartirDaCategoria(objeto) {

        let path = this.props.location.pathname;
        if (path[path.length - 1] != '/')
            path += '/';

        let loja = this.props.loja;
        let keys = Object.keys(objeto);
        let resultado = keys.map(function (key, index) {

            let id = key;
            let link = <Link to={path + key} onClick={() => { loja.reiniciaListaDeProdutos(path + key, 12) }}>{key}</Link>;
            return <li>{link}</li>;
        });



        return keys.length == 0 ? <></> : <ul className="lista">{resultado}</ul>;
    }

    selecionaSubcategoria(categorias) {
        let path = this.props.match.params;
        let newCategorias = categorias;

        for (let key in path) {
            if (path[key] !== undefined && newCategorias[path[key]] !== undefined) {
                newCategorias = newCategorias[path[key]];
            } else {
                break;
            }
        }
        return newCategorias;
    }

    caminho() {
        let path = this.props.location.pathname;
        let splitedPath = path.split('/');
        //splitedPath.pop();
        let ultimaCategoria = splitedPath.pop();

        ultimaCategoria = ultimaCategoria == "produtos" ? "Todos" : ultimaCategoria;

        return {
            ultimaCategoria,
            caminhoAcima: splitedPath.join('/')
        }
    }
})

let FaixaDePreco = withRouter((props)=> {
/*
    let search = new URLSearchParams(props.location.search);
    let min = search.get('minPrice');
    let max = search.get('maxPrice');

    let s = search.toString()*/

    function updateSearch(e) {

    }

    function reinicia(e) {
        e.preventDefault(); props.loja.reiniciaListaDeProdutos();
    }
    return (<>
        <h4>Preço</h4>
        <form className="faixa-de-preco" onSubmit={reinicia}>
            <input name="minPrice" type="text" className="" placeholder="Mínimo" value={props.loja.state.seletorListaDeProdutos.faixaPreco.min} onChange={props.loja.updateFaixaPreco().min}/>-
            <input type="text" className="" placeholder="Máximo" value={props.loja.state.seletorListaDeProdutos.faixaPreco.max} onChange={props.loja.updateFaixaPreco().max}/>
            <button type="submit">Ir</button>
        </form>
    </>)
});