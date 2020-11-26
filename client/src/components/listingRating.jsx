import React from 'react';
import styled from 'styled-components';

const Rating = styled.div`
  display: grid;
  width: 100%;
  // max-width: 1200px;
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

const ListingRating = (props) => (
  <div>
    <Rating>
      <Star>
        <SvgStar viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path></SvgStar>
        <Average>
          {props.average} ({props.numReviews} Reviews)
        </Average>
      </Star>
    </Rating>
  </div>
)

export default ListingRating;