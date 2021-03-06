import React from 'react';
import styled from 'styled-components';

const Pic = styled.div`
  margin-top: 25px;
  float: left;
`;
const Name = styled.div`
  padding-left: 75px;
  padding-top: 35px;
  // float: left;
  position: relative;
  font-weight: 500;
`;
const Date = styled.div`
  padding-left: 75px;
  padding-top: 1px;
  padding-bottom: 25px;
  // float: left;
  position: relative;
  font-size: 14px;
  color: rgb(113, 113, 113);
`;

const Text = styled.div`
  position: relative;
  // margin-right: 50px;
  // white-space:nowrap;
  // overflow:hidden;
  // text-overflow: ellipsis;
  // display: -webkit-box;
  // -webkit-line-clamp: 3;
  // -webkit-box-orient: vertical;
  // overflow: hidden;
  line-height: 24px;
`;

const Reviews = styled.div`
  // padding-left: 65px;
  // padding-right: 65px;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 16px;
`;

// somehow check if it has overflow || if over three lines
const Trunk = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
  ${Checkbox}:checked + span {
    -webkit-line-clamp: unset;
  }
  // ${Checkbox}:focus ~ label {
  //   outline: -webkit-focus-ring-color auto 5px;
  // }
  ${Checkbox}:checked ~ label {
    display: none;
  }
`;

const More = styled.label`
  font-weight: 500;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const IndividualReview = (props) => {
  var noSpaceLength = props.review_body.split(' ').join('').length;
  let readMoreButton;
  let trunkedText;
  if (noSpaceLength > 150) {
    if (props.modalId) {
      trunkedText = props.review_body;
    } else {
      readMoreButton = <More htmlFor={props._id} role="button">read more</More>
      trunkedText = <Trunk>{props.review_body}</Trunk>
    }
  } else {
    trunkedText = props.review_body;
  }
  return (
    <div>
      <Reviews>
        <Pic>
          <img src={props.image} alt="Profile Picture" style={{width:55,  height:55, borderRadius: 400 / 2}}/>
        </Pic>
        <Name>
          {props.name}
        </Name>
        <Date>
          {props.review_month} {props.review_year}
        </Date>
        <Text>
          <Checkbox type="checkbox" id={props._id}/>
          {trunkedText}
          {readMoreButton}
        </Text>
      </Reviews>
    </div>
  )
}

export default IndividualReview;