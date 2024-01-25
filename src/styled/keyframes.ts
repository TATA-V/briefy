import { keyframes } from 'styled-components';

export const fadeInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(5px);
    width: 80%;
  }
  100% {
    opacity: 1;
    transform: none;
    width: 100%;
  }
`;
