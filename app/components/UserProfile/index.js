import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import user from '../../images/user.svg';

export default function UserProfile(props) {

  let link = (
    <Link to={`/single?user=${props.name}`} className="btn btn-primary">
      View Profile
    </Link>
  );
  if(props.isSingle){
    link = (
      <a href={`https://github.com/${props.name}`} className="btn btn-primary">
        View GitHub Profile
      </a>
    );
  }

  return (
    <div>
      <div className="card">
        {props.photo !== undefined ? (
          <img src={props.photo} className="card-img-top" alt="" />
        ) : (
          <img src={user} className="card-img-top" />
        )}
        <div className="card-body">
          {props.name !== undefined ? (
            <h5 className="card-title">{props.name}</h5>
          ) : (
            <h5 className="card-title">Unable to find name</h5>
          )}
          {props.description !== undefined ? (
            <p className="card-text">{props.description}</p>
          ) : (
            <p className="card-text">Unable to find description</p>
          )}
          {props.name !== undefined ? (
            link
          ) : null}
        </div>
      </div>
    </div>
  );
}
