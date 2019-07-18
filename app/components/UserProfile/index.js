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
  //These are just basic hard coded values
  //It is all determined on the last character of the user name
  const descriptions = [
    'I Like coding',
    'I like photography',
    'I live in Ottawa',
    'I live in Toronto',
    'I like birds',
  ];
  const photos = [photo1, photo2, photo3, photo4, photo5];
  const colors = ["#f56942", "#ffee6e", "#a6ff6e", "#8884d8", , "#82ca9d"];
  const oppocolors = ["black", "black", "black", "black", "black"];
  const w = props.index;
  let x = parseInt(props.name[props.name.length - 1], 10) % 5;
  if(isNaN(x)){
    x = 0;
  }

  console.log(x);
  //So this link is for depending on if we send them to our internal page or if we send them to github
  let link = (
    <Link
      to={`/single?user=${props.name}`}
      className="btn btn-primary"
      style={{
        backgroundColor: colors[w],
        borderColor: colors[w],
        color: oppocolors[w],
      }}
    >
      View Profile
    </Link>
  );
  //This is where we send them to github
  if (props.isSingle) {
    link = (
      <a
        href={`https://github.com/${props.name}`}
        className="btn btn-primary"
        style={{
          backgroundColor: colors[w],
          borderColor: colors[w],
          color: oppocolors[w],
        }}
      >
        View GitHub Profile
      </a>
    );
  }
  //In here we have error handeling based on if the user name is given
  return (
    <div>
      <div style={{margin: "auto"}} className="card">
        {props.name !== undefined ? (
          <img src={photos[x]} className="card-img-top" alt="" />
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
            <p className="card-text">{descriptions[x]}</p>
          ) : (
            <p className="card-text">Unable to find description</p>
          )}
          {props.name !== undefined ? link : null}
        </div>
      </div>
    </div>
  );
}
