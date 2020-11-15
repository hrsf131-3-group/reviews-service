import React from 'react';

const IndividualRatings = (props) => (
  <div>
    {Object.keys(props).map((value, index) => (
        <span key={index}>{value} {props[value]} </span>
    ))}
  </div>
)

export default IndividualRatings;