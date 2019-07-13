import React from 'react';
import './style.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

export default function UserProfile(User) {
    return (
    <div>
        <div class="card">
            {User.photo !== undefined ? (
                <img src={User.photo} class="card-img-top" alt=''/>
            ) : (
                <img src={logo} class="card-img-top"/>
            )}
            <div class="card-body">
                {User.name !== undefined ? (
                    <h5 class="card-title">{User.name}</h5>
                ) : (
                    <h5 class="card-title">Unable to find name</h5>
                )}
                {User.description !== undefined ? (
                    <p class="card-text">{User.description}</p>
                ) : (
                    <p class="card-text">Unable to find description</p>
                )}
                {User.name !== undefined ? (
                    <Link to={`/profile/${User.name}`} class="btn btn-primary">View Profile</Link>
                ) : (
                    null
                )}
            </div>
        </div>
    </div>
    );
}