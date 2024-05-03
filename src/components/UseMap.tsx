import React, { useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import Search from "@arcgis/core/widgets/Search";
import { useLocation } from "react-router-dom";
import * as intl from "@arcgis/core/intl.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Point from "@arcgis/core/geometry/Point";
import LayerList from "@arcgis/core/widgets/LayerList";
import Query from "@arcgis/core/rest/support/Query";
import { useTranslation } from "react-i18next";
import { Grid, Paper, Typography } from "@mui/material";
import ListComponent from "./ListComponent";
import ReactLoading from "react-loading";
interface MapProps {
  location: string;
  url: string;
  description: string;
  title: string;
}

function UseMap() {
  const [searchOnPolygon, setSearchOnPolygon] = useState<{
    accessMin: string;
    openPublicSpaces: string;
    publicTransportationInfrastructure: string;
    foodAndDiningServices: string;
    healthcareFacilities: string;
    educationFacilities: string;
    communitySpaces: string;
    LeisureAndCulturalFacilities: string;
  }>();
  const {
    "1": { language },
    t,
  } = useTranslation();
  intl.setLocale(language);
  const { state } = useLocation();
  const { location, title, url } = state as MapProps;
  const keys = [
    t("accessMin"),
    t("openPublicSpaces"),
    t("publicTransportationInfrastructure"),
    t("foodAndDiningServices"),
    t("healthcareFacilities"),
    t("educationFacilities"),
    t("communitySpaces"),
    t("LeisureAndCulturalFacilities"),
  ];
  const popupTemplate = {
    title: location,
    content: [
      {
        type: "media",
        title,
        mediaInfos: [
          {
            type: "image",
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
      map: map,
      container: "mapDiv",
      zoom: 3,
    });
    const detailCountry = new FeatureLayer({
      url: "https://services7.arcgis.com/IyvyFk20mB7Wpc95/arcgis/rest/services/World_countries_accessibility_indicators/FeatureServer",
      popupEnabled: true,
    });
    view.when(async () => {
      const searchWidget = new Search({
        view,
        suggestionsEnabled: true,
        autoSelect: true,
        searchAllEnabled: true,
        resultGraphicEnabled: true,
        popupTemplate,
      });
      searchWidget.search(location);
      searchWidget.on("search-complete", async (event) => {
        const searchResult = event.results[0];
        if (searchResult && searchResult.results.length > 0) {
          const searchGeometry = searchResult.results[0].feature.geometry;
          const point = new Point({
            x: searchGeometry.get("x"),
            y: searchGeometry.get("y"),
            spatialReference: view.spatialReference,
          });

          const query = new Query({
            geometry: point,
            spatialRelationship: "intersects",
            outFields: ["*"],
            returnGeometry: true,
          });
          detailCountry
            .queryFeatures(query)
            .then((result) => {
              const features = result.features;
              const data = features[0].attributes;
              setSearchOnPolygon({
                accessMin: `${(data.c_pois * 100).toFixed(0)}%`,
                openPublicSpaces: `${(data.c_active * 100).toFixed(0)}%`,
                publicTransportationInfrastructure: `${(
                  data.c_mobility * 100
                ).toFixed(0)}%`,
                foodAndDiningServices: `${(data.c_food * 100).toFixed(0)}%`,
                healthcareFacilities: `${(data.c_health * 100).toFixed(0)}%`,
                educationFacilities: `${(data.c_educatio * 100).toFixed(0)}%`,
                communitySpaces: `${(data.c_communit * 100).toFixed(0)}%`,
                LeisureAndCulturalFacilities: `${(
                  data.c_nightlif * 100
                ).toFixed(0)}%`,
              });
            })
            .catch((error) => {
              console.error("Error querying features:", error);
            });
        }
      });
      const layerList = new LayerList({
        view,
      });
      view.ui.add(layerList, "top-right");
    });
  }, [language]);

  return (
    <Grid container height={"100%"}>
      <Grid sx={{ overflowY: "scroll" }} height={"100%"} item xs={4}>
        <Typography variant="h5" textAlign={"center"} component={"span"}>
          {t("Accessibility details in the country")}
        </Typography>
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "100%",
          }}
        >
          {searchOnPolygon ? (
            <ListComponent
              listItems={{
                key: keys,
                value: Object.values(searchOnPolygon),
              }}
            />
          ) : (
            <Typography
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
            >
              <ReactLoading type="cylon" />
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid height={"100%"} item xs={8}>
        <div
          id="mapDiv"
          style={{ height: "100%", width: "100%", gridArea: "1" }}
        />
      </Grid>
    </Grid>
  );
}

export default UseMap;
