import React from 'react';
import {useState} from 'react';

const useModal = () => {
  const [isClicked, setIsClicked] = useState(false);

  function toggle() {
    setIsClicked(!isClicked);
  }

  return {
    isClicked,
    toggle
  }
}


export default useModal;