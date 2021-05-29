import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import './App.css';
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

export default withRouter(class App extends Component {

  constructor() {
    super();
    this.loja = new Loja(this);
  }

  render() {

    return (
      <Router>
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
            <Route exact path="/produto/:id" >
              <Produto loja={this.loja} />
            </Route>
            <Route exact path="/produto2/:id" >
              <Produto loja={this.loja} />
            </Route>
            <Route exact path="/editProduct/:id" >
              <EditProduct loja={this.loja} />
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

  /* <button onClick={this.log.bind(this)}>kjj</button> */
})

