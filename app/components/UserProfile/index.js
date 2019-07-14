import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { tsPropertySignature } from '@babel/types';
import logo from '../../images/logo.png';
import photo1 from '../../images/profilepic1.png';
import photo2 from '../../images/profilepic2.png';
import photo3 from '../../images/profilepic3.png';
import photo4 from '../../images/profilepic4.png';
import photo5 from '../../images/profilepic5.png';

export default function UserProfile(props) {
  const descriptions = [
    'I Like coding',
    'I like photography',
    'I live in Ottawa',
    'I live in Toronto',
    'I like birds',
  ];
  const photos = [photo1, photo2, photo3, photo4, photo5];
  const colors = ['red', 'blue', 'pink', 'yellow', 'green'];
  const oppocolors = ['white', 'white', 'black', 'black', 'white'];
  const w = parseInt(props.name[props.name.length - 1], 10) % 5;

  let link = (
    <Link
      to={`/single?user=${props.name}`}
      class="btn btn-primary"
      style={{
        backgroundColor: colors[w],
        borderColor: colors[w],
        color: oppocolors[w],
      }}
    >
      View Profile
    </Link>
  );
  if (props.isSingle) {
    link = (
      <Link
        to={`https://github.com/${props.name}`}
        class="btn btn-primary"
        style={{
          backgroundColor: colors[w],
          borderColor: colors[w],
          color: oppocolors[w],
        }}
      >
        View Profile
      </Link>
    );
  }

  return (
    <div>
      <div className="card">
        {props.name !== undefined ? (
          <img src={photos[w]} className="card-img-top" alt="" />
        ) : (
          <img src={user} className="card-img-top" />
        )}
        <div className="card-body">
          {props.name !== undefined ? (
            <h5 className="card-title">{props.name}</h5>
          ) : (
            <h5 className="card-title">Unable to find name</h5>
          )}
          {props.name !== undefined ? (
            <p className="card-text">{descriptions[w]}</p>
          ) : (
            <p className="card-text">Unable to find description</p>
          )}
          {props.name !== undefined ? link : null}
        </div>
      </div>
    </div>
  );
}
