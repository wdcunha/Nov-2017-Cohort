import React, {Component} from 'react';
import {Field} from './Field';
// import {ProductForm} from './ProductForm';
// import products from '../data/products';
import {Product} from '../requests/products';
import {Link} from 'react-router-dom';


class ProductIndexPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      products: []
      // newProduct: {
      //   title: "",
      //   description: "",
      //   author: {}
      // }
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    // this.addProduct = this.addProduct.bind(this);
    // this.updateNewProduct = this.updateNewProduct.bind(this);
  }

  deleteProduct(productId) {
    // const {currentTarget} = event;
    // const productId =  parseInt(currentTarget.getAttribute('data-id'));
    return () => {
      const {products} = this.state;

      this.setState({
        products: products
        .filter(product => product.id !== productId)
      });
    }
  }
  //
  // updateNewProduct (data) {
  //   console.log(data)
  //   const {newProduct} = this.state;
  //
  //   this.setState({
  //     newProduct: {...newProduct, ...data}
  //   });
  // }
  //
  // addProduct() {
  //   const {products, newProduct} = this.state;
  //
  //   this.setState({
  //     products: [newProduct,...products],
  //     newProduct: {
  //       title: "",
  //       description: "",
  //       author: {}
  //     }
  //   });
  // }

  async componentDidMount () {
    const products = await Product.all();
    this.setState({products, loading: false});
  }

  render () {
    const {loading} = this.state;

    if (loading) {
      return (
        <main
          className="ProductIndexPage"
          style={{padding: '0  20px'}}
        >
          <h3>Loading products...</h3>
        </main>
      )
    }

    return (
      <main
        className="ProductIndexPage"
        style={{
          padding: '0 20px',
        }}
      >
        <h2>Product</h2>
        {/* <ProductForm
          product={newProduct}
          onChange={this.updateNewProduct}
          onSubmit={this.addProduct}
        /> */}
        <ul
          style={{paddingLeft: '30px'}}
        >
          {
            this.state.products.map(product => (
              <li
                key={product.id}
                style={{padding: '5px'}}
                >
                  {/* <a href="">{product.title}</a> */}
                  <Link to={`/products/${product.id}`}>
                    {product.title}
                  </Link>
                  <Field name="Author"
                    value={product.author.full_name}
                  />
                  <button
                    // data-id={product.id}
                    onClick={this.deleteProduct(product.id)}
                  >Delete</button>
              </li>
            ))
          }
        </ul>
      </main>
    );
  }
}

export {ProductIndexPage};
