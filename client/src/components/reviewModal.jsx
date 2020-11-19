import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalRatings from './modalRatings.jsx';
import ModalReviews from './modalReviews.jsx';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  outline: 0;
`;

const ModalSquare = styled.div`
  z-index: 100;
  background: white;
  height: 75%;
  width: 75%;
  position: relative;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-right: 10%;
  margin-left: 10%;
  border-radius: 10px;
  padding: 2rem;
  @media (max-width: 750px) {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    border-radius: 0px;
  }
`;

const ModalExit = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  border: none;
  padding-bottom: 5px;
`;

const ModalGrid = styled.div`
  display: grid;
  max-height: 100%;
  overflow: auto;
  @media (min-width: 1000px) {
    grid-template-columns: 40% 60%;
    // overflow: auto;
  }
`;

const Ratings = styled.div`
  // overflow: auto;
  @media (min-width: 1000px) {
    // position: fixed;
  }
`;

const Reviews = styled.div`
  @media (min-width: 1000px) {
    grid-column: 2;
  }
`;


const ReviewModal = ({numReviews, average, ratings, reviews, isClicked, toggle}) => isClicked ? ReactDOM.createPortal (
  <React.Fragment>
    <ModalOverlay></ModalOverlay>
    <ModalWrap>
      <ModalSquare>
        <ModalExit>
          <button onClick={toggle}>&times;</button>
        </ModalExit>
        <ModalGrid>
          <Ratings>
            <ModalRatings numReviews={numReviews} average={average} ratings={ratings}/>

          </Ratings>
          <Reviews>
            <ModalReviews reviews={reviews}/>
          </Reviews>
        </ModalGrid>
      </ModalSquare>
    </ModalWrap>
  </React.Fragment>, document.body

) : null;


export default ReviewModal;