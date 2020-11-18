import React from 'react';
import IndividualReview from './individualReview.jsx';
import styled from 'styled-components';
import Modal from './modal.jsx';

const Reviews = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Rev1 = styled.div`
  max-width: 750px;
  @media (min-width: 750px) {
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const Rev2 = styled.div`
  max-width: 750px;
  @media (min-width: 750px) {
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const Rev3 = styled.div`
  max-width: 750px;
  @media (min-width: 750px) {
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const Rev4 = styled.div`
  max-width: 750px;
  @media (max-width: 750px) {
    display: none;
  }
  @media (min-width: 750px) {
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const Rev5 = styled.div`
  max-width: 750px;
  @media (max-width: 750px) {
    display: none;
  }
  @media (min-width: 750px) {
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const Rev6 = styled.div`
  max-width: 750px;
  @media (max-width: 750px) {
    display: none;
  }
  @media (min-width: 750px) {
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const Button = styled.div`

`;

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
    col1 = <IndividualReview {...mostRecent[0]}/>
  }
  if (mostRecent[1] !== undefined) {
    col2 = <IndividualReview {...mostRecent[1]}/>
  }
  if (mostRecent[2] !== undefined) {
    col3 = <IndividualReview {...mostRecent[2]}/>
  }
  if (mostRecent[3] !== undefined) {
    col4 = <IndividualReview {...mostRecent[3]}/>
  }
  if (mostRecent[4] !== undefined) {
    col5 = <IndividualReview {...mostRecent[4]}/>
  }
  if (mostRecent[5] !== undefined) {
    col6 = <IndividualReview {...mostRecent[5]}/>
  }

  return (
    <div>
      <Reviews>
        <Rev1>
          {col1}
        </Rev1>
        <Rev2>
          {col2}
        </Rev2>
        <Rev3>
          {col3}
        </Rev3>
        <Rev4>
          {col4}
        </Rev4>
        <Rev5>
          {col5}
        </Rev5>
        <Rev6>
          {col6}
        </Rev6>
      </Reviews>
      <Button>
        <Modal numReviews={props.numReviews} average={props.average} ratings={props.ratings} reviews={mostRecent}/>
      </Button>
    </div>
  )
}

export default ListingReviews;