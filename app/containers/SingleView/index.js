import React from 'react';
import PropTypes from 'prop-types';

class SingleView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <p>This is the single view page</p>;
  }
}

SingleView.propTypes = {};

export default SingleView;
