import React from 'react';
import {Field} from './Field';

function ReviewDetails (props = {}) {
  return (
    // JSX tags are translated into React.createElement() function
    // calls which output React elements.
    <div className="ReviewDetails">
      <p>{props.body}</p>
      <p>{props.rating}</p>
      <p>By {props.full_name}</p>
      <Field name="Created At" value={props.created_at} />
    </div>
  );
}


export {ReviewDetails};
