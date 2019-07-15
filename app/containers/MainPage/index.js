import React from 'react';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import update from 'react-addons-update'; // ES6
import * as toastr from 'toastr';

class MainPage extends React.Component {

  /**
   * The constructor for the main page
   */
  constructor() {
    super();
    this.state = {
      inpCount: 1,
      inpContent: [''],
    };
  }

  /**
   * Add an input to the page
   */
  addInput() {

    // Increase the number of inputs and add another item to the array
    // To store the value of the input
    const inp = this.state.inpContent;
    inp.push('');
    this.setState({
      inpCount: this.state.inpCount + 1,
      inpContent: inp,
    });
  }


  /**
   * Removes an input from the page
   */
  removeInput() {

    // Don't remove an input if it's the last one on the page
    if(this.state.inpCount == 1){
      return;
    }
    
    // remove the input from the page
    const inp = this.state.inpContent;
    inp.pop();
    this.setState({
      inpCount: this.state.inpCount - 1,
      inpContent: inp,
    });
  }

  /**
   * Update the username state when the inputs are updated
   * 
   * @param {object} event The event object passed from the event
   */
  updateUsername(event) {
    const index = parseInt(event.target.getAttribute('index'));
    const newStr = event.target.value;
    const updateQuery = {};
    updateQuery[index] = { $set: newStr };
    this.setState({
      inpContent: update(this.state.inpContent, updateQuery),
    });
  }

  /**
   * The event that gets triggered when the submit button is clicked
   */
  buttonClick() {
    // Check that the button is supposed to be pressed
    // If not show an error instead of navigating forward
    let valid = true;
    for(let i = 0; i < this.state.inpCount; i++){
      if(this.state.inpContent[i] == ""){
        valid = false;
      }
    }

    // Display the error message if need be
    if(!valid){
      toastr.error("Some username fields are still empty.");
      return;
    }

    // Redirect the user to the correct page based on how many inputs there are on the page
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

  // Binding all the functions to the current class
  onUpdateUsername = this.updateUsername.bind(this);
  onAddInput = this.addInput.bind(this);
  onRemoveInput = this.removeInput.bind(this);
  onButtonClick = this.buttonClick.bind(this);

  render() {

    // Create the list of inputs elements
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

    // Deciding what text the button should display
    let buttonStr = 'View';
    if (this.state.inpCount > 1) {
      buttonStr = 'Compare';
    }

    // Checking if the user is able to add more inputs
    let addUserHref = "#";
    let addUserStyle = null;
    if(this.state.inpCount >= 5){
      addUserHref = null;
      addUserStyle = {color: "gray", cursor: "not-allowed"};
    }

    // Checking if the user is able to remove more inputs
    let removeUserHref = "#";
    let removeUserStyle = null;
    if(this.state.inpCount == 1){
      removeUserHref = null;
      removeUserStyle = {color: "gray", cursor: "not-allowed"};
    }

    return (
      <div style={{height: '93vh'}}>
        <Header />
        <div className="container mt-4">
          <div className="row text-center mb-3">
            <div className="col-4 offset-4">
              <a onClick={addUserHref == null ? undefined : this.onAddInput} style={addUserStyle} href={addUserHref}>
                Add User
              </a>
              &nbsp;
              <a onClick={removeUserHref == null ? undefined : this.onRemoveInput} style={removeUserStyle} href={removeUserHref}>
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
            >
              {buttonStr}
            </button>
            <h3 className="text-center mt-4" style={{width: "100%"}}>Welcome to StatsHub. Select GitHub username(s) to see some stats</h3>
          </div>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
