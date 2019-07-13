import React from 'react';
import './style.css';
import Popup from 'reactjs-popup';

export default function HelpButton() {
  return (
    <div>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  			Help
		</button>
		
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  			<div class="modal-dialog" role="document">
    			<div class="modal-content">
      				<div class="modal-header">
        				<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        			</div>
      				<div class="modal-body">
        				...
      				</div>
      				<div class="modal-footer">
        				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      				</div>
    			</div>
  			</div>
		</div>
	</div>
  );
}
