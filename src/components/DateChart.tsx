import {
  Card,
  CardContent,
  CardHeader,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Plot from "react-plotly.js";

import { useTranslation } from "react-i18next";
interface DateChartProps {
  x: string[] | Date[];
  y: number[];
  title: string;
  total: number;
  toolTip?: string;
}
function DateChart(props: DateChartProps) {
  const {
    t,
    "1": { language },
  } = useTranslation();
  const { palette } = useTheme();
  const mode = palette.mode;
  const textColor = mode === "dark" ? "#fff" : "black";
  const background = palette.background.default;
  const totalWord = t("total");
  const Dates = t("Dates");
  const Sum = t("Sum");
  const shortMonths = t("shortMonths");
  const months = t("months");
  const shortDays = t("shortDays");
  const days = t("days");
  const dictionary = t("dictionary");
  const { x, y, title, total, toolTip } = props;
  const locales = {
    [language]: {
      moduleType: "locale",
      name: language,
      dictionary,
      format: {
        days: days.split(","),
        shortDays: shortDays.split(","),
        months: months.split(","),
        shortMonths: shortMonths.split(","),
        date: "%d/%m/%Y",
      },
    },
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Card sx={{ height: "100%", background }}>
        <CardHeader
          sx={{ height: "5%", background }}
          title={
            <div style={{ display: "flex", justifyContent: "center" }}>
              {toolTip && (
                <Tooltip title={toolTip}>
                  <InfoIcon />
                </Tooltip>
              )}
              <Typography>
                {totalWord}: {total}
              </Typography>
            </div>
          }
        />
        <CardContent sx={{ height: "100%", width: "100%", display: "flex" }}>
          <Plot
            config={{
              locale: language,
              autosizable: true,
              locales,
              responsive: true,
              displaylogo: false,
            }}
            data={[
              {
                x,
                y,
                type: "scatter",
                marker: { color: "red" },
                name: "scatter",
              },
              {
                x,
                y,
                type: "bar",
                marker: { color: "green" },
                name: "bar",
              },
            ]}
            layout={{
              showlegend: false,
              autosize: false,
              title: {
                text: title,
                xanchor: "center",
                font: {
                  color: textColor,
                },
              },
              paper_bgcolor: mode === "dark" ? "#37414b" : background,
              plot_bgcolor: mode === "dark" ? "#37414b" : background,
              xaxis: { color: textColor, title: Dates },
              yaxis: { color: textColor, title: Sum },
              height: 400,
              width: 400,
            }}
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              display: "flex",
              position: "relative",
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default DateChart;
