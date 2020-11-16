import React from 'react';
import axios from 'axios';
import ListingRating from './listingRating.jsx';
import Ratings from './ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [],
      average: '',
      numReviews: '',
      ratings: {}
    }
  }

  componentDidMount() {
    axios.get('/api/homes/28/reviews')
    .then((response) => {
      var ratings = response.data[0].ratings;
      var average = ratings.average;
      delete ratings.average;
      this.setState({
        listing: response.data,
        average: average,
        ratings: ratings,
        numReviews: response.data[0].reviews.length
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    return(
      <div>
        <ListingRating average={this.state.average} numReviews={this.state.numReviews}/>
        <Ratings {...this.state.ratings}/>
      </div>
    )
  }
}

export default App;