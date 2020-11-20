import React from 'react';
import ReviewModal from './reviewModal.jsx';
import useModal from './useModal.jsx';
import styled from 'styled-components';

const Button = styled.div`
  border-radius: 10px;
  border: 1px solid;
  width: 200px;
  // background: red;
  height: 35px;
  margin-top: 35px;
  margin-left: 65px;
  padding-top: 17px;
  text-align: center;
  cursor: pointer;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 750px) {
    width: 80%;
  }
`;

const Modal = (props) => {
  const {isClicked, toggle, transition} = useModal();

  return (
    <div>
      <Button onClick={toggle}>Show all {props.numReviews} Reviews</Button>
      <ReviewModal numReviews={props.numReviews} average={props.average} ratings={props.ratings} reviews={props.reviews} isClicked={isClicked} toggle={toggle} transition={transition}/>
    </div>
  )
}

export default Modal;