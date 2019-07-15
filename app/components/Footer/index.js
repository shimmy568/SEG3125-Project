import React from 'react';
import styled from 'styled-components';
import HelpButton from '../Help';
import UserProfile from '../UserProfile';

function Footer() {
  const FooterDiv = styled.div`
    position: relative;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
  `;
  const ReportAProblem = styled.a`
    position: absolute;
    bottom: 3px;
    right: 3px;
  `;
  const ButtonDiv = styled.div`
    position: absolute;
    bottom: 3px;
    left: 3px;
  `;
  return (
    <FooterDiv>
      <ButtonDiv>
        <HelpButton/>
      </ButtonDiv>
      {/* <UserProfile name="name" photo={require('../../images/logo.png')} description='description'/> */}
      <ReportAProblem href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="float-right">
        Report a Problem
      </ReportAProblem>
    </FooterDiv>
  );
}

export default Footer;
