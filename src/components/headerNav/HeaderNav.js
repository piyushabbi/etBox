import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderNav extends Component {
  render () {
    return (
      <div>
        <Link to="/" className="btn btn-primary">Home</Link>
        <Link to="/movies" className="btn btn-primary">Movies</Link>
        {/*<Link to="/series" className="btn btn-primary">TV Series</Link>*/}
      </div>
    );
  }
}

export default HeaderNav;