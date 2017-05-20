import React, { Component } from 'react';

import { configObj } from '../../config/config';
import MovieCard from './MovieCard';

import { connect } from 'react-redux';

import { popularMoviesFetchDataSuccess } from '../../actions/popular';
import { fetchPopularMoviesData } from '../../actions/popular';
import { itemsIsLoading } from '../../actions/action-loading';

/* CSS Files */
import './PopularMovies.scss';

class PopularMovies extends Component {

  componentWillMount () {
    const url = `${configObj.baseUrl}/movie/popular?page=1&language=en-US&api_key=${configObj.key}`;
    this.props.fetchData(url);
  }

  render () {
    console.log('Props Popular Movies', this.props);

    if (this.props.isLoading) {
      return <div className="container"><p>Loading…</p></div>;
    }
    
    let popularList = this.props.movies.map( (m,i) => {
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
      <section className="container">
          <h2>Popular Movies</h2>
          <div className="row">
            { popularList }
          </div>
        </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchPopularMoviesData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);