import React from 'react';
import {Field} from './Field';

function ReviewDetails (props = {}) {
  const {onDeleteClick = () => {}} = props;

  return (
    // JSX tags are translated into React.createElement() function
    // calls which output React elements.
    <div className="ReviewDetails">
      <p>{props.body}</p>
      <p>Rate: {props.rating}</p>
      <p>By <strong>{props.author_full_name}</strong></p>
      <Field name="Created At" value={props.created_at} />
      <button
        onClick={() => onDeleteClick(props.id)}
      >Delete</button>
    </div>
  );
}


export {ReviewDetails};
