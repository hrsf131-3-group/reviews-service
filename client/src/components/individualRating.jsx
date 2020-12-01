import React from 'react';
import styled from 'styled-components';

const Rating = styled.span`
  progress[value] {
    appearance: none;
    ::-webkit-progress-bar {
      margin-top: 7px;
      // margin-left: 25%;
      width: 90%;
      height: 4px;
      border-radius: 20px;
      background-color: #eee;
    }
    ::-webkit-progress-value {
      margin-top: 7px;
      height: 4px;
      border-radius: 20px;
      background-color: black;
    }
    // padding-right: 10px;
  },

`;
const IndividualRating = (props) => (
  <Rating>
    <progress value={props.rating} max="5"/>
  </Rating>
)

export default IndividualRating;