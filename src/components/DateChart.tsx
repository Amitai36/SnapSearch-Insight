import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Plot from "react-plotly.js";
interface DateChartProps {
  x: string[] | Date[];
  y: number[];
  title: string;
  total: number;
}
function DateChart(props: DateChartProps) {
  const { x, y, title, total } = props;
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Card sx={{ height: "100%" }}>
        <CardHeader
          sx={{ height: "5%" }}
          title={
            <Typography bgcolor={"#3c4650"} textAlign={"center"}>
              total: {total}
            </Typography>
          }
        />
        <CardContent sx={{ height: "100%", width: "100%" }}>
          <Plot
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
                  color: "#FFF",
                },
              },
              paper_bgcolor: "#37414b",
              plot_bgcolor: "#37414b",
              xaxis: { color: "#FFF", title: "Dates" },
              yaxis: { color: "#FFF", title: "Sum " },
              height: 400,
              width: 400,
            }}
            style={{ height: "100%", width: "100%" }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default DateChart;
