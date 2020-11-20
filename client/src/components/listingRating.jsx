import React from 'react';
import styled from 'styled-components';

const Rating = styled.div`
  padding-left: 65px;
  margin-bottom: 15px;
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
  border-top-right-radius: 30%;
  transform: rotate(-45deg);
`;
const Triangle1Before = styled.div`
  content: '';
  position: absolute;
  background-color: inherit;
  width: .5em;
	height: .5em;
  border-top-right-radius: 30%;
  transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
`;
const Triangle1After = styled.div`
  content: '';
  position: absolute;
  background-color: inherit;
  width: .5em;
  height: .5em;
  border-top-right-radius: 30%;
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
  border-top-right-radius: 30%;
  transform: rotate(-60deg);
`;
const Triangle2Before = styled.div`
  content: '';
  position: absolute;
  background-color: inherit;
  width: .5em;
	height: .5em;
  border-top-right-radius: 30%;
  transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
`;
const Triangle2After = styled.div`
  content: '';
  position: absolute;
  background-color: inherit;
  width: .5em;
  height: .5em;
  border-top-right-radius: 30%;
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
  background-color: #FF385C;
  text-align: left;
  width: .54em;
	height: .55em;
  border-top-right-radius: 30%;
  transform: rotate(-60deg) skewX(-30deg) scale(1,.866);
`;

const Average = styled.div`
  padding-left: 25px;
  font-size: 22;
  color: #222222;
  font-family: Helvetica, Arial, Sans-Serif;
  font-weight: 200;
`;
const ListingRating = (props) => (
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
      <Average>
        {props.average} ({props.numReviews} Reviews)
      </Average>
    </Rating>
  </div>
)

export default ListingRating;