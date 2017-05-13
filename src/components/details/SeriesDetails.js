import React, { Component } from 'react';
import { configObj } from '../../config/config';

import './MovieDetailsStyles.scss';

import ItemDetails from './ItemDetails';

class SeriesDetails extends Component {

  constructor (props) {
    super(props);
    this.state = {
      details: {},
      loading: true
    }
  }

  componentWillMount() {
    const config = {
      "url": `https://api.themoviedb.org/3/tv/${this.props.params.id}?language=en-US&api_key=${configObj.key}`
    };

    fetch(config.url).then(response => {
      Promise.resolve(response.json()).then(response => {
        this.setState({
          details: response,
          loading: false
        });
      })
    });
  }

  render () {
    console.log( this.state.details );
    let style = {
      backgroundImage: `url(http://image.tmdb.org/t/p/original/${this.state.details.backdrop_path})`
    };
    let detailsObj = this.state.details,
        posterImg = `http://image.tmdb.org/t/p/w342/${detailsObj.poster_path}`;  
    return (
      <div>
        {
          (this.state.loading)
          ? <section className="container"><i>Loading</i></section>
          : (
            <ItemDetails 
              style={ style }
              posterImg={ posterImg }
              name={ detailsObj.original_name }
              tagline={ detailsObj.tagline }
              genres={ detailsObj.genres }
              overview={ detailsObj.overview } />
          )
        }
      </div>
    );
  }
}

export default SeriesDetails;