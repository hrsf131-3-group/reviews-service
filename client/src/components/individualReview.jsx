import React from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

const Pic = styled.div`
  margin-top: 25px;
  float: left;
`;
const Name = styled.div`
  padding-left: 75px;
  padding-top: 30px;
  // float: left;
  position: relative;
`;
const Date = styled.div`
  padding-left: 75px;
  padding-top: 1px;
  padding-bottom: 25px;
  // float: left;
  position: relative;
`;

const Text = styled.div`
position: relative;
`;

const IndividualReview = (props) => {
  return (
  <div>
    <Pic>
      <img src={props.image} alt="Profile Picture" style={{width:50,  height:50, borderRadius: 400 / 2}}/>
    </Pic>
    <Name>
      {props.name}
    </Name>
    <Date>
      {props.review_month} {props.review_year}
    </Date>
    <Text>
      {props.review_body}
    </Text>
  </div>
  )
}

export default IndividualReview;