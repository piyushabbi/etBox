import React, { Component } from 'react';
import { connect } from 'react-redux';
import { configObj } from '../../config/config';

import './MovieDetailsStyles.scss';

import ItemDetails from './ItemDetails';

import { fetchMovieDetailsData } from '../../actions/action-movie-detail';
import { itemsIsLoading } from '../../actions/action-loading';

class MovieDetails extends Component {
  componentWillMount() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.params.id}?language=en-US&api_key=${configObj.key}`;
    console.log('CWM!');
    console.log('Props from Did Mount', this.props)
    this.props.fetchData(url);
  }

  mountData (props) {
    let style = {
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${props.backdrop_path})`
      }, 
      detailsObj = props,
      posterImg = `http://image.tmdb.org/t/p/w342/${detailsObj.poster_path}`;
      <ItemDetails 
        style={ style }
        posterImg={ posterImg }
        name={ detailsObj.title }
        tagline={ detailsObj.tagline }
        genres={ detailsObj.genres }
        overview={ detailsObj.overview } />
  }

  render () {
    console.log('Movie Details Props ', this.props);
    console.log('RENDER!');

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    
    let style = {
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${this.props.movieDetails.backdrop_path})`
      }, 
      detailsObj = this.props.movieDetails,
      posterImg = `http://image.tmdb.org/t/p/w342/${detailsObj.poster_path}`;
    
    return (
      <ItemDetails 
        style={ style }
        posterImg={ posterImg }
        name={ detailsObj.title }
        tagline={ detailsObj.tagline }
        genres={ detailsObj.genres }
        overview={ detailsObj.overview } />
    );
  }
}
  


const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieDetails,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchMovieDetailsData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
