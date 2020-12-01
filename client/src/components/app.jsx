import React from 'react';
import axios from 'axios';
import ListingRating from './listingRating.jsx';
import Ratings from './ratings.jsx';
import ListingReviews from './listingReviews.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      average: '',
      numReviews: '',
      ratings: {},
      reviews: [],
      hasReviews: false,
      modalVisible: false
    }
  }

  componentDidMount() {
    var rand = Math.floor(Math.random() * (100 - 1) + 1);
    axios.get(`/api/homes/${rand}/reviews`)
    .then((response) => {
      var ratings = response.data[0].ratings;
      var average = ratings.average;
      delete ratings.average;
      this.setState({
        average: average,
        ratings: ratings,
        numReviews: response.data[0].reviews.length,
        reviews: response.data[0].reviews,
        hasReviews: true
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    const hasReviews = this.state.hasReviews;
    let reviews;
    if (hasReviews) {
      reviews = <ListingReviews numReviews={this.state.numReviews} average={this.state.average} ratings={this.state.ratings} reviews={this.state.reviews}/>;
    }

    const Static = styled.div`
      width: 60%;
      margin: 10px auto;
    `;

    const Service = styled.div`
      width: 80%;
      margin: auto;
    `;

    const Image = styled.img`
      width: 100%;
    `;

    return(
      <div>
        <Service>
          <ListingRating average={this.state.average} numReviews={this.state.numReviews}/>
          <Ratings {...this.state.ratings}/>
          {reviews}
        </Service>
        <Static>
          <Image src="https://rest-n-react-reviews-bundle.s3-us-west-1.amazonaws.com/location.png"/>
        </Static>
        <Static>
          <Image src="https://rest-n-react-reviews-bundle.s3-us-west-1.amazonaws.com/hosted.png"/>
        </Static>
        <Static>
          <Image src="https://rest-n-react-reviews-bundle.s3-us-west-1.amazonaws.com/thingsToKnow.png"/>
        </Static>
      </div>

    )
  }
}

export default App;