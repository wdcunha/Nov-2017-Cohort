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
        <p>{props.price}</p>
        <p>Seller: {props.full_name}</p>
        <Field name="Created At" value={props.created_at} />
      </div>
    </div>
  )

}

export {ProductDetails};
