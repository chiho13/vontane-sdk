import React from "react";
import ReactDOM from "react-dom/client";
import { EmbedWidget } from "./components/Embed";
import styled from "styled-components";

const GlobalStyles = styled.div`
  .katex {
    font-size: 20px;
    text-align: center;
  }

  .katex-html {
    display: none;
  }

  .answer-checkbox:checked + .correct-answer,
  .answer-checkbox:checked + .incorrect-answer {
    display: block !important;
  }

  @media print {
    .print-button {
      display: none;
    }
  }

  .plyr--audio .plyr__controls {
    background: none !important;
    gap: 5px;
  }

  .plyr--audio .plyr__control:hover,
  .plyr__control:focus-visible,
  .plyr--audio .plyr__control[aria-expanded="true"] {
    background: #eeeeee;
  }

  .plyr--audio .plyr__control {
    border-radius: 8px;
    border: none !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 30px !important;
    height: 30px !important;
  }

  .plyr--audio .plyr__control[data-plyr="play"] {
    border: 1px solid #eeeeee !important;
  }

  .plyr--full-ui input[type="range"] {
    color: #0e78ef;
  }

  .plyr--audio .plyr__control[aria-expanded="true"] svg {
    fill: #0e78ef !important;
  }

  .plyr__control svg {
    fill: #0e78ef !important;
  }

  .plyr__control:hover svg {
    fill: #f1f1f1;
  }

  .plyr--audio .plyr__control[aria-expanded="true"] svg {
    fill: #f1f1f1;
  }

  .plyr__control:focus-visible {
    outline: 2px dashed #0e78ef;
    background: #eeeeee !important;
  }

  .plyr__control:focus-visible svg {
    fill: #f1f1f1;
  }

  .plyr--full-ui input[type="range"] {
    color: #0e78ef !important;
  }

  .preview-tts p,
  .preview-tts h1,
  .preview-tts h2,
  .preview-tts h3 {
    margin: 0;
  }

  .preview-tts h1 {
    line-height: 1.5;
  }

  @keyframes grow {
    0% {
      transform: scale(0.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const App = () => {
  const widgetId = document.getElementById("app").getAttribute("data-widget");

  return (
    <GlobalStyles className="pt-6">
      <EmbedWidget key={widgetId} widgetId={widgetId} />
    </GlobalStyles>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
