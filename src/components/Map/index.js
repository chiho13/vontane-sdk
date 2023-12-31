import React, { useState } from "react";

import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import { MapPin, Settings, Map as MapIcon } from "lucide-react";

export const EmbedMapBlock = (props) => {
  const { element } = props;

  const MAPTILER_ACCESS_TOKEN = "EeJqZWmMwWuKBDTgCto5";
  const MAP_ID = "streets-v2";

  const maptilerProvider = maptiler(MAPTILER_ACCESS_TOKEN, MAP_ID);

  const [zoom, setZoom] = useState(element.zoom || 11);

  return (
    <div className={` mb-5 mt-5 flex justify-${element.align}`}>
      <div
        className="group relative  rounded-md"
        tabIndex={-1}
        style={{
          overflow: "hidden",
          width: element.width,
          maxWidth: 710,
          height: element.height,
        }}
        data-id={element.id}
      >
        <Map
          provider={maptilerProvider}
          dprs={[1, 2]}
          center={element.latLng}
          zoom={zoom}
          attribution={false}
          onBoundsChanged={({ zoom }) => {
            setZoom(zoom);
          }}
          metaWheelZoom={true}
        >
          <ZoomControl />
          <Marker offset={[10, 15]} anchor={element.latLng}>
            <MapPin
              size={50}
              className="fill-white stroke-brand dark:fill-brand dark:stroke-white"
              // fill={isDarkMode ? "#191919" : "white"}
              strokeWidth={1.5}
            />
          </Marker>

          <a
            href="https://www.maptiler.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 left-0"
          >
            <img
              src={`https://cdn.vontane.com/images/maptiler-logo.png`}
              width={100}
              height={40}
              alt="map tiler"
            />
          </a>
          <a
            href={`https://www.google.com/maps/?q=${element.latLng[0]},${element.latLng[1]}`}
            target="_blank"
          >
            <button
              className="z-100 absolute bottom-2 right-2 h-[32px] w-[32px] border bg-accent p-0 "
              size="xs"
            >
              <MapIcon className="w-5" />
            </button>
          </a>
        </Map>
      </div>
    </div>
  );
};
