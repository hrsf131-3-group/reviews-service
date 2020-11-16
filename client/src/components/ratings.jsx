import React from 'react';
import IndividualRating from './individualRating.jsx';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

const Ratings = (props) => (
  <div>
    <Grid>
      <Row >
        <Col sm={6} lg={6}>Cleanliness <IndividualRating rating={props.cleanliness}/></Col>
        <Col sm={6} lg={6}>Accuracy <IndividualRating rating={props.accuracy}/></Col>
      </Row>
      <Row>
        <Col sm={6} lg={6}>Communication <IndividualRating rating={props.communication}/></Col>
        <Col sm={6} lg={6}>Location <IndividualRating rating={props.location}/></Col>
      </Row>
      <Row>
        <Col sm={6} lg={6}>Check-In <IndividualRating rating={props.checkIn}/></Col>
        <Col sm={6} lg={6}>Value <IndividualRating rating={props.value}/></Col>
      </Row>
    </Grid>
  </div>
)

export default Ratings;