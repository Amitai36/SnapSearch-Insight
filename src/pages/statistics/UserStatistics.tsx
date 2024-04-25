import { useParams } from "react-router-dom";
import { useQueryUserStatistics } from "../../api/images/query";
import DateChart from "../../components/DateChart";
import { HistoricalType } from "../../api/images/types";
import { Grid, Typography } from "@mui/material";

const getDatesAndValues = (data: HistoricalType | undefined) => {
  const dates = data?.values.map(
    (value) => new Date(new Date(value.date).setHours(0))
  );
  const values = data?.values.map((value) => value.value);
  return { dates, values };
};

function UserStatistics() {
  const { name } = useParams();
  const { data, isLoading } = useQueryUserStatistics({
    name: name as string,
  });
  const views = data?.views;
  const downloads = data?.downloads;

  const { dates: viewDates, values: viewValues } = getDatesAndValues(
    views?.historical
  );

  const { dates: downloadsDates, values: downloadsValues } = getDatesAndValues(
    downloads?.historical
  );
  const sumAllDatesCharts = [
    {
      total: views?.total ?? 0,
      title: "Views by dates last month",
      x: viewDates ?? [],
      y: viewValues ?? [],
      information: "average is: " + views?.historical?.average,
    },
    {
      total: downloads?.total ?? 0,
      title: "Downloads by dates last month",
      x: downloadsDates ?? [],
      y: downloadsValues ?? [],
      information: "average is: " + downloads?.historical?.average,
    },
  ];
  return (
    <>
      {isLoading ? (
        <Typography>Loading</Typography>
      ) : (
        <div>
          <Typography height={"5%"} variant="h6" textAlign={"center"}>
            user: {data?.username}
          </Typography>
          <Grid height={"90%"} container spacing={2}>
            {sumAllDatesCharts.map((chart, index) => (
              <Grid key={index} item xs={6}>
                <DateChart
                  title={chart.title}
                  total={chart.total}
                  x={chart.x}
                  y={chart.y}
                  toolTip={chart.information}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
}

export default UserStatistics;
