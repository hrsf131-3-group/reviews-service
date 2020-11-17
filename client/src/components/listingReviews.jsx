import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import IndividualReview from './individualReview.jsx';
import Modal from './modal.jsx';

const ListingReviews = (props) => {
  console.log('rev',props)
  var data = props.reviews;
  var length = data.length
  var mostRecent = [];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  for (var i = 0; i < length; i++) {
    var temp;
    var max = 0;
    var index;
    for (var j = 0; j < data.length; j++) {
      if (data[j].review_year > max) {
        temp = data[j];
        max = data[j].review_year;
        index = j;
      }
    }
    mostRecent.push(temp);
    data.splice(index, 1);
    temp = undefined;
  }

  console.log(mostRecent)
  let col1;
  let col2;
  let col3;
  let col4;
  let col5;
  let col6;

  if (mostRecent[0] !== undefined) {
    col1 = <Col xs={12} sm={12} md={6}><IndividualReview {...mostRecent[0]}/></Col>
  }
  if (mostRecent[1] !== undefined) {
    col2 = <Col xs={12} sm={12} md={6}><IndividualReview {...mostRecent[1]}/></Col>
  }
  if (mostRecent[2] !== undefined) {
    col3 = <Col xs={12} sm={12} md={6}><IndividualReview {...mostRecent[2]}/></Col>
  }
  if (mostRecent[3] !== undefined) {
    col4 = <Col xs={false} sm={12} md={6}><IndividualReview {...mostRecent[3]}/></Col>
  }
  if (mostRecent[4] !== undefined) {
    col5 = <Col xs={false} sm={12} md={6}><IndividualReview {...mostRecent[4]}/></Col>
  }
  if (mostRecent[5] !== undefined) {
    col6 = <Col xs={false} sm={12} md={6}><IndividualReview {...mostRecent[5]}/></Col>
  }

  return (
    <div>
      <Grid>
        <Row>
          {col1}
          {col2}
          {col3}
          {col4}
          {col5}
          {col6}
        </Row>
      </Grid>
      <Modal numReviews={props.numReviews} average={props.average} ratings={props.ratings} reviews={mostRecent}/>
    </div>
  )
}

export default ListingReviews;