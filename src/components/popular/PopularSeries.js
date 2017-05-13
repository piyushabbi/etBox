import React, { Component } from 'react';
import { configObj } from '../../config/config';

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
        backgroundImage: `url(http://image.tmdb.org/t/p/w185/${m.poster_path})`
      };

      return (
        <div key={ i } className="col-xs-6 col-sm-3 col-md-2 movie-card-wrap">
          <div className="movie-card">
            <div className="image-holder" style={ style }></div>
            <p className="caption">{ m.original_name }</p>
          </div>
        </div>
      );
    });

    return (
      <div>
      { 
        this.state.loading 
        ? <section className="container"><i>Loading</i></section>
        : <section className="container">
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

export default PopularSeries;