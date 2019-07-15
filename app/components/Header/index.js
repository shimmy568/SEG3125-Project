import React from 'react';
import NavBar from './NavBar';

function Header(props) {
  return (
    <NavBar name={props.name}/>
  );
}

export default Header;
