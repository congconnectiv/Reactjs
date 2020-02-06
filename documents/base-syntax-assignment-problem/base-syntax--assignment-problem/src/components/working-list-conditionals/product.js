import React, {Component} from 'react';

class Product extends Component {
    filterPriceCondition = (props) => props > 0 ? props : 'Contact';
    render() {
        return(
            <div className="product-item">
                <h2>Name: {this.props.product.name}</h2>   
                <p>Price: {this.filterPriceCondition(this.props.product.price)}</p>   
            </div>
        );
    }
}

export default Product;