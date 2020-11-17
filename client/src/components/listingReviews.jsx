import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import IndividualReview from './individualReview.jsx';

const ListingReviews = (props) => {
  console.log(props.reviews.length)
  const single = props.reviews[0];
  const single1 = props.reviews[1];
  const single2 = props.reviews[2];
  const single3 = props.reviews[3];
  const single4 = props.reviews[4];
  const single5 = props.reviews[5];
  // for (var i = 0; i < 6;)
  const newArr = [];
  newArr.push(single);
  newArr.push(single1);
  newArr.push(single2);
  newArr.push(single3);
  newArr.push(single4);
  newArr.push(single5);

  return (
    <div>
      <Grid>
        <Row>
          <Col xs={12} sm={6}><IndividualReview {...single}/></Col>
          <Col xs={12} sm={6}><IndividualReview {...single1}/></Col>
          <Col xs={12} sm={6}><IndividualReview {...single2}/></Col>
          <Col xs={false} sm={6}><IndividualReview {...single3}/></Col>
          <Col xs={false} sm={6}><IndividualReview {...single4}/></Col>
          <Col xs={false} sm={6}><IndividualReview {...single5}/></Col>
        </Row>
      </Grid>
    </div>
  )
}

export default ListingReviews;