import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
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
      return <Redirect to="/" />
    }

    return (
      <div>
        <Header />
        <UserProfile name={username} photo={require('../../images/logo.png')} description='GitHub profile description'/>
      </div>
    );
  }
}

SingleView.propTypes = {};

export default SingleView;
