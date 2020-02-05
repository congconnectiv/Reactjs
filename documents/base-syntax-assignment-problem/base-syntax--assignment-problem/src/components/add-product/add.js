import React, {Component} from 'react';

class AddProductComponent extends Component {
    onAddProduct = () => {
        console.log(this.refs.addProduct.value);
        return this.refs.addProduct.value
    };
    render() {
        return(
            <div className="add-product">
                them san pham: 
                <input type="text" ref="addProduct" />
                <input type="submit" onClick={this.onAddProduct}/>
                <p>was add product: {this.onAddProduct}</p>
            </div>
        );
    }
}

export default AddProductComponent;