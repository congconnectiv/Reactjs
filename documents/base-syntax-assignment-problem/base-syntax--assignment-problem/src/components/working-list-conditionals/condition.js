import React, {Component} from 'react';
import Product from './product';

class Condition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [
                {name: 'Product 1', price: 600, status: true},
                {name: 'Product 2', price: 50, status: true},
                {name: 'Product 3', price: 0, status: true},
                {name: 'Product 3', price: 0, status: false}
            ]
        };
    } 
    
    render() {
        let productItem = this.state.products.map((product, index) => {
            return product.status ? <Product key={index} product={product} /> : null
        });

        return (
            <div className="condition-product">
                {productItem}
            </div>
        );
    }
}

export default Condition;