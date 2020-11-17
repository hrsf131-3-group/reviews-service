import React from 'react';
import IndividualRating from './individualRating.jsx';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import {ThemeProvider} from 'styled-components';

const Ratings = (props) => (
  <div>
    <Grid>
      <Row>
        <Col xs={false} sm={3} lg={3}>Cleanliness <IndividualRating rating={props.cleanliness}/></Col>
        <Col xs={false} sm={3} lg={3}>{props.cleanliness}</Col>
        <Col xs={false} sm={3} lg={3}>Accuracy <IndividualRating rating={props.accuracy}/></Col>
        <Col xs={false} sm={3} lg={3}>{props.accuracy}</Col>
      </Row>
      <Row>
        <Col xs={false} sm={3} lg={3}>Communication <IndividualRating rating={props.communication}/></Col>
        <Col xs={false} sm={3} lg={3}>{props.communication}</Col>
        <Col xs={false} sm={3} lg={3}>Location <IndividualRating rating={props.location}/></Col>
        <Col xs={false} sm={3} lg={3}>{props.location}</Col>
      </Row>
      <Row>
        <Col xs={false} sm={3} lg={3}>Check-In <IndividualRating rating={props.checkIn}/></Col>
        <Col xs={false} sm={3} lg={3}>{props.checkIn}</Col>
        <Col xs={false} sm={3} lg={3}>Value <IndividualRating rating={props.value}/></Col>
        <Col xs={false} sm={3} lg={3}>{props.value}</Col>
      </Row>
    </Grid>
  </div>
)

export default Ratings;