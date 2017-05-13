import React from 'react';

const ItemDetails = (props) => {
  return (
    <section className="movie-details-wrapper">
      <div className="overlay-wrapper">           
        <div className="movie-poster" style={ props.style }>
          <div className="movie-overlay"></div>
        </div>
        <div className="container movie-desc-wrapper">
          <div className="row">
            <div className="hidden-xs col-sm-4 col-md-3">
              <img className="img-responsive" src={ props.posterImg } alt={ props.name } />
            </div>
            <div className="col-sm-8 col-md-9">
              <div className="movie-desc">
                <h1>
                  { props.name }
                  <span>{ props.genres[0].name }</span>
                </h1>
                <h4>{ props.tagline }</h4>
                <ul className="genres">
                  { 
                    props.genres.map((m) => <li key={m.name} className="genresList">{m.name}</li>)
                  }
                </ul>
                <p>{ props.overview }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
