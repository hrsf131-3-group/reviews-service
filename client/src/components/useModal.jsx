import React from 'react';
import {useState} from 'react';

const useModal = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [transition, setTransition] = useState('hide');

  function toggle() {
    setIsClicked(!isClicked);
    if (isClicked) {
      setTransition('show');
    } else {
      setTransition('hide');
    }
  }

  return {
    isClicked,
    toggle,
    transition
  }
}


export default useModal;