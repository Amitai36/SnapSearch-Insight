import React from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import Search from "@arcgis/core/widgets/Search";
import { useLocation } from "react-router-dom";
import * as intl from "@arcgis/core/intl.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Point from "@arcgis/core/geometry/Point";
import Polygon from "@arcgis/core/geometry/Polygon";
import LayerList from "@arcgis/core/widgets/LayerList";
import Query from "@arcgis/core/rest/support/Query";
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
  // toast.warning(t("The map is only in English"));
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
    const featureLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/IyvyFk20mB7Wpc95/arcgis/rest/services/World_countries_accessibility_indicators/FeatureServer",
      popupEnabled: true,
    });

    view.when(async () => {
      view.map.add(featureLayer);
      const searchWidget = new Search({
        view,
        suggestionsEnabled: true,
        autoSelect: true,
        searchAllEnabled: true,
        resultGraphicEnabled: true,
        // popupTemplate,
      });
      searchWidget.search(location);
      searchWidget.on("select-result", (e) => {
        const combine = Object.assign(
          {},
          e.result.feature.attributes,
          e.result.feature.popupTemplate.fieldInfos
        );
        console.log("🚀 ~ searchWidget.on ~ combine:", combine);
      });
      searchWidget.on("search-complete", async (event) => {
        // Get the first result
        const searchResult = event.results[0];
        if (searchResult && searchResult.results.length > 0) {
          // Get the geometry of the first result (assuming it's a point)
          const searchGeometry = searchResult.results[0].feature.geometry;

          // Create a point geometry object
          const point = new Point({
            x: searchGeometry.get("x"),
            y: searchGeometry.get("y"),
            spatialReference: view.spatialReference,
          });

          // Define query parameters
          const query = new Query({
            geometry: point,
            spatialRelationship: "intersects",
            outFields: ["*"], // Return all fields
            returnGeometry: true, // Return geometry of the features
          });

          // Execute the query
          featureLayer
            .queryFeatures(query)
            .then((result) => {
              // Handle query results
              const features = result.features;
              console.log(features); // Do something with the queried features
              const polygonFeature = new FeatureLayer({
                source: result.features,
                fields: result.fields,
                geometryType: "polygon",
                popupEnabled: true,
                popupTemplate: {
                  title: "hi",
                  content: [
                    {
                      type: "fields",
                      fieldInfos: result.fields.map((field) => {
                        return { fieldName: field.name, label: field.name };
                      }),
                    },
                  ],
                },
              });
              view.map.add(polygonFeature);
              console.log(searchResult);
              // searchWidget.popupTemplate = {
              //   ...popupTemplate,
              //   content: popupTemplate.content.push(
              //     polygonFeature.popupTemplate.content
              //   ).,
              // };
            })
            .catch((error) => {
              console.error("Error querying features:", error);
            });
        }
      });

      // const a = await searchWidget.search(location);
      // const geoPoint = a.results[0].results[0].feature;
      // const searchPoint = new Point({
      //   x: geoPoint?.geometry?.get("x"),
      //   y: geoPoint?.geometry?.get("y"),
      // });
      // const query = new Query({
      //   // where: "1=1",
      //   geometry: searchPoint, // Point geometry for spatial filtering
      //   spatialRelationship: "intersects", // Use 'intersects' for point-based queries
      //   outFields: ["*"], // Return all fields
      //   returnGeometry: true, // Return geometry of the features
      // });

      // featureLayer
      //   .queryFeatures(query)
      //   .then((result) => {
      //     // Handle query results
      //     const features = result.features;
      //     console.log(features); // Do something with the queried features
      //   })
      //   .catch((error) => {
      //     console.error("Error querying features:", error);
      //   });

      const layerList = new LayerList({
        view,
      });
      view.ui.add(layerList, "top-right");
    });
  }, [language]);

  return <div id="mapDiv" style={{ height: "100%", width: "100%" }} />;
}

export default UseMap;
