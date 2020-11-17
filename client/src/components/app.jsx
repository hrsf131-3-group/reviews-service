import React from 'react';
import axios from 'axios';
import ListingRating from './listingRating.jsx';
import Ratings from './ratings.jsx';
import ListingReviews from './listingReviews.jsx';

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
    axios.get('/api/homes/1/reviews')
    .then((response) => {
      // console.log('app',response.data[0].reviews)
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
      // console.log('app',this.state.reviews)
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    const hasReviews = this.state.hasReviews;
    let reviews;
    if (hasReviews) {
      reviews = <ListingReviews reviews={this.state.reviews}/>;
    }
    return(
      <div>
        <ListingRating average={this.state.average} numReviews={this.state.numReviews}/>
        <Ratings {...this.state.ratings}/>
        {reviews}

      </div>
    )
  }
}

export default App;