import styled from 'styled-components';

export const SearchContainer = styled.div`
`;

export const InputField = styled.input`
  width: 300px;
`;

export const ResultsBox = styled.div`
  width: 400px;
  padding: 6px;

  position: absolute;
  right: 40px;

  max-height: 196px;
  overflow-y: scroll;

  background: #efefef;
  border: 1px solid #d0d0d0;
  border-top: 0;
`;

  export const Result = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 6px;

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      background: #dfdfdf;
    }
  `;
    export const ResultImageContainer = styled.div`
      display: flex;
      align-items: center;
      max-width: 60px;
      margin-right: 12px;
    `;
    export const ResultImage = styled.img`
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    `;
    export const ResultTitle = styled.span`
      color: #333;
    `;

export const NoResultsMsg = styled.span`
  display: none;
`;
