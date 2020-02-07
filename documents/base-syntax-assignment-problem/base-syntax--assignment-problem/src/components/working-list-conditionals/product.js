import React, {Component} from 'react';
// import Radium from 'radium';
import styled from 'styled-components';

// Chi dinh mot TenStyle dai dien cho mot the (tag) ==> <StyleProduct>...</StyleProduct>
const StyleProduct = styled.div`
    border: 1px solid #ccc;
    background-color: #e8e8e8;
    margin: 2em;
    padding: 1em;

    &:hover {
        border-color: #f00;
        background-color: #fff;
    }
    @media (max-width: 500px){
        background-color: yellow;
    }
`;
class Product extends Component {
    filterPriceCondition = (props) => props > 0 ? props : 'Contact';
    addToCard = (props) => {
        console.log(props);
        
    }

    render() {
        //c1: use Radium to style inner element
        // const styleProduct = {
        //     border: '1px solid #ccc',
        //     backgroundColor:'#e8e8e8',
        //     margin: '2em',
        //     padding: '1em',
        //     '@media (max-width: 500px)': {
        //         backgroundColor: 'yellow'
        //     }
        // }

        return(
            // <StyleProduct className="productItem" style={styleProduct}>
            <StyleProduct>
                <h2>Name: {this.props.product.name}</h2>   
                <p>Price: {this.filterPriceCondition(this.props.product.price)}</p>   
                <button
                    onClick={this.addToCard.bind(this, this.props.product.name)}
                >Add To Card</button>
            </StyleProduct>
        );
    }
}

export default Product;
// export default Radium(Product);