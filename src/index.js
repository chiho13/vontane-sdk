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
const initializeEmbedWidget = (element) => {
  const widgetId = element.getAttribute("data-vontane-widget");

  const App = () => (
    <GlobalStyles>
      <EmbedWidget key={widgetId} widgetId={widgetId} />
    </GlobalStyles>
  );

  // Use createRoot for concurrent mode
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
  element.classList.add("initialized"); // Mark this element as initialized
};

// Initialize All Widgets on the Page
const initializeAllWidgets = () => {
  document
    .querySelectorAll("div[data-vontane-widget]:not(.initialized)")
    .forEach((element) => {
      initializeEmbedWidget(element);
    });
};

// Check if the Library Has Been Loaded Before
if (!window.vontaneWidgetsInitialized) {
  window.vontaneWidgetsInitialized = true; // Mark widgets as initialized on window object
  document.addEventListener("DOMContentLoaded", initializeAllWidgets);
} else {
  console.warn("Vontane widgets have already been initialized. Skipping...");
}
