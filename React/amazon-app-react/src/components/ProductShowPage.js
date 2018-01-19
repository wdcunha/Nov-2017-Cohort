import React from 'react';
// When you're not export a default from a module
// (e.g. export {ProductDetails, ReviewDetails}),
// you must braces after `import` to choose the values
// that you are import from the module.
import {ProductDetails} from './ProductDetails';
import {ReviewList} from './ReviewList';
import product from '../data/product';

function ProductShowPage () {
  const {reviews = []} = product;

  return (
    <main
      className="ProductShowPage"
      style={{
        padding: '0 20px'
      }}
      >
      <ProductDetails {...product} />

      {/*
        <ProductDetails
        title="What is your favourite colour?"
        body="Red, magenta, blue, indigo, purple, etc."
        created_at="2017-01-01"
        updated_at="2017-01-01"
        view_count={901}
        author={{full_name: "Jon Snow"}}
      />*/}
      <h1>Reviews</h1>
      {/*<ReviewDetails
      title="What is your favourite colour?"
      body="What kind of idiot picks a password no one can guess?"
      author={{full_name: "Moses Bogishich"}}
      created_at="1 day ago"
      />
      */}
      <ReviewList reviews={reviews} />

    </main>
  )
}



export {ProductShowPage};
