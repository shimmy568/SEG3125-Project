import React from 'react';
import Header from 'components/Header';
import PropTypes from 'prop-types';

class MultiView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    let usernames = queryParamParse(this.props.location.search);
    
    if(usernames.length == 0){
      return <Redirect to="/"/>
    }

    return <p>This is the multi view page</p>;
  }
}

MultiView.propTypes = {};

export default MultiView;
