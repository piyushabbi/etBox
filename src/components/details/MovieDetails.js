import React, { Component } from 'react';
import { configObj } from '../../config/config';

class MovieDetails extends Component {

  constructor (props) {
    super(props);
    this.state = {
      details: {}
    }
  }
  

  componentDidMount() {
    const config = {
      "url": `https://api.themoviedb.org/3/movie/${this.props.params.id}?language=en-US&api_key=${configObj.key}`
    };

    fetch(config.url).then(response => {
      Promise.resolve(response.json()).then(response => {
        console.log(response);
        this.setState({
          details: response
        });
      })
    });
  }

  render () {
    return (
      <div className="container">
        <h1>{ this.state.details.title }</h1>
      </div>
    );
  }
}

export default MovieDetails;