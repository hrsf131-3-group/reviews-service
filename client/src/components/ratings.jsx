import React from 'react';
import IndividualRating from './individualRating.jsx';
import styled from 'styled-components';


const AvgRatings = styled.div`
  padding-left: 95px;
  display: grid;
  overflow: auto;
  width: 80%;
  flex-flow: column wrap;
  @media (max-width: 750px) {
    display: none;
  }
  @media (min-width: 750px) {
    grid-template-columns: 20% 20% 10% 20% 20%;
    height: 25%;
  }
`;

const Col2 = styled.div`
  grid-column-start: 2;
`;

const Col5 = styled.div`
  grid-column-start: 5;
`;

const Col1 = styled.div`
  grid-column-start: 1;
`;

const Col4 = styled.div`
  grid-column-start: 4;
`;

const Average = styled.span`
  float: right;
  // justify-item: center;
`;

const Ratings = (props) => (
  <div>
    <AvgRatings>
      <Col1>
        <span>Cleanliness</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.cleanliness}/>
        <Average>{props.cleanliness}</Average>
      </Col2>
      <Col4>
        <span>Accuracy</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.accuracy}/>
        <Average>{props.accuracy}</Average>
      </Col5>
      <Col1>
        <span>Communication</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.communication}/>
        <Average>{props.communication}</Average>
      </Col2>
      <Col4>
        <span>Location</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.location}/>
        <Average>{props.location}</Average>
      </Col5>
      <Col1>
        <span>Check-in</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.checkIn}/>
        <Average>{props.checkIn}</Average>
      </Col2>
      <Col4>
        <span>Value</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.value}/>
        <Average>{props.value}</Average>
      </Col5>
    </AvgRatings>
  </div>
)

export default Ratings;