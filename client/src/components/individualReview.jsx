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
  font-family: Helvetica, Arial, Sans-Serif;
  font-weight: 200;
  font-size: 16px;
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
          {props.review_body}
        </Text>
      </Reviews>
    </div>
  )
}

export default IndividualReview;