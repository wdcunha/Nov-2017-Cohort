import React, {Component} from 'react';
import {ProductForm} from './ProductForm';
import {Product} from '../requests/products';

class ProductNewPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newProduct: {
        title: "",
        description: ""
      }
    };

    this.createProduct = this.createProduct.bind(this);
    this.updateNewProduct = this.updateNewProduct.bind(this);
  }

  updateNewProduct (data) {
    const {newProduct} = this.state;

    this.setState({
      newProduct: {...newProduct, ...data}
    });
  }

  createProduct () {
    const {history} = this.props;
    const {newProduct} = this.state;
    Product
      .create(newProduct)
      .then(({id}) => {
        history.push(`/products/${id}`)
      });
  }

  render () {
    const {newProduct} = this.state;

    return (
      <main
        className="ProductNewPage"
        style={{padding: '0  20px'}}
      >
        <h2>Products</h2>
        <ProductForm
          product={newProduct}
          onChange={this.updateNewProduct}
          onSubmit={this.createProduct}
        />

      </main>
    );
  }
}

export {ProductNewPage};
