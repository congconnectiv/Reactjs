import React, {Component} from 'react';

class Product extends Component {
    filterPriceCondition = (props) => props > 0 ? props : 'Contact';
    addToCard = (props) => {
        console.log(props);
        
    }

    render() {
        return(
            <div className="product-item">
                <h2>Name: {this.props.product.name}</h2>   
                <p>Price: {this.filterPriceCondition(this.props.product.price)}</p>   
                <button
                    onClick={this.addToCard.bind(this, this.props.product.name)}
                >Add To Card</button>
            </div>
        );
    }

    style = () => {

    }
}

export default Product;