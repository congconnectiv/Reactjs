import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import UserData from './UserData';
import ProductList from './Product-app';
// import AddProduct from './AddProduct';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<UserData />, document.getElementById('root'));
ReactDOM.render(<ProductList />, document.getElementById('root'));
// ReactDOM.render(<AddProduct />, document.getElementById('root'));
registerServiceWorker();
