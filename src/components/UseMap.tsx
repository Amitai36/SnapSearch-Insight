import React from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import Search from "@arcgis/core/widgets/Search";
import { useLocation } from "react-router-dom";
import * as intl from "@arcgis/core/intl.js";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
interface MapProps {
  location: string;
  url: string;
  description: string;
  title: string;
}

function UseMap() {
  const {
    "1": { language },
    t,
  } = useTranslation();
  intl.setLocale(language);
  toast.warning(t("The map is only in English"));
  const { state } = useLocation();
  const { description, location, title, url } = state as MapProps;
  const popupTemplate = {
    title: location,
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

  React.useEffect(() => {
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
  }, [language]);

  return <div id="mapDiv" style={{ height: "100%", width: "100%" }} />;
}

export default UseMap;
