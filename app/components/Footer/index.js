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
    height: 7vh;
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
  //The footer keeps our help button and also a rick roll
  return (
    <FooterDiv>
      <ButtonDiv>
        <HelpButton/>
      </ButtonDiv>
      <ReportAProblem href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="float-right">
        Report a Problem
      </ReportAProblem>
    </FooterDiv>
  );
}

export default Footer;
