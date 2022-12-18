import styled from 'styled-components';

export const SearchContainer = styled.div`
`;

export const InputFieldContainer = styled.div`
  position: relative;

  &:after {
    content: '';
    display: ${props => props.showSearchIcon ? 'block' : 'none'};

    width: 20px;
    height: 22px;
    background-image: url('/icon-search.svg');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 20px;
    
    position: absolute;
    top: 9px;
    right: 8px;
  }
`;
  export const InputField = styled.input`
    width: 260px;
    padding-right: 34px;

    border: 2px solid transparent;
    outline: none;
    background: #333;
    color: #fff;

    transition: width 0.3s, background 0.3s, color: 0.3s;
    transition-timing-function: ease-out;

    &:focus {
      border: 2px solid transparent;
      background: #d0d0d0;
      color: #222;
      width: 280px;
    }
  `;
  export const CancelButton = styled.button`
    width: 20px;
    height: 100%;

    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    display: ${props => props.visible ? 'block' : 'none'};

    background-color: transparent;
    background-image: url('/icon-cross.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    border: 0;

    cursor: pointer;
  `;

export const ResultsBox = styled.div`
  width: 400px;
  min-height: 40px;
  padding: 6px;

  position: absolute;
  right: 40px;
  margin-top: 6px;

  max-height: 340px;
  overflow-y: scroll;

  background: #444;
  border-top: 0;
`;

  export const HelperText = styled.span`
    padding: 10px 20px;
    display: block;

    color: #999;
    text-align: center;
    font-size: 0.9em;
  `;

  export const Result = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;

    color: #fff;

    margin-top: 6px;

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      background: #666;
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
      color: #fff;
    `;

export const NoResultsMsg = styled.span`
  display: none;
`;
