import React from "react";
import styled from "styled-components";

const LoadingSpinnerSVG = styled.svg`
  z-index: 2;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  animation: rotate 2s linear infinite;

  .animate-dash {
    animation: dash 1.5s ease-in-out infinite;
  }
`;

function LoadingSpinner({
  strokeColor = "stroke-gray-400 dark:stroke-white",
  width = 20,
  height = 20,
}) {
  return (
    <LoadingSpinnerSVG viewBox="0 0 50 50" width={width} height={height}>
      <circle
        className={`animate-dash ${strokeColor}`}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </LoadingSpinnerSVG>
  );
}

export default LoadingSpinner;
