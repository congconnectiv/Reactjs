import React from 'react';

const Product = (props) => {
    return (
        <p>
            Name product: {props.product.name}, price: {props.product.price}, &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="submit" value="contact me" onClick={props.clickMe} />
        </p>
    );
}
export default Product;