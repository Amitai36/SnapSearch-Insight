import React, { useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import Search from "@arcgis/core/widgets/Search";
import { useLocation } from "react-router-dom";
import * as intl from "@arcgis/core/intl.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Point from "@arcgis/core/geometry/Point";
import Query from "@arcgis/core/rest/support/Query";
import { useTranslation } from "react-i18next";
import { Grid, Paper, Typography, useTheme } from "@mui/material";
import ListComponent from "./ListComponent";
import ReactLoading from "react-loading";

interface MapProps {
  location: string;
  url: string;
  description: string;
  title: string;
}

const detailCountry = new FeatureLayer({
  url: "https://services7.arcgis.com/IyvyFk20mB7Wpc95/arcgis/rest/services/World_countries_accessibility_indicators/FeatureServer",
  popupEnabled: true,
});

const parsePrasage = (number: number) => {
  return `${(number * 100).toFixed()}%`;
};

function UseMap() {
  const {
    palette: { mode },
  } = useTheme();
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
      basemap: mode === "dark" ? "streets-night-vector" : "streets-vector",
    });

    const view = new MapView({
      map,
      container: "mapDiv",
      zoom: 3,
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
                accessMin: parsePrasage(data.c_pois),
                openPublicSpaces: parsePrasage(data.c_active),
                publicTransportationInfrastructure: parsePrasage(
                  data.c_mobility
                ),
                foodAndDiningServices: parsePrasage(data.c_food),
                healthcareFacilities: parsePrasage(data.c_health),
                educationFacilities: parsePrasage(data.c_educatio),
                communitySpaces: parsePrasage(data.c_communit),
                LeisureAndCulturalFacilities: parsePrasage(data.c_nightlif),
              });
            })
            .catch((error) => {
              console.error("Error querying features:", error);
            });
        }
      });
    });
  }, [language, mode]);

  return (
    <Grid container height={"100%"}>
      <Grid sx={{ overflowY: "scroll" }} height={"100%"} item xs={4}>
        <Typography variant="h5" textAlign={"center"} component={"span"}>
          {t("Accessibility details in the country")}
        </Typography>
        <Paper
          sx={{
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
