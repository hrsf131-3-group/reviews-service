import React from 'react';
import IndividualReview from './individualReview.jsx';
import styled from 'styled-components';

const Review = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  padding-top: 30px;
  overflow: auto;
  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: 100%;
    max-width: 90%;
    // height: 50%;
    overflow: hidden;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 100%;
    // height: 50%;
    overflow: scroll;
  }
`;

const Search = styled.input`
  width: 100%;
  height: 40px;
  // margin-left: 65px;
  padding-left: 35px;
  border-radius: 50px;
  border: 1px solid rgba(192, 192, 192, .7);
  background-color: rgba(211, 211, 211, .2);
  outline: none;
  @media (max-width: 850px) {
    width: 90%;
  }
  &:focus {
    border: 2px solid;
  }
  &:focus + svg{
    stroke-width: 4;
  }
`;

const Icon = styled.svg`
  // display: inline-flex;
  color: black;

  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 2;
  overflow: visible;
  position: relative;
  // top: 29px;
  bottom: 28px;
  left: 15px;
`;

const ModalReviews = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }
  React.useEffect(() => {
    for (var i = 0; i < props.reviews.length; i++) {
      const lower = searchValue.toLowerCase();
      const result = props.reviews.filter(review =>
        review.review_body.toLowerCase().includes(lower) || review.review_month.toLowerCase().includes(lower) || review.name.toLowerCase().includes(lower)
      );
      setSearchResult(result)
    }
  }, [searchValue]);

  // add an id field
  var reviewList = [];
  for (var i = 0; i < searchResult.length; i++) {
    var index = i + 1;
    reviewList.push(<IndividualReview key={index} search={searchValue} modalId={index} {...searchResult[i]}/>)
  }

  return (
    <div>
      <Review>
        <Search type="text" placeholder="Search reviews" value={searchValue} onChange={handleChange}></Search>
        <Icon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"/></g></Icon>
        {reviewList}
      </Review>
    </div>
  )
}

export default ModalReviews;