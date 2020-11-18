import React from 'react';
import styled from 'styled-components';

const Rating = styled.div`
  progress[value] {
    appearance: none;
    ::-webkit-progress-bar {
      margin-top: 7px;
      margin-left: 25%;
      width: 75%;
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
    // float: left;
    padding-bottom: 35px;
    // margin-left: 100px;
    justify-content: flex-start;
  },

`;
const IndividualRating = (props) => (
  <Rating>
    <progress value={props.rating} max="5"/>
  </Rating>
)

export default IndividualRating;