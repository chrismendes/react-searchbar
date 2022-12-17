import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;

  padding: 10px 40px;

  color: #ffffff;
  background: #1d71b8;
`;

const LayoutSiteHeader = (props) => (
  <StyledHeader>
    {props.children}
  </StyledHeader>
);

export default LayoutSiteHeader;