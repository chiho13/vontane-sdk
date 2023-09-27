import React, { useEffect, useState } from "react";

// import { ModeToggle } from "@/components/mode-toggle";
import { AudioManagerProvider } from "../context/AudioContext";
import { parseNodes } from "../helpers/renderHelper";

import { ThemeProvider } from "styled-components";
import LoadingSpinner from "../icons/LoadingSpinner";
import { nanoid } from "nanoid";

export const EmbedWidget = ({ widgetId }) => {
  const [localValue, setLocalValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState({
    brandColor: "#0E78EF", // initial default value
    accentColor: "#e9e9e9",
  });
  const [font, setFont] = useState("font-sans");
  useEffect(() => {
    fetch(`https://app.vontane.com/api/widget?id=${widgetId}`)
      .then((response) => response.json()) // Parsing the JSON data to JavaScript object
      .then((data) => {
        console.log(data);
        // console.log(JSON.parse(data.workspace.slate_value));

        const parsedSlateValue = JSON.parse(data.workspace.slate_value);
        console.log(parsedSlateValue);
        console.log(data.workspace.brand_color);
        setCurrentTheme({
          brandColor: data.workspace.brand_color || "#0E78EF",
          accentColor: "#e9e9e9",
        });
        setLocalValue(parsedSlateValue);
        setLoading(false);
        setFont(data.workspace.font_style);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [widgetId]);

  //   return <div>Hello</div>;
  return (
    <div>
      {localValue ? (
        <ThemeProvider theme={currentTheme}>
          <AudioManagerProvider>
            <div className="published">
              <div
                className={`relative  overflow-y-auto bg-white  dark:bg-[#191919] `}
              >
                <div className=" relative mx-auto mb-4 max-w-[675px]">
                  {parseNodes(localValue, font)}
                </div>
              </div>

              <div className="fixed right-4 top-4  z-10  hidden gap-2 xl:flex">
                {/* <button onClick={handleToggleView}>Toggle View</button> */}
              </div>
            </div>
          </AudioManagerProvider>
        </ThemeProvider>
      ) : (
        <div className="absolute inset-0 flex -translate-y-[30px] items-center justify-center">
          <LoadingSpinner
            width={50}
            height={50}
            strokeColor="stroke-blue-500 dark:stroke-white"
          />
        </div>
      )}
    </div>
  );
};
