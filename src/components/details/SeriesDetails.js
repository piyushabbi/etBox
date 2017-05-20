import React, { Component } from 'react';
import { connect } from 'react-redux';
import { configObj } from '../../config/config';

import './MovieDetailsStyles.scss';
import { LoadingSection } from '../Loading';

import ItemDetails from './ItemDetails';

import { fetchSeriesDetailsData } from '../../actions/action-series-details';
import { itemsIsLoading } from '../../actions/action-loading';

class SeriesDetails extends Component {

  componentWillMount() {
    const url = `https://api.themoviedb.org/3/tv/${this.props.params.id}?language=en-US&api_key=${configObj.key}`;
    console.log('CWM!');
    console.log('Props from Will Mount', this.props)
    this.props.fetchData(url);
  }

  render () {
    console.log('Series Details Props ', this.props);
    console.log('RENDER!'); 

    if (this.props.isLoading) {
      return <LoadingSection />;
    } 

    let style = {
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${this.props.seriesDetails.backdrop_path})`
      }, 
      detailsObj = this.props.seriesDetails,
      posterImg = `http://image.tmdb.org/t/p/w342/${detailsObj.poster_path}`;
    
    return (
      <ItemDetails 
        style={ style }
        posterImg={ posterImg }
        name={ detailsObj.original_name }
        tagline={ detailsObj.tagline }
        genres={ detailsObj.genres }
        overview={ detailsObj.overview } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seriesDetails: state.seriesDetails,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchSeriesDetailsData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesDetails);