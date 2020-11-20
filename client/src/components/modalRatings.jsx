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

const AllRatings = styled.div`
  max-width: 100%;
  font-size: 14;
  display: grid;
  color: #222222;
  font-family: Helvetica, Arial, Sans-Serif;
  font-weight: 200;
  font-size: 16px;
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

const Average = styled.span`
  float: right;
  // justify-item: center;
`;

const Star = styled.div`
  margin-top: 25px;
`;

const Star1 = styled.div`
  position: absolute;
  transform: rotate(30deg);
`;

const Triangle1 = styled.div`
  position: relative;
  background-color: #FF385C;
  text-align: left;
  top: 8.25px;
  left: 3px;
  width: .5em;
	height: .5em;
  border-top-right-radius: 20%;
  transform: rotate(-45deg);
`;
const Triangle1Before = styled.div`
  content: '';
  position: absolute;
  background-color: inherit;
  width: .5em;
	height: .5em;
  border-top-right-radius: 20%;
  transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
`;
const Triangle1After = styled.div`
  content: '';
  position: absolute;
  background-color: inherit;
  width: .5em;
  height: .5em;
  border-top-right-radius: 20%;
  transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
`;
const Star2 = styled.div`
  position: absolute;
  transform: rotate(-15deg);
`;

const Triangle2 = styled.div`
  position: relative;
  background-color: #FF385C;
  text-align: left;
  top: 8.2px;
  right: 4px;
  // bottom: 1px;
  width: .45em;
	height: .5em;
  border-top-right-radius: 20%;
  transform: rotate(-60deg);
`;
const Triangle2Before = styled.div`
  content: '';
  position: absolute;
  background-color: inherit;
  width: .5em;
	height: .5em;
  border-top-right-radius: 20%;
  transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
`;
const Triangle2After = styled.div`
  content: '';
  position: absolute;
  background-color: inherit;
  width: .5em;
  height: .5em;
  border-top-right-radius: 20%;
  transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
`;

const Star3 = styled.div`
  position: absolute;
  // transform: rotate(-70deg);
`;

const Triangle3 = styled.div`
  position: relative;
  top: 5.5px;
  right: 2px;
  bottom: 3px;
  background-color: #FF385C;
  text-align: left;
  width: .54em;
	height: .55em;
  border-top-right-radius: 20%;
  transform: rotate(-60deg) skewX(-30deg) scale(1,.866);
`;

const NumReviews = styled.div`
  padding-left: 25px;
  font-size: 22;
  color: #222222;
  font-family: Helvetica, Arial, Sans-Serif;
  font-weight: bold;
`;

const ModalRatings = (props) => (
  <div>
    <Rating>
      <Star>
        <Star1>
          <Triangle1>
            <Triangle1Before></Triangle1Before>
            <Triangle1After></Triangle1After>
          </Triangle1>
        </Star1>
        <Star2>
          <Triangle2>
            <Triangle2Before></Triangle2Before>
            <Triangle2After></Triangle2After>
          </Triangle2>
        </Star2>
        <Star3>
          <Triangle3>
          </Triangle3>
        </Star3>
      </Star>
      {/* <Star> &#9733; </Star> */}
      <NumReviews>
        {props.average} ({props.numReviews} Reviews)
      </NumReviews>
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