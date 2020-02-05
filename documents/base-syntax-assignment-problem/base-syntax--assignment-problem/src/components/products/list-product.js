import React, {Component} from 'react';
import Product from './product';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [
                {name: 'name product 1', price: 'contact'},
                {name: 'name product 2', price: '123'},
                {name: 'name product 3', price: '456'},
                {name: 'name product 4', price: '789'},
            ],
            isActive: true
        };
    }

    clickMe = (props) => {
        console.log(props);
    }

    onChangeWhenClick = () => {
        console.log(!this.state.isActive);
        
    };

    render() {
        let elements = this.state.products.map((product, index) => {
            // return <Product key={index} product={product} clickMe={ () => this.clickMe(product.name)} /> //c1
            return <Product key={index} product={product} clickMe={ this.clickMe.bind(this, product.name)} /> //c2
        });
        return (
            <div>
                {elements}
                <button onClick={this.onChangeWhenClick}>Button: {this.state.isActive===true ? 'true' : 'false'}</button>
            </div>
        );
    }
}

export default Products;