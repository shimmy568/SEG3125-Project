import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import LineChart from 'components/LineChart';
import InfoChart from 'components/InfoChart';
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
              <div>
                <UserProfile name={username} isSingle={true}/>
              </div>
              
            </div>
            <div className="col-8">
              <ChartDiv>
                <LineChart users={1} singleview={false} usernames={[username]} />
              </ChartDiv>
              <ChartDiv className="mt-4">
                <LineChart users={1} singleview={true} usernames={[username]} />
              </ChartDiv>
              <ChartDiv className="col-12 mt-4 mb-5">
                <InfoChart />
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
