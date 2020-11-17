import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import ModalRatings from './modalRatings.jsx';

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
  border-radius: 3px;
  padding: 2rem;
`;

const ModalExit = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
`;


const ReviewModal = ({numReviews, average, ratings, reviews, isClicked, toggle}) => isClicked ? ReactDOM.createPortal (
  <React.Fragment>
    <ModalOverlay></ModalOverlay>
    <ModalWrap>
      <ModalSquare>
        <ModalExit>
          <button onClick={toggle}>&times;</button>
        </ModalExit>
        <Grid>
          <Row>
            <Col xs={12} sm={12} lg={6}><ModalRatings numReviews={numReviews} average={average} ratings={ratings}/></Col>
            <Col xs={12} sm={12} lg={6}>fsafsaf</Col>
          </Row>
        </Grid>

      </ModalSquare>
    </ModalWrap>
  </React.Fragment>, document.body

) : null;


export default ReviewModal;