import React from 'react';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import update from 'react-addons-update'; // ES6

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      inpCount: 1,
      inpContent: [''],
    };
  }

  addInput() {
    const inp = this.state.inpContent;
    inp.push('');
    this.setState({
      inpCount: this.state.inpCount + 1,
      inpContent: inp,
    });
  }

  removeInput() {
    if(this.state.inpCount == 1){
      return;
    }
    
    const inp = this.state.inpContent;
    inp.pop();
    this.setState({
      inpCount: this.state.inpCount - 1,
      inpContent: inp,
    });
  }

  updateUsername(event) {
    const index = parseInt(event.target.getAttribute('index'));
    const newStr = event.target.value;
    const updateQuery = {};
    updateQuery[index] = { $set: newStr };
    this.setState({
      inpContent: update(this.state.inpContent, updateQuery),
    });
  }

  buttonClick() {
    let url;
    if (this.state.inpCount == 1) {
      url = `/single?user=${this.state.inpContent[0]}`;
    } else {
      url = `/multi?`;
      for (let i = 0; i < this.state.inpCount; i++) {
        url += `user${i + 1}=${this.state.inpContent[i]}`;
        if (i < this.state.inpCount - 1) {
          url += '&';
        }
      }
    }

    console.log(url);
    this.props.history.push(url);
  }

  onUpdateUsername = this.updateUsername.bind(this);
  onAddInput = this.addInput.bind(this);
  onRemoveInput = this.removeInput.bind(this);
  onButtonClick = this.buttonClick.bind(this);

  render() {
    const inputs = [];
    for (let i = 0; i < this.state.inpCount; i++) {
      inputs.push(
        <div className="input-group mb-3" key={i}>
          <input
            type="text"
            className="form-control col-6 offset-3"
            index={i}
            onChange={this.onUpdateUsername}
            placeholder={`User ${i + 1}`}
            aria-label={`User ${i + 1}`}
            aria-describedby="basic-addon1"
          />
        </div>,
      );
    }

    let buttonStr = 'View';
    if (this.state.inpCount > 1) {
      buttonStr = 'Compare';
    }

    let buttonDisabled = false;
    for (let i = 0; i < this.state.inpCount; i++) {
      if (this.state.inpContent[i] == '') {
        buttonDisabled = true;
      }
    }

    let addUserHref = "#";
    let addUserStyle = null;
    if(this.state.inpCount >= 5){
      addUserHref = null;
      addUserStyle = {color: "gray", cursor: "not-allowed"};
    }

    let removeUserHref = "#";
    let removeUserStyle = null;
    if(this.state.inpCount == 1){
      removeUserHref = null;
      removeUserStyle = {color: "gray", cursor: "not-allowed"};
    }

    return (
      <div>
        <Header />
        <div className="container mt-4">
          <div className="row text-center mb-3">
            <div className="col-4 offset-4">
              <a onClick={this.onAddInput} style={addUserStyle} href={addUserHref}>
                Add User
              </a>
              &nbsp;
              <a onClick={this.onRemoveInput} style={removeUserStyle} href={removeUserHref}>
                Remove User
              </a>
            </div>
          </div>
          <div className="row">{inputs}</div>
          <div className="row text-center">
            <button
              type="button"
              className="mt-3 col-2 offset-5 btn btn-primary btn-lg"
              onClick={this.onButtonClick}
              disabled={buttonDisabled}
            >
              {buttonStr}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
