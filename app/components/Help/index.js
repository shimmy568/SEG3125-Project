import React from 'react';
import './style.css';
import Popup from 'reactjs-popup';

export default function HelpButton() {
  return (
    <div>
		<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  			Help
		</button>
		
		<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  			<div className="modal-dialog" role="document">
    			<div className="modal-content">
      				<div className="modal-header">
        				<h5 className="modal-title" id="exampleModalLabel">Help Information</h5>
        			</div>
      				<div className="modal-body">
        				...
      				</div>
      				<div className="modal-footer">
        				<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      				</div>
    			</div>
  			</div>
		</div>
	</div>
  );
}
