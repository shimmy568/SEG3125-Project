import React from 'react';
import HelpButton from '../Help';
import styled from 'styled-components';

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
      <ReportAProblem href="#" className="float-right">Report a Problem</ReportAProblem>
    </FooterDiv>
  );
}

export default Footer;
