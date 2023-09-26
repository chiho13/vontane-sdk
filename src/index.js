import React from "react";
import ReactDOM from "react-dom/client";
import { EmbedWidget } from "./components/Embed";

const App = () => {
  const widgetId = document.getElementById("app").getAttribute("data-widget");

  return (
    <div>
      <h1>Hello, Parcel and React!</h1>
      <EmbedWidget key={widgetId} widgetId={widgetId} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
