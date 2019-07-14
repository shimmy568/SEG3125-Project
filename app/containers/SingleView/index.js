import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import LineChart from 'components/LineChart';
import BarGraph from 'components/BarGraph';
import styled from 'styled-components';
import UserProfile from 'components/UserProfile';
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

    let ScoreDiv = styled.div`
      float: right;
      padding: 10px;
      border: 1px solid black;
      border-radius: 3px;
      font-size: 1.25em;
    `;

    let ChartDiv = styled.div`
      padding: 5px;
      border: 1px solid black;
      border-radius: 3px;
    `;

    return (
      <div>
        <Header />
        <div className="container mt-4">
          <div className="row mb-4">
            <div className="col-12">
              <ScoreDiv>Score: 9.8</ScoreDiv>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <UserProfile name={username} photo={require('../../images/logo.png')} description='GitHub profile bio' isSingle={true}/>
            </div>
            <div className="col-8">
              <ChartDiv>
                <LineChart users={1} />
              </ChartDiv>
              <ChartDiv className="mt-4">
                <BarGraph />
              </ChartDiv>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleView.propTypes = {};

export default SingleView;
