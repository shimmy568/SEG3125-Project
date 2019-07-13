import React from 'react';
import './style.css';
import Popup from 'reactjs-popup';

export default function HelpButton() {
  return (
    <Popup
      trigger={
        <div className="help-button">
          <p className="help-question-mark">?</p>
        </div>
      }
      modal
      closeOnDocumentClick
    >
      <span>
        <h1>Trouble Shooting</h1>
        <p>
          Our website allows for us to compare github accounts vs other github
          accounts
        </p>
      </span>
    </Popup>
  );
}
