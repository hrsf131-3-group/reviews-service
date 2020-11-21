import React from 'react';
import IndividualRating from './individualRating.jsx';
import styled from 'styled-components';


const AvgRatings = styled.div`
  margin: auto;
  display: grid;
  overflow: auto;
  width: 90%;
  max-width: 1200px;
  flex-flow: column wrap;
  color: #222222;
  overflow: hidden;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 200;
  font-size: 16px;
  @media (max-width: 750px) {
    display: none;
  }
  @media (min-width: 750px) {
    grid-template-columns: 20% 20% 15% 20% 20% 5%;
    height: 15%;
  }
`;

const Col2 = styled.div`
  grid-column-start: 2;
  justify-self: end;
`;

const Col5 = styled.div`
  grid-column-start: 5;
  justify-self: end;
`;

const Col1 = styled.div`
  grid-column-start: 1;
`;

const Col4 = styled.div`
  grid-column-start: 4;
`;

const Col3 = styled.div`
  grid-column-start: 3;
`;

const Col6 = styled.div`
  grid-column-start: 6;
`;

const Average = styled.span`
  display: inline-block;
  position: absolute;
  white-space: nowrap;
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
      </Col2>
      <Col3>
        <Average>{props.cleanliness}</Average>
      </Col3>
      <Col4>
        <span>Accuracy</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.accuracy}/>
      </Col5>
      <Col6>
        <Average>{props.accuracy}</Average>
      </Col6>
      <Col1>
        <span>Communication</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.communication}/>
      </Col2>
      <Col3>
        <Average>{props.communication}</Average>
      </Col3>
      <Col4>
        <span>Location</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.location}/>
      </Col5>
      <Col6>
        <Average>{props.location}</Average>
      </Col6>
      <Col1>
        <span>Check-in</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.checkIn}/>
      </Col2>
      <Col3>
        <Average>{props.checkIn}</Average>
      </Col3>
      <Col4>
        <span>Value</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.value}/>
      </Col5>
      <Col6>
        <Average>{props.value}</Average>
      </Col6>
    </AvgRatings>
  </div>
)

export default Ratings;