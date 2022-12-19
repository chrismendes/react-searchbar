import styled from 'styled-components';

// Courtesy of: https://projects.lukehaas.me/css-loaders/

export const Spinner = styled.div`
  color: #777;
  font-size: 10px;
  margin: 0 auto 50px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    animation-fill-mode: both;
    animation: load7 1.8s infinite ease-in-out;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }
  &:before {
    left: -20px;
    animation-delay: -0.32s;
  }
  &:after {
    left: 20px;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;