import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import P1 from './ProductCard/ProductCard';
import PList from './ProductList/ProductList'

ReactDOM.render(
  //<App />,
  <PList/>,
  document.getElementById('root')
);
