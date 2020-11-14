import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: []
    }
  }

  componentDidMount() {
    axios.get('/api/homes/5/reviews')
    .then((response) => {
      console.log(response.data);
      this.setState({
        listing: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>
        It is workingggg
      </div>
    )
  }
}

export default App;