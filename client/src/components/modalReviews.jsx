import React from 'react';
import IndividualReview from './individualReview.jsx';
import styled from 'styled-components';

const Review = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  padding-top: 15px;
  overflow: auto;
  @media (min-width: 1000px) {
    grid-template-columns: 100%;
    height: 50%;
    overflow: scroll;
  }
`;

const Search = styled.input`
  width: 100%;
  height: 40px;
  margin-left: 65px;
  padding: 15px 15px;
  border-radius: 50px;
  border: 1px solid rgba(192, 192, 192, .7);
  background-color: rgba(211, 211, 211, .2);
  outline: none;

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

  var reviewList = [];
  for (var i = 0; i < searchResult.length; i++) {
    reviewList.push(<IndividualReview key={i} {...searchResult[i]}/>)
  }
  return (
    <div>
      <Review>
        <Search type="text" placeholder="Search reviews" value={searchValue} onChange={handleChange}></Search>
        {reviewList}
      </Review>
    </div>
  )
}

export default ModalReviews;