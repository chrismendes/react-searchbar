import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
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
    width: 380px;
    padding-right: 34px;

    border: 2px solid transparent;
    border-radius: 4px;
    outline: none;
    background: #333;
    color: #fff;

    transition: width 0.3s, background 0.3s, color: 0.3s;
    transition-timing-function: ease-out;

    &:focus {
      border: 2px solid transparent;
      background: #d0d0d0;
      color: #222;
      width: 400px;
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

    &:hover {
      box-shadow: inset 0 0 0 99em rgb(0 0 0 / 14%);
    }
  `;

export const ResultsBox = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  width: 400px;

  position: absolute;
  right: 40px;
  top: 54px;

  max-height: 340px;
  overflow-y: scroll;

  background: #444;
`;

  export const FeedbackMessage = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 62px;

    color: #999;
    text-align: center;
    font-size: 0.9em;
  `;

  export const Result = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;

    color: #fff;

    min-height: 106px;
    padding: 6px;

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      background: #555;
    }
  `;
    export const ResultImageContainer = styled.div`
      display: flex;
      align-items: center;
      max-width: 60px;
      margin-right: 20px;
      background: #333;
    `;
    export const ResultImage = styled.img`
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      min-width: 62px;
    `;
    export const ResultDetailsContainer = styled.div`
      display: flex;
      flex-direction: column;
    `;
    export const ResultTitle = styled.span`
      color: #FFC300;
    `;
    export const ResultAuthor = styled.span`
      color: #fff;
      font-size: 0.7em;
    `;
