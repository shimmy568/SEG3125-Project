import React from 'react';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import queryParamParse from 'utils/queryParamParse';
import UserProfile from '../../components/UserProfile';
import photo1 from '../../images/profilepic1.png';
import photo2 from '../../images/profilepic2.png';
import photo3 from "../../images/profilepic3.png";
import photo4 from "../../images/profilepic4.png";
import photo5 from "../../images/profilepic5.png";
import styled from 'styled-components';



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
    let descriptions = ["I Like coding","I like photography","I live in Ottawa","I live in Toronto","I like birds"];
    let photos = [photo1,photo2,photo3,photo4,photo5];

    let userProfiles = [];
    for(let i = 0; i < usernames.length; i++){
      userProfiles.push((
        <UserProfile name={usernames[i]} photo={photos[i]} key={i} description={descriptions[i]}/>
      ));
    }

    let NamesDiv = styled.div`
      margin-left: 150px;
      margin-right: 150px;
    `;

    return (
      <div>
        <Header />
        <NamesDiv className="mt-4 mb-4">
          <div className="row d-flex justify-content-around">
            {userProfiles}
          </div>
        </NamesDiv>
        <div>
          graphs here
        </div>
        
      </div>
      
    );
  }
}

MultiView.propTypes = {};

export default MultiView;
