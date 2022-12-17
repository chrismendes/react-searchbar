import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 40px;
`;

const LayoutContainer = (props) => (
  <StyledDiv>
    {props.children}
  </StyledDiv>
);

export default LayoutContainer;