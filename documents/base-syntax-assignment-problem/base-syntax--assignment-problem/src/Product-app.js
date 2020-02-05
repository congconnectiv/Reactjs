import React, { Component } from 'react';
import './App.css';
import Products from './components/products/list-product';

class ProductList extends Component {
  render() {
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default ProductList;
