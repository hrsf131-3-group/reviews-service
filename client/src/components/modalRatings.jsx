import React from 'react';
import styled from 'styled-components';
import IndividualRating from './individualRating.jsx';

const AllRatings = styled.div`
  max-width: 100%;
  display: grid;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 200;
  font-size: 14px;
  row-gap: 10px;
  @media (min-width: 0px) {
    grid-template-columns: 40% 40% 20%;
  }
  @media (min-width: 750px) {
    grid-template-columns: 20% 20% 10% 20% 20% 10%;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 40% 40% 20%;
    height: 30%;
    justify-self: end;
    position: fixed;
    padding-top: 75px;
  }
`;

const Col2 = styled.div`
  @media (min-width: 0px) {
    grid-column-start: 2;
    justify-self: end;
  }
  @media (min-width: 750px) {
    grid-column-start: 2;
  }
  @media (min-width: 1000px) {
    grid-column-start: 2;
    // position: relative;
  }
`;

const Col5 = styled.div`
  @media (min-width: 0px) {
    grid-column-start: 2;
    justify-self: end;
  }
  @media (min-width: 750px) {
    grid-column-start: 5;
  }
  @media (min-width: 1000px) {
    grid-column-start: 2;
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

const Col3 = styled.div`
  @media (min-width: 0px) {
    grid-column-start: 3;
    justify-self: start;
  }
  @media (min-width: 750px) {
    padding-right: 50px;
  }
  @media (min-width: 1000px) {
    grid-column-start: 3;
    // float: left;
    padding-right: 50px;
  }
`;

const Col6 = styled.div`
  @media (min-width: 0px) {
    grid-column-start: 3;
    justify-self: start;
  }
  @media (min-width: 750px) {
    padding-right: 50px;
    grid-column-start: 6;
  }
  @media (min-width: 1000px) {
    grid-column-start: 3;
    // float: left;
    padding-right: 50px;
  }
`;

const SvgStar = styled.svg`
  height: 25px;
  width: 25px;
  fill: currentcolor;
  color: #FF385C;
  padding-top: 3px;
`;

const Average = styled.span`
  float: right;
  // justify-item: center;
`;

const Rating = styled.div`
  width: 100%;
  margin-bottom: 25px;
  font-size: 20;
  // margin: auto;
  @media (min-width: 1000px) {
    position: absolute;
  }
`;


const Star = styled.div`
  margin-top: 25px;
  display: inline-flex;
  // position: relative;
`;

const NumReviews = styled.div`
  padding-left: 5px;
  font-size: 28px;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: bold;
`;

const ModalRatings = (props) => (
  <div>
    <Rating>
      <Star>
        <SvgStar viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path></SvgStar>
        <NumReviews>
          {props.average} ({props.numReviews} Reviews)
        </NumReviews>
      </Star>
    </Rating>
    <AllRatings>
      <Col1>
        <span>Cleanliness</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.ratings.cleanliness}/>
      </Col2>
      <Col3>
        <Average>{props.ratings.cleanliness}</Average>
      </Col3>
      <Col4>
        <span>Accuracy</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.ratings.accuracy}/>
      </Col5>
      <Col6>
        <Average>{props.ratings.accuracy}</Average>
      </Col6>
      <Col1>
        <span>Communication</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.ratings.communication}/>
      </Col2>
      <Col3>
        <Average>{props.ratings.communication}</Average>
      </Col3>
      <Col4>
        <span>Location</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.ratings.location}/>
      </Col5>
      <Col6>
        <Average>{props.ratings.location}</Average>
      </Col6>
      <Col1>
        <span>Check-in</span>
      </Col1>
      <Col2>
        <IndividualRating rating={props.ratings.checkIn}/>
      </Col2>
      <Col3>
        <Average>{props.ratings.checkIn}</Average>
      </Col3>
      <Col4>
        <span>Value</span>
      </Col4>
      <Col5>
        <IndividualRating rating={props.ratings.value}/>
      </Col5>
      <Col6>
        <Average>{props.ratings.value}</Average>
      </Col6>
    </AllRatings>
  </div>
)

export default ModalRatings;