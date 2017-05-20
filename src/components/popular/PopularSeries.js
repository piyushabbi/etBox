import React, { Component } from 'react';

import { configObj } from '../../config/config';
import MovieCard from './MovieCard';
import { LoadingSection } from '../Loading';

import { connect } from 'react-redux';

import { popularSeriesFetchDataSuccess } from '../../actions/popular';
import { fetchPopularSeriesData } from '../../actions/popular';
import { itemsIsLoading } from '../../actions/action-loading';

class PopularSeries extends Component {

  componentDidMount () {
    const url = `${configObj.baseUrl}/tv/popular?page=1&language=en-US&api_key=${configObj.key}`;
    this.props.fetchData(url);
  }

  render () {
    console.log('Props Popular Series', this.props);

    if (this.props.isLoading) {
      return <LoadingSection />;
    }

    let popularList = this.props.series.map( (m,i) => {
      const style = {
        backgroundImage: `url(http://image.tmdb.org/t/p/w500/${m.poster_path})`
      };

      return (
        <MovieCard 
          key={ i } 
          style={ style } 
          title={ m.original_name } 
          id={ m.id }
          type='series' />
      );
    });

    return (
      <section className="container">
        <h2>Popular Series</h2>
        <div className="row">
          { popularList }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    series: state.series,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchPopularSeriesData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularSeries);