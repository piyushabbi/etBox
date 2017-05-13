import React, { Component } from 'react';

import { configObj } from '../../config/config';
import MovieCard from './MovieCard';

/* CSS Files */
import './PopularMovies.scss';

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

    const config = {
      "url": url
    };
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
        backgroundImage: `url(http://image.tmdb.org/t/p/w500/${m.poster_path})`
      };

      return (
        <MovieCard 
          key={ i } 
          style={ style } 
          title={ m.title } 
          id={ m.id }
          type='movies' />
      );
    });

    return (
      <div className="container">
      { 
        this.state.loading 
        ? <section><i>Loading</i></section>
        : <section>
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