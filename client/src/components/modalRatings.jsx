import React from 'react';
import styled from 'styled-components';
import IndividualRating from './individualRating.jsx';

const Rating = styled.div`
  // float: left;
  margin-bottom: 15px;
  font-size: 20;
`;
const Star = styled.span`
  color: #FF385C;
`;
const AllRatings = styled.div`
  max-width: 100%;
  font-size: 14;
  display: grid;
  @media (min-width: 750px) {
    grid-template-columns: 20% 20% 10% 20% 20%;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 100%;
    height: 50%;
    overflow: scroll;
  }
`;

const Col2 = styled.div`
@media (min-width: 750px) {
  grid-column-start: 2;
}
@media (min-width: 1000px) {
  grid-column-start: 1;
}
`;

const Col5 = styled.div`
@media (min-width: 750px) {
  grid-column-start: 5;
}
@media (min-width: 1000px) {
  grid-column-start: 1;
}
`;

const Col1 = styled.div`
@media (min-width: 750px) {
  grid-column-start: 1;
}
@media (min-width: 1000px) {
  grid-column-start: 1;
}
`;

const Col4 = styled.div`
@media (min-width: 750px) {
  grid-column-start: 4;
}
@media (min-width: 1000px) {
  grid-column-start: 1;
}
`;

const Average = styled.span`
  float: right;
  // justify-item: center;
`;

const ModalRatings = (props) => (
  <div>
    <Rating>
      <Star> &#9733; </Star>
      {props.average} ({props.numReviews} Reviews)
    </Rating>
    <AllRatings>
      <Col1>
        <span>Cleanliness</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.ratings.cleanliness}/>
        <Average>{props.ratings.cleanliness}</Average>
      </Col2>
      <Col4>
        <span>Accuracy</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.ratings.accuracy}/>
        <Average>{props.ratings.accuracy}</Average>
      </Col5>
      <Col1>
        <span>Communication</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.ratings.communication}/>
        <Average>{props.ratings.communication}</Average>
      </Col2>
      <Col4>
        <span>Location</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.ratings.location}/>
        <Average>{props.ratings.location}</Average>
      </Col5>
      <Col1>
        <span>Check-in</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.ratings.checkIn}/>
        <Average>{props.ratings.checkIn}</Average>
      </Col2>
      <Col4>
        <span>Value</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.ratings.value}/>
        <Average>{props.ratings.value}</Average>
      </Col5>
    </AllRatings>
  </div>
)

export default ModalRatings;