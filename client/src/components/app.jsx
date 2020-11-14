import React from 'react';
import axios from 'axios';
import ListingRating from './listingRating.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [],
      average: ''
    }
  }

  componentDidMount() {
    axios.get('/api/homes/5/reviews')
    .then((response) => {
      console.log(response.data[0].ratings.average);
      this.setState({
        listing: response.data,
        average: response.data[0].ratings.average
      })
      console.log(this.state.listing)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>
        <ListingRating average={this.state.average}/>
        It is workingggg
      </div>
    )
  }
}

export default App;