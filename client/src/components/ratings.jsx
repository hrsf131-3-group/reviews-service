import React from 'react';
import IndividualRating from './individualRating.jsx';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

const Ratings = (props) => (
  <div>
    <Grid>
      <Row >
        <Col sm={3} lg={3}>Cleanliness <IndividualRating rating={props.cleanliness}/></Col>
        <Col>{props.cleanliness}</Col>
        <Col sm={3} lg={3}>Accuracy <IndividualRating rating={props.accuracy}/></Col>
        <Col>{props.accuracy}</Col>
      </Row>
      <Row>
        <Col sm={3} lg={3}>Communication <IndividualRating rating={props.communication}/></Col>
        <Col>{props.communication}</Col>
        <Col sm={3} lg={3}>Location <IndividualRating rating={props.location}/></Col>
        <Col>{props.location}</Col>
      </Row>
      <Row>
        <Col sm={3} lg={3}>Check-In <IndividualRating rating={props.checkIn}/></Col>
        <Col>{props.checkIn}</Col>
        <Col sm={3} lg={3}>Value <IndividualRating rating={props.value}/></Col>
        <Col>{props.value}</Col>
      </Row>
    </Grid>
  </div>
)

export default Ratings;