import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalRatings from './modalRatings.jsx';
import ModalReviews from './modalReviews.jsx';
import {keyframes} from 'styled-components';

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

const TransitionOpen = keyframes`
  0% {top: 100%; opacity: 0;}
  100% {top: 0; opacity 1}
`;

const ModalSquare = styled.div`
  z-index: 1060;
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
  overflow: hidden;
  animation: ${TransitionOpen} .4s;
  animation-direction: ${isClicked => isClicked ? 'normal' : 'reverse'};
  @media (max-width: 750px) {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    border-radius: 0px;
    // animation-direction: reverse;
    // animation-fill-mode: backwards;
  }
`;

const ModalExit = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 1;
  border: none;
  padding-bottom: 5px;
`;

const ModalGrid = styled.div`
  display: grid;
  max-height: 95%;
  overflow: auto;
  @media (min-width: 750px) {
    grid-template-columns: 100%;
    // overflow: auto;
  }
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

const Button = styled.button`
  border-radius: 50%;
  border: none;
  background-color: white;
  font-size: 25px;
  outline: none;
  text-decoration: bold;
  &:hover {
    cursor: pointer;
    background-color: #F5F5F5;
  }
`;

const ReviewModal = ({numReviews, average, ratings, reviews, isClicked, toggle}) => isClicked ? ReactDOM.createPortal (
  <React.Fragment>
    <ModalWrap>
      <ModalOverlay onClick={toggle}></ModalOverlay>
      <ModalSquare>
        <ModalExit>
          <Button onClick={toggle}>&times;</Button>
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