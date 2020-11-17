import React from 'react';
import ReviewModal from './reviewModal.jsx';
import styled from 'styled-components';
import useModal from './useModal.jsx';

const ModalDiv = styled.div`
`;

const Modal = (props) => {
  console.log('modal',props)
  const {isClicked, toggle} = useModal();
  return (
    <div>
      <button onClick={toggle}>All Reviews</button>
      <ReviewModal numReviews={props.numReviews} average={props.average} ratings={props.ratings} reviews={props.reviews} isClicked={isClicked} toggle={toggle}/>
    </div>
  )
}


export default Modal;