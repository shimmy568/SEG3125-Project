import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export default function UserProfile(User) {
  return (
    <div>
      <div className="card">
        {User.photo !== undefined ? (
          <img src={User.photo} className="card-img-top" alt="" />
        ) : (
          <img src={logo} className="card-img-top" />
        )}
        <div className="card-body">
          {User.name !== undefined ? (
            <h5 className="card-title">{User.name}</h5>
          ) : (
            <h5 className="card-title">Unable to find name</h5>
          )}
          {User.description !== undefined ? (
            <p className="card-text">{User.description}</p>
          ) : (
            <p className="card-text">Unable to find description</p>
          )}
          {User.name !== undefined ? (
            <Link to={`/single?user=${User.name}`} class="btn btn-primary">
              View Profile
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
