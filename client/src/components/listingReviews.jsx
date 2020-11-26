import React from 'react';
import IndividualReview from './individualReview.jsx';
import styled from 'styled-components';
import Modal from './modal.jsx';

const Reviews = styled.div`
  display: grid;
  width: 100%;
  margin: auto;
  max-width: 1200px;
  @media (min-width: 1000px) {
    grid-template-columns: 45% 10% 45%;
  }
`;

const ModalDiv = styled.div`
  padding-top: 30px;
`;

const Rev1 = styled.div`
  @media (min-width: 750px) {
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    // max-width: 50%;
    grid-column: 1
  }
`;

const Rev2 = styled.div`
  max-width: 750px;
  @media (min-width: 750px) {
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    grid-column: 3
  }
`;

const Rev3 = styled.div`
  max-width: 750px;
  @media (min-width: 750px) {
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    grid-column: 1
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
    grid-column: 3
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
    grid-column: 1
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
    grid-column: 3
  }
`;

const ListingReviews = (props) => {
  // console.log('rev',props)
  var data = props.reviews;
  var length = data.length
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const sorter = (b, a) => {
    if(a.review_year !== b.review_year){
       return a.review_year - b.review_year;
    }else{
       return months.indexOf(a.review_month) - months.indexOf(b.review_month);
    };
  };
  data.sort(sorter);

  let col1;
  let col2;
  let col3;
  let col4;
  let col5;
  let col6;

  if (data[0] !== undefined) {
    col1 = <IndividualReview {...data[0]}/>
  }
  if (data[1] !== undefined) {
    col2 = <IndividualReview {...data[1]}/>
  }
  if (data[2] !== undefined) {
    col3 = <IndividualReview {...data[2]}/>
  }
  if (data[3] !== undefined) {
    col4 = <IndividualReview {...data[3]}/>
  }
  if (data[4] !== undefined) {
    col5 = <IndividualReview {...data[4]}/>
  }
  if (data[5] !== undefined) {
    col6 = <IndividualReview {...data[5]}/>
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
        <ModalDiv>
          <Modal numReviews={props.numReviews} average={props.average} ratings={props.ratings} reviews={data}/>
        </ModalDiv>
      </Reviews>
    </div>
  )
}

export default ListingReviews;