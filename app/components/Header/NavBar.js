import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav
        className="navbar navbar-dark bg-secondary container-fullwidth 
      flex-lg-row justify-content-start"
      >
        <div className="mr-4">
          <a className="navbar-brand" href="#">
            <img
              src={require('../../images/logo.png')}
              width="50px"
              height="50px"
            />
          </a>
        </div>
        <div>
          <span className="navbar-brand">StatsHub</span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
