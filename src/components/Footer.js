import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px 0;
  text-align: center;
  color: #393e46;
`;

const Footer = () => {
  return (
    <FooterContainer>
      ©so0733 2023. All Rights Reserved.
    </FooterContainer>
  );
};

export default Footer;
