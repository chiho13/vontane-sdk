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

// Initialization Function for a Single Widget
const initializeEmbedWidget = (element) => {
  const widgetId = element.getAttribute("data-widget");

  const App = () => (
    <GlobalStyles className="pt-6">
      <EmbedWidget key={widgetId} widgetId={widgetId} />
    </GlobalStyles>
  );

  // Use createRoot for concurrent mode
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
};

// Initialize All Widgets on the Page
const initializeAllWidgets = () => {
  document
    .querySelectorAll("div[data-widget]:not(.initialized)")
    .forEach((element) => {
      element.classList.add("initialized");
      initializeEmbedWidget(element);
    });
};

// Check if the Library Has Been Loaded Before
if (!window.vontaneWidget) {
  window.vontaneWidget = {
    initializeAllWidgets: initializeAllWidgets,
  };
  // If not, initialize all widgets on the page
  document.addEventListener("DOMContentLoaded", initializeAllWidgets);
} else {
  // If yes, only initialize widgets that haven't been initialized yet
  initializeAllWidgets();
}
