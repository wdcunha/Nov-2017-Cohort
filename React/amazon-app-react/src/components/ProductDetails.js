import React from 'react';
import {Field} from './Field';

function ProductDetails (props = {}) {
  const containerStyle = {
    paddingLeft: "10px"
  }

  return (
    <div className="ProductDetails">
      <h2> {props.title} </h2>
      <div style={containerStyle} >
        <p>{props.description}</p>
        <p>Price: {props.price}</p>
        <p>Seller: <strong>{props.author.full_name}</strong></p>
        <Field name="Created At" value={props.created_at} />
      </div>
    </div>
  )

}

export {ProductDetails};
