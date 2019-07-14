import React from 'react';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import queryParamParse from 'utils/queryParamParse';
import UserProfile from '../../components/UserProfile';
import photo1 from '../../images/profilepic1.png';
import photo2 from '../../images/profilepic2.png';
import photo3 from '../../images/profilepic3.png';
import photo4 from '../../images/profilepic4.png';
import photo5 from '../../images/profilepic5.png';

class MultiView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const usernames = queryParamParse(this.props.location.search);

    if (usernames.length == 0) {
      return <Redirect to="/" />;
    }
    const descriptions = [
      'I Like coding',
      'I like photography',
      'I live in Ottawa',
      'I live in Toronto',
      'I like birds',
    ];
    const photos = [photo1, photo2, photo3, photo4, photo5];

    return (
      <div>
        <Header />
        <p>This is the multi view page</p>
        {usernames.map((user, index) => (
          <UserProfile
            name={user}
            photo={photos[index]}
            description={descriptions[index]}
          />
        ))}
      </div>
    );
  }
}

MultiView.propTypes = {};

export default MultiView;
