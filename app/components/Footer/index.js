import React from 'react';
import HelpButton from '../Help';
import styled from 'styled-components';
import UserProfile from '../UserProfile';
import './style.css';

function Footer() {
  const FooterDiv = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 60px;
    padding: 5px;
  `;
  const ReportAProblem = styled.a`
    position: absolute;
    bottom: 3px;
    right: 3px;
  `;
  return (
    <FooterDiv>
      <div className="float-left">
        <HelpButton/>
      </div>
      {/* <UserProfile name="name" photo={require('../../images/logo.png')} description='description'/> */}
      <ReportAProblem href="#" className="float-right">Report a Problem</ReportAProblem>
    </FooterDiv>

      

  );
}

export default Footer;
