import React, { Component } from 'react';
import { configObj } from '../../config/config';

class PopularMovies extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    }
  }

  componentDidMount () {
    const url = `${configObj.baseUrl}/movie/popular?page=1&language=en-US&api_key=${configObj.key}`;

    var config = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "GET",
      "headers": {},
      "data": {}
    }
    fetch(config.url).then(response => {
      Promise.resolve(response.json()).then(response => {
        console.log(response);
        this.setState({
          movies: response.results,
          loading: false
        });
      })
    });
  }

  render () {
    let popularList = this.state.movies.map( (m,i) => {

      const style = {
        backgroundImage: `url(http://image.tmdb.org/t/p/w185/${m.poster_path})`
      };

      return (
        <div key={ i } className="col-xs-6 col-sm-3 col-md-2 movie-card-wrap">
          <div className="movie-card">
            <div className="image-holder" style={ style }></div>
            <p className="caption">{ m.title }</p>
          </div>
        </div>
      );
    });

    return (
      <div>
      { 
        this.state.loading 
        ? <i>Loading</i>
        : <section className="container">
            <h2>Popular Movies</h2>
            <div className="row">
              { popularList }
            </div>
          </section>
      }
      </div>
    );
  }
}

export default PopularMovies;