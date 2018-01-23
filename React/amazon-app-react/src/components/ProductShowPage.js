import React, {Component} from 'react';
// When you're not export a default from a module
// (e.g. export {ProductDetails, ReviewDetails}),
// you must braces after `import` to choose the values
// that you are import from the module.
import {ProductDetails} from './ProductDetails';
import {ReviewList} from './ReviewList';
import product from '../data/product';

class ProductShowPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      product: product
    };
    this.delete = this.delete.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }

  delete () {
    this.setState({
      product: {}
    });
  }

  deleteReview (reviewId) {
    const {product} = this.state;
    const {reviews} = product;

    this.setState({
      product: {
        ...product,
        reviews: reviews.filter(review => review.id !== reviewId)
      }
    })
  }

  render  () {
    // const {reviews = []} = product;
    const {reviews = []} = this.state.product;

    if (Object.keys(this.state.product).length < 1) {
      return (
        <main
          className="ProductShowPage"
          style={{
            padding: '0 20px'
          }}
        >
          <h2>Product does't exist!</h2>
        </main>
      );
    }
    
    return (
      <main
        className="ProductShowPage"
        style={{
          padding: '0 20px'
        }}
        >
        <ProductDetails {...this.state.product} />

        {/*
          <ProductDetails
          title="What is your favourite colour?"
          body="Red, magenta, blue, indigo, purple, etc."
          created_at="2017-01-01"
          updated_at="2017-01-01"
          view_count={901}
          author={{full_name: "Jon Snow"}}
        />*/}
        <button
          onClick={this.delete}
        >Delete</button>
        <h1>Reviews</h1>
        {/*<ReviewDetails
        title="What is your favourite colour?"
        body="What kind of idiot picks a password no one can guess?"
        author={{full_name: "Moses Bogishich"}}
        created_at="1 day ago"
        />
        */}
        <ReviewList
          reviews={reviews}
          onReviewDeleteClick={this.deleteReview}
        />
      </main>
    )
  }
}


export {ProductShowPage};
