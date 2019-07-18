import React from 'react';
import './style.css';
import Popup from 'reactjs-popup';

//This is our help button it uses boostrap modal for the pop up the help is just some random information

export default function HelpButton() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Help
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Trouble Shooting
              </h5>
            </div>
            <div className="modal-body">
              Are you experiencing issues. Have you tried refreshing the browser?
              <br/>
              <br/>
              If you are having an issue with two users having the same photo try, putting a random int at the end of their name            
              </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
