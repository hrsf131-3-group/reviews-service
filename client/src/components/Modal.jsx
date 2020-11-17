import React from 'react';
import ReviewModal from './reviewModal.jsx';
import useModal from './useModal.jsx';

const Modal = (props) => {
  console.log('modal',props.reviews)
  const {isClicked, toggle} = useModal();
  return (
    <div>
      <button onClick={toggle}>All Reviews</button>
      <ReviewModal isClicked={isClicked} toggle={toggle}/>
    </div>
  )
}


export default Modal;