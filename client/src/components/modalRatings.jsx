import React from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import IndividualRating from './individualRating.jsx';

const Rating = styled.div`
  // float: left;
  margin-bottom: 15px;
  font-size: 20;
`;
const Star = styled.span`
  color: #FF385C;
`;
const Reviews = styled.div`
  // padding-left: 65px;
  margin-right: 75%;
  font-size: 10;
`;

const ModalRatings = (props) => (
  <div>
    <Rating>
      <Star> &#9733; </Star>
      {props.average} ({props.numReviews} Reviews)
      <Reviews>
        <Grid>
          <Row>
            <Col sm={3} lg={12}>Cleanliness <IndividualRating rating={props.ratings.cleanliness}/></Col>
            <Col sm={3} lg={12}>{props.ratings.cleanliness}</Col>
            <Col sm={3} lg={12}>Accuracy <IndividualRating rating={props.ratings.accuracy}/></Col>
            <Col sm={3} lg={12}>{props.ratings.accuracy}</Col>
          </Row>
          <Row>
            <Col sm={3} lg={12}>Communication <IndividualRating rating={props.ratings.communication}/></Col>
            <Col sm={3} lg={12}>{props.ratings.communication}</Col>
            <Col sm={3} lg={12}>Location <IndividualRating rating={props.ratings.location}/></Col>
            <Col sm={3} lg={12}>{props.ratings.location}</Col>
          </Row>
          <Row>
            <Col sm={3} lg={12}>Check-In <IndividualRating rating={props.ratings.checkIn}/></Col>
            <Col sm={3} lg={12}>{props.ratings.checkIn}</Col>
            <Col sm={3} lg={12}>Value <IndividualRating rating={props.ratings.value}/></Col>
            <Col sm={3} lg={12}>{props.ratings.value}</Col>
          </Row>
        </Grid>
      </Reviews>
    </Rating>
  </div>
)

export default ModalRatings;