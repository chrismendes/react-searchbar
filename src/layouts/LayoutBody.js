import React from 'react';
import styled from 'styled-components';
import { LayoutContainer } from '.';

const StyledMain = styled.main`
  background: #444;
`;

const LayoutBody = (props) => (
  <StyledMain>
    <LayoutContainer>

      {props.children}

    </LayoutContainer>
  </StyledMain>
);

export default LayoutBody;