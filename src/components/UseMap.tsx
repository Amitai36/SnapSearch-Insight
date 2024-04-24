import { useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import Search from "@arcgis/core/widgets/Search";
import { useLocation } from "react-router-dom";

interface MapProps {
  location: string;
  url: string;
  description: string;
  title: string;
}

function UseMap() {
  const { state } = useLocation();
  const { description, location, title, url } = state as MapProps;
  const popupTemplate = {
    content: [
      {
        type: "media",
        title,
        mediaInfos: [
          {
            type: "image",
            caption: description,
            value: {
              sourceURL: url,
            },
          },
        ],
      },
    ],
  };

  useEffect(() => {
    const map = new Map({
      basemap: "streets-night-vector",
    });

    const view = new MapView({
      map: map, // References a Map instance
      container: "mapDiv", // References the ID of a DOM element
      zoom: 3,
    });

    view.when(() => {
      const searchAdresses = new Search({
        view,
        suggestionsEnabled: true,
        autoSelect: true,
        searchAllEnabled: true,
        resultGraphicEnabled: true,
        popupTemplate,
      });
      searchAdresses.search(location);
    });
  }, []);

  return <div id="mapDiv" style={{ height: "100%", width: "100%" }} />;
}

export default UseMap;
