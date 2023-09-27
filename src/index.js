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

  .preview-tts p,
  .preview-tts h1,
  .preview-tts h2,
  .preview-tts h3 {
    margin: 0;
  }

  .preview-tts h1 {
    line-height: 1.5;
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
