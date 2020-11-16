import React from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

const Rating = styled.span`
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
    float: right;
  },

`;
const IndividualRating = (props) => (
  <Rating>
    <progress value={props.rating} max="5"/>
  </Rating>
)

export default IndividualRating;