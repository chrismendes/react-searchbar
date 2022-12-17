import React from 'react';
import styled from 'styled-components';
import { LayoutContainer } from '.';

const StyledFooter = styled.footer`
  padding: 30px 20px;

  font-size: 0.8em;
  color: #777777;
  background: #333333;
`;

const LayoutSiteFooter = (props) => (
  <StyledFooter>
    <LayoutContainer>

      {props.children}

    </LayoutContainer>
  </StyledFooter>
);

export default LayoutSiteFooter;