import react, { Component, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    withRouter,
    useHistory
} from "react-router-dom";
import { Input } from '../../globalStyleds';
import { carregaCategorias } from '../../store/actions/categorias';
import Breadcumb from "./Breadcumb";
import { CategoriasAside, FaixaDePrecoForm } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reiniciaListaDeProdutos } from '../../store/actions/produtos';
import { filtraFloat } from '../../utils/InputFilters';
import { FaixaDePreco } from './FaixaDePreco';
import { Ordem } from './Ordem';

function SidebarCategorias({ carregaCategorias, reiniciaListaDeProdutos, categorias, loja, location, match, }) {

    useEffect(() => {
        carregaCategorias();
    }, [])

    function DrawListaAPartirDaCategoria(objeto) {

        let path = location.pathname;
        if (path[path.length - 1] != '/')
            path += '/';

        let keys = Object.keys(objeto);
        let resultado = keys.map((key, index) => {

            let id = key;
            let link = <Link to={path + key + location.search} onClick={() => { reiniciaListaDeProdutos(path + key, location.search, 12) }}>{key}</Link>;
            return <li key={key}>{link}</li>;
        });



        return keys.length == 0 ? <></> : <ul className="lista">{resultado}</ul>;
    }

    function selecionaSubcategoria(categorias) {
        let path = match.params;
        let categoriaCursor = categorias;

        for (let key in path) {
            if (path[key] !== undefined && categoriaCursor[path[key]] !== undefined) {
                categoriaCursor = categoriaCursor[path[key]];
            } else {
                break;
            }
        }
        return categoriaCursor;
    }

    function caminho() {
        let path = location.pathname;
        let splitedPath = path.split('/');
        //splitedPath.pop();
        let ultimaCategoria = splitedPath.pop();

        ultimaCategoria = ultimaCategoria == "produtos" ? "Todos" : ultimaCategoria;

        return {
            ultimaCategoria,
            caminhoAcima: splitedPath.join('/')
        }
    }

    let isRoot = match.params.cat1 === undefined;
    let categoriaSelecionada = selecionaSubcategoria(categorias);

    return (
        <CategoriasAside>
            {!isRoot &&
                <Breadcumb path={caminho().caminhoAcima} loja={loja} />
            }
            <h3>{caminho().ultimaCategoria}</h3>
            {DrawListaAPartirDaCategoria(categoriaSelecionada)}
            <FaixaDePreco loja={loja} />
            <Ordem/>
        </CategoriasAside>
    )



}

const mapStateToProps = store => ({
    categorias: store.categorias,

})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ carregaCategorias, reiniciaListaDeProdutos }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SidebarCategorias));

