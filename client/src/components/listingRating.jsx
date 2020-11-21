import React from 'react';
import styled from 'styled-components';

const Rating = styled.div`
  display: grid;
  width: 90%;
  max-width: 1200px;
  grid-template-columns: 100%;
  margin: auto;
`;
const Star = styled.div`
  float: left;
  display: inline-flex;
  padding-bottom: 15px;
`;

const Average = styled.div`
  padding-left: 5px;
  font-size: 22;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 600;
`;
const SvgStar = styled.svg`
  height: 17px;
  width: 17px;
  fill: currentcolor;
  color: #FF385C;
`;

// const Star1 = styled.div`
//   position: absolute;
//   // transform: rotate(30deg);
// `;

// const Triangle1 = styled.div`
//   position: relative;
//   background-color: #FF385C;
//   text-align: left;
//   top: 4px;
//   left: 6px;
//   // bottom: 2px;
//   width: 10px;
// 	height: 10px;
//   border-top-right-radius: 20%;
//   transform: rotate(285deg);
// `;
// const Triangle1Before = styled.div`
//   content: '';
//   position: absolute;
//   background-color: inherit;
//   width: 10px;
// 	height: 10px;
//   border-top-right-radius: 20%;
//   transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
// `;
// const Triangle1After = styled.div`
//   content: '';
//   position: absolute;
//   background-color: inherit;
//   width: 10px;
//   height: 10px;
//   border-top-right-radius: 20%;
//   transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
// `;
// const Star2 = styled.div`
//   position: absolute;
//   // transform: rotate(30deg);
// `;

// const Triangle2 = styled.div`
//   position: relative;
//   background-color: #FF385C;
//   text-align: left;
//   top: 4px;
//   left: 7px;
//   // right: 4px;
//   // bottom: 2px;
//   width: 10px;
// 	height: 10px;
//   border-top-right-radius: 20%;
//   transform: rotate(-15deg);
// `;
// const Triangle2Before = styled.div`
//   content: '';
//   position: absolute;
//   background-color: inherit;
//   width: 10px;
// 	height: 10px;
//   border-top-right-radius: 20%;
//   transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
// `;
// const Triangle2After = styled.div`
//   content: '';
//   position: absolute;
//   background-color: inherit;
//   width: 10px;
//   height: 10px;
//   border-top-right-radius: 20%;
//   transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
// `;

// const Star3 = styled.div`
//   position: absolute;
//   // transform: rotate(-70deg);
// `;

// const Triangle3 = styled.div`
//   position: relative;
//   // top: 5.5px;
//   // bottom: 4px;
//   left: 6.5px;
//   background-color: #FF385C;
//   text-align: left;
//   width: 9px;
// 	height: 9px;
//   border-top-right-radius: 20%;
//   transform: rotate(-60deg) skewX(-30deg) scale(1,.866);
// `;

const ListingRating = (props) => (
  <div>
    <Rating>
      <Star>
        <SvgStar viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path></SvgStar>
        {/* <Star1>
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
        </Star3> */}
        <Average>
          {props.average} ({props.numReviews} Reviews)
        </Average>
      </Star>
    </Rating>
  </div>
)

export default ListingRating;