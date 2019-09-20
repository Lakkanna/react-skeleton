import React from "react";
// @ts-ignore
import styled from "styled-components";

const InlineGlow = styled.div`
  animation: glow 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
  border-radius: 40px;
  @keyframes glow {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }
`;

export { InlineGlow };
