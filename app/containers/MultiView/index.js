import React from 'react';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import queryParamParse from 'utils/queryParamParse';
import UserProfile from '../../components/UserProfile';
import LineChart from '../../components/LineChart';
import styled from 'styled-components';



class MultiView extends React.Component {

  /**
   * The constructor for the multi view page
   */
  constructor() {
    super();
    this.state = {};
  }

  /**
   * The render method for the multi view page
   */
  render() {

    // Extract the usernames from the query params
    const usernames = queryParamParse(this.props.location.search);

    // If there are no usernames extracted than the url is invalid and the user
    // is to be redirected to the main page
    if (usernames.length == 0) {
      return <Redirect to="/" />;
    }

    // Create the list of user profiles to be added to the page
    let userProfiles = [];
    for(let i = 0; i < usernames.length; i++){
      userProfiles.push((
        <UserProfile name={usernames[i]} index={i} />
      ));
    }

    let NamesDiv = styled.div`
      margin-left: 150px;
      margin-right: 150px;
    `;

    let ChartDiv = styled.div`
      padding: 5px;
      border: 1px solid black;
      border-radius: 3px;
    `;

    return (
      <div>
        <Header />
        <NamesDiv className="mt-4 mb-4">
          <div className="row d-flex justify-content-around">
            {userProfiles}
          </div>
        </NamesDiv>
        <div className="container mb-5">
          <ChartDiv>
            <LineChart users={usernames.length} singleview={false} usernames={usernames} />
          </ChartDiv>
          <ChartDiv className="mt-4">
            <LineChart users={usernames.length} singleview={true} usernames={usernames} />
          </ChartDiv>
        </div>
        
      </div>
    );
  }
}

MultiView.propTypes = {};

export default MultiView;
