/*import React, { Component } from 'react';

import { configObj } from '../../config/config';
import MovieCard from './MovieCard';

class PopularSeries extends Component {
  constructor (props) {
    super(props);
    this.state = {
      series: [],
      loading: true
    }
  }

  componentDidMount () {
    const url = `${configObj.baseUrl}/tv/popular?page=1&language=en-US&api_key=${configObj.key}`;

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
          series: response.results,
          loading: false
        });
      })
    });
  }

  render () {
    let popularList = this.state.series.map( (m,i) => {

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
      <div className="container">
      { 
        this.state.loading 
        ? <section><i>Loading</i></section>
        : <section>
            <h2>Popular Series</h2>
            <div className="row">
              { popularList }
            </div>
          </section>
      }
      </div>
    );
  }
}

export default PopularSeries;*/