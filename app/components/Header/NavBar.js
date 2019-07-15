import { Link } from 'react-router-dom';
import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Render the Navigation bar component
  render() {
    return (
      <nav
        className="navbar navbar-dark bg-secondary container-fullwidth 
      flex-lg-row justify-content-start"
      >
        <div className="mr-4">
          <Link to="/" className="navbar-brand" href="#">
            <img
              src={require('../../images/logo.png')}
              width="50px"
              height="50px"
            />
          </Link>
        </div>
        <div>
          <Link to="/" className="navbar-brand">StatsHub</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
