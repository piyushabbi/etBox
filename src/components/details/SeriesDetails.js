import React, { Component } from 'react';
import { configObj } from '../../config/config';

import './MovieDetailsStyles.scss';

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
    let style1 = {
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
            <section className="movie-details-wrapper">
              <div className="overlay-wrapper">           
                <div className="movie-poster" style={ style1 }>
                  <div className="movie-overlay"></div>
                </div>
               <div className="container movie-desc-wrapper">
                  <div className="row">
                    <div className="hidden-xs col-sm-4 col-md-3">
                      <img className="img-responsive" src={ posterImg } alt={ detailsObj.title } />
                    </div>
                    <div className="col-sm-8 col-md-9">
                      <div className="movie-desc">
                        <h1>
                          { detailsObj.title }
                          <span>{ detailsObj.genres[0].name }</span>
                        </h1>
                        <h4>{ detailsObj.tagline }</h4>
                        <ul className="genres">
                          { 
                            detailsObj.genres.map((m) => <li key={m.name} className="genresList">{m.name}</li>)
                          }
                        </ul>
                        <p>{ detailsObj.overview }</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
      </div>
    );
  }
}

export default SeriesDetails;