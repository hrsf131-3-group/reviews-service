import React from 'react';
import IndividualRating from './individualRating.jsx';
import styled from 'styled-components';


const AvgRatings = styled.div`
  margin: auto;
  display: grid;
  overflow: auto;
  width: 100%;
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
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
    // row-gap: 20px;
    height: 15%;
  }
`;

const Col2 = styled.span`
  // grid-column-start: 2;
  // justify-self: stretch;
  // float: right;
  display: inline-block;
  // padding-left: 80px;
`;

const Col5 = styled.div`
  // grid-column-start: 5;
  justify-self: stretch;
`;

const Col1 = styled.div`
  grid-column-start: 1;
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
  // justify-content: space-between;
`;

const Col4 = styled.div`
  grid-column-start: 2;
`;

const Col3 = styled.span`
  // grid-column-start: 3;
  margin: auto;
  // justify-seld: end;
  float: right;
`;

const Col6 = styled.div`
  // grid-column-start: 6;
`;

const Average = styled.span`
  display: inline-block;
  // position: relative;
  white-space: nowrap;
  float: right;
  // justify-item: center;
`;

const Ratings = (props) => (
  <div>
    <AvgRatings>
      <Col1>
        <span>Cleanliness</span>
        <Col3>
          <Col2>
            <IndividualRating rating={props.cleanliness}/>
          </Col2>
          <Average>{props.cleanliness}</Average>
        </Col3>
      </Col1>
      <Col4>
        <span>Accuracy</span>
        <Col3>
          <Col2>
            <IndividualRating rating={props.accuracy}/>
          </Col2>
          <Average>{props.accuracy}</Average>
        </Col3>
      </Col4>
      <Col1>
        <span>Communication</span>
        <Col3>
          <Col2>
            <IndividualRating rating={props.communication}/>
          </Col2>
          <Average>{props.communication}</Average>
        </Col3>
      </Col1>
      <Col4>
        <span>Location</span>
        <Col3>
          <Col2>
            <IndividualRating rating={props.location}/>
          </Col2>
          <Average>{props.location}</Average>
        </Col3>
      </Col4>
      <Col1>
        <span>Check-in</span>
        <Col3>
          <Col2>
            <IndividualRating rating={props.checkIn}/>
          </Col2>
          <Average>{props.checkIn}</Average>
        </Col3>
      </Col1>
      <Col4>
        <span>Value</span>
        <Col3>
          <Col2>
            <IndividualRating rating={props.value}/>
          </Col2>
          <Average>{props.value}</Average>
        </Col3>
      </Col4>
    </AvgRatings>
  </div>
)

export default Ratings;