import React from 'react';
import styled from 'styled-components';

const Rating = styled.div`
  padding-left: 95px;
  margin-bottom: 15px;
`;
const Star = styled.span`
  color: #FF385C;
`;

const ListingRating = (props) => (
  <div>
    <Rating>
      <Star> &#9733; </Star>
      {props.average} ({props.numReviews} Reviews)
    </Rating>
  </div>
)

export default ListingRating;