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
      <nav className="navbar navbar-dark bg-secondary">
        <div>
          <Link to="/" className="navbar-brand" href="#">
            <img
              src={require('../../images/logo.png')}
              width="50px"
              height="50px"
            />
          </Link>
          <div className="navbar-brand">	
          <Link to="/" className="navbar-brand">StatsHub</Link>
          </div>
        </div>
        
        
        <span className="navbar-text" >
          {this.props.name}
        </span>
        
        
      </nav>
    );
  }
}

export default NavBar;
