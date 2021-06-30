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
import Product from './components/Product';
import SearchProducts from './components/SearchProducts';
import Footer from './components/Footer';
import { CategoryManager } from './components/CategoryManager';
import { Home } from "./components/Home";
import { CarouselManager } from "./components/CarouselManager";
import { OfferManager } from './components/OfferManager';
//Admin Components
import EditProduct from './components/EditProduct';

//styles
import "normalize.css";
//import "../node_modules/bootstrap/scss/bootstrap.scss";
import { GlobalStyle, FlexColumn } from "./globalStyleds";

import "./utils/fetchDelay";

export default withRouter(class App extends Component {

  render() {
    return (
      <Router>
        <GlobalStyle />
        <FlexColumn>
          <Header />
          <Sidebar tooglerId='sidebar-toogler' />
          <BarraCategorias />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/product/:id" >
              <Product />
            </Route>
            <Route exact path="/editProduct/:id" >
              <EditProduct />
            </Route>
            <Route path="/SearchProducts/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/" >
              <SearchProducts />
            </Route>
            <Route path="/CategoryManager" >
              <CategoryManager />
            </Route>
            <Route path="/CarouselManager" >
              <CarouselManager />
            </Route>
            <Route path="/OfferManager" >
              <OfferManager />
            </Route>
          </Switch>
          <Footer />
        </FlexColumn>
      </Router >
    );
  }
})

