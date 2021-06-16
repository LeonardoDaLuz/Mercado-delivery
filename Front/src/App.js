import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";


import Header from './components/Header';
import BarraCategorias from './components/BarraCategorias';
import Sidebar from './components/Sidebar';
import Produto from './components/Produto';
import Produtos from './components/Produtos';
import ProdutosPorCategoria from './components/ProdutosPorCategoria';
import Footer from './components/Footer';
import Loja from './classes/Loja';
import { Home } from "./components/Home";
import { CarouselManager } from "./components/CarouselManager";

//Admin Components
import EditProduct from './components/EditProduct';

//styles
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { GlobalStyle } from "./globalStyleds";

import "./utils/fetchDelay";

export default withRouter(class App extends Component {

  render() {
    return (
      <Router>
        <GlobalStyle />
        <div>
          <Header loja={this.loja} />
          <Sidebar tooglerId='sidebar-toogler' />
          <BarraCategorias />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/CarouselManager" >
              <CarouselManager />
            </Route>
            <Route exact path="/produto2/:id" >
              <Produto loja={this.loja} />
            </Route>
            <Route exact path="/product/:id" >
              <Produto/>
            </Route>
            <Route exact path="/editProduct/:id" >
              <EditProduct />
            </Route>
            <Route exact path="/produtos/all" >
              <Produtos loja={this.loja} />
            </Route>
            <Route path="/produtos/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/" >
              <ProdutosPorCategoria loja={this.loja} />
            </Route>

          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
})

