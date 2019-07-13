import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import queryParamParse from 'utils/queryParamParse';

class SingleView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let username = queryParamParse(this.props.location.search)[0];
    
    if(username == null){
      return <Redirect to="/"/>
    }

    return <p>This is the username {username}</p>;
  }
}

SingleView.propTypes = {};

export default SingleView;
