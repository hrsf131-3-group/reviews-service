import React from 'react';

const ListingRating = (props) => (
  <div>
    {props.average}
    ({props.numReviews} Reviews)
  </div>
)

export default ListingRating;