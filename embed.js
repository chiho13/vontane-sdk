// Function to dynamically load scripts and styles
function loadScript(src, callback) {
  const script = document.createElement("script");
  script.crossOrigin = "anonymous";
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
}

function loadStylesheet(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

// Create a callback system to ensure all scripts are loaded
function loadDependencies(callback) {
  let loadedScripts = 0;

  loadScript(
    "https://unpkg.com/react@18/umd/react.production.min.js",
    function () {
      loadedScripts++;
      if (loadedScripts === 2) callback();
    }
  );

  loadScript(
    "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    function () {
      loadedScripts++;
      if (loadedScripts === 2) callback();
    }
  );
}

loadStylesheet("https://cdn.plyr.io/3.7.8/plyr.css");
loadStylesheet("https://cdn.tailwindcss.com/..."); // Replace with actual Tailwind CSS URL

loadDependencies(function () {
  // Here, both React and ReactDOM are guaranteed to be loaded
  if (window.React && window.ReactDOM) {
    // Your initialization code here...
    document.addEventListener("DOMContentLoaded", function () {
      // Get the element
      const element = document.getElementById("my-widget-container");

      // Get the data-widget attribute
      const widgetId = element.getAttribute("data-widget");
      // Fetch data using the widgetId
      ReactDOM.render(
        React.createElement(Embed.EmbedWidget, {
          widgetId: widgetId,
        }),
        element
      );
    });
  }
});
