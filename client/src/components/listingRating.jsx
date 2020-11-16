import React from 'react';
import styled from 'styled-components';

const Rating = styled.div`padding: 10px; background: papayawhip;`;
const ListingRating = (props) => (
  <div>
    <Rating>
      {props.average} ({props.numReviews} Reviews)
    </Rating>
  </div>
)

export default ListingRating;