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
`;

const Reviews = styled.div`
  // padding-left: 65px;
  // padding-right: 65px;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 200;
  font-size: 16px;
`;

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
  ${Checkbox}:focus ~ button {
    outline: -webkit-focus-ring-color auto 5px;
  }
  ${Checkbox}:checked ~ button {
    display: none;
  }
`;

const More = styled.label`

`;

const IndividualReview = (props) => {
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
          <Trunk>
            {props.review_body}
          </Trunk>
          <More htmlFor={props._id} role="button" onClick={console.log('fjslk')}>read more</More>
        </Text>
      </Reviews>
    </div>
  )
}

export default IndividualReview;