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
                {name: 'Product 4', price: 200, status: false},
                {name: 'Product 5', price: 300, status: true},
                {name: 'Product 6', price: 0, status: true},
                {name: 'Product 7', price: 500, status: false},
                {name: 'Product 8', price: 0, status: true}
            ],
            isToggle: false
        };
    } 
    
    toggleProductHandle = () => {
        const toggle = this.state.isToggle;
        this.setState({isToggle: !toggle});
    }

    render() {
        let productItem = this.state.products.map((product, index) => {
            return product.status ? <Product key={index} product={product} /> : null
        });

        return (
            <div className="condition-product">
                <h2>Just click button to diplay content!</h2>
                <button onClick={this.toggleProductHandle}>Toggle Products</button>
                {
                    this.state.isToggle === true ?
                    productItem : null
                }
            </div>
        );
    }
}

export default Condition;