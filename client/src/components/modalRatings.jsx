import React from 'react';
import styled from 'styled-components';
import IndividualRating from './individualRating.jsx';

const Rating = styled.div`
  margin-bottom: 15px;
  font-size: 20;
  @media (min-width: 1000px) {
    position: fixed;
  }
`;
const Star = styled.span`
  color: #FF385C;
`;
const AllRatings = styled.div`
  max-width: 100%;
  font-size: 14;
  display: grid;
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
    padding-top: 50px;
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