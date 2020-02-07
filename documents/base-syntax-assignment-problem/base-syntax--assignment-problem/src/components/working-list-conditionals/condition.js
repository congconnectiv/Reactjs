import React, {Component} from 'react';
// import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import Product from './product';

const ConditionProduct = styled.div`
    border: 1px solid #ccc;
    background-color: #e8e8e8;
    margin: 2em;
    padding: 1em;
`;

class Condition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [
                {id: 1, name: 'Product 1', price: 600, status: true},
                {id: 2, name: 'Product 2', price: 50, status: true},
                {id: 3, name: 'Product 3', price: 0, status: true},
                {id: 4, name: 'Product 4', price: 200, status: false},
                {id: 5, name: 'Product 5', price: 300, status: true},
                {id: 6, name: 'Product 6', price: 0, status: true},
                {id: 7, name: 'Product 7', price: 500, status: false},
                {id: 8, name: 'Product 8', price: 0, status: true}
            ],
            isToggle: false
        };
    } 
    
    toggleProductHandle = () => {
        const toggle = this.state.isToggle;
        this.setState({isToggle: !toggle});
    }

    onDeleteProduct = (productIndex) => {
        const product = this.state.products;
        product.splice(productIndex, 1);
        this.setState({products: product});
    }

    render() {

        // const style = {
        //     border: '1px solid #ccc',
        //     backgroundColor:'#e8e8e8',
        //     margin: '2em',
        //     padding: '1em'
        // }
        
        let productItem = this.state.products.map((product, index) => {
            const content = <ConditionProduct key={product.id}>
                                <button onClick={this.onDeleteProduct.bind(this,index)} >Delete Product</button>
                                <Product product={product} />
                            </ConditionProduct>
            return (product.status===true) ? content : null;
        });

        return (
            <div className="condition-product">
                <h2>Just click button to diplay content!</h2>
                <button onClick={this.toggleProductHandle}>Toggle Products</button>
                {
                    this.state.isToggle === true ? productItem : null
                }
            </div>
        );
    }
}

export default Condition;
// export default Radium(Condition);