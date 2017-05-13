import React from 'react';
import { Link } from 'react-router';

let MovieCard = (props) => {
  return (
    <div className="col-xs-6 col-sm-3 col-md-2 movie-card-wrap">
      <Link className="card-link" to={ `/${ props.type }/${ props.id }` }>
        <div className="movie-card">
          <div className="image-holder" style={ props.style }></div>
          <p className="caption">{ props.title }</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;