import styled, { css, keyframes } from "styled-components";

const animation = keyframes`
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
`;

const animationRule = css`
  ${animation} 1.5s ease-in-out infinite;
`;

const InlineGlow = styled.div`
  animation: ${animationRule};
  color: transparent;
  cursor: progress;
`;

export { InlineGlow };
