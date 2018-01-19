import React from 'react';
import {ReviewDetails} from './ReviewDetails';

function ReviewList (props) {
  const {reviews = []} = props;

  return (
    <ul className="ReviewList">
        {
          reviews.map(review => (
            <li key={review.id}>
              <ReviewDetails {...review} />
            </li>
          ))
        }
    </ul>

  );
}

export {ReviewList};
