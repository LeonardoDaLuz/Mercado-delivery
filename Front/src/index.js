import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import easyOutline from './easyOutline';
import LoremIpsum from './LoremIpsum';
import BarraCategorias from './components/BarraCategorias';
import Sidebar from './components/Sidebar';
import Produto from './components/Produto';
import Footer from './components/Footer';

easyOutline();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root')
);


/*  <Header />
  <Sidebar tooglerId='sidebar-toogler' />
  <BarraCategorias />
  <Produto />
  <Footer />
  */

