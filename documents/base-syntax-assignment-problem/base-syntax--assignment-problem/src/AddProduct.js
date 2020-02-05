import React, { Component } from 'react';
import './App.css';
import AddProductComponent from './components/add-product/add';

class AddProduct extends Component {
  render() {
    return (
      <div className="App">
        <AddProductComponent />
      </div>
    );
  }
}

export default AddProduct;
