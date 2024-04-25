import { useLocation, useParams } from "react-router-dom";
import { useQueryPhotoStatistics } from "../../api/images/query";
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

function PhotoStatistics() {
  const { photoId } = useParams();
  const {
    state: { url },
  } = useLocation();
  const { data, isLoading } = useQueryPhotoStatistics({
    id: photoId as string,
  });
  const views = data?.views;
  const downloads = data?.downloads;
  const likes = data?.likes;
  const { dates: viewDates, values: viewValues } = getDatesAndValues(
    views?.historical
  );
  const { dates: downloadsDates, values: downloadsValues } = getDatesAndValues(
    downloads?.historical
  );
  const { dates: likesDates, values: likesValues } = getDatesAndValues(
    likes?.historical
  );
  const sumAllDatesCharts = [
    {
      total: views?.total ?? 0,
      title: "Views by dates last month",
      x: viewDates ?? [],
      y: viewValues ?? [],
    },
    {
      total: likes?.total ?? 0,
      title: "Likes by dates last month",
      x: likesDates ?? [],
      y: likesValues ?? [],
    },
    {
      total: downloads?.total ?? 0,
      title: "Downloads by dates last month",
      x: downloadsDates ?? [],
      y: downloadsValues ?? [],
    },
  ];
  return (
    <>
      {isLoading ? (
        <img src={url} />
      ) : (
        <div
          style={{
            height: "100%",
            backgroundImage: `url(${url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Typography height={"5%"} variant="h6" textAlign={"center"}>
            slug: {data?.slug}
          </Typography>
          <Grid height={"90%"} container spacing={2}>
            {sumAllDatesCharts.map((chart, index) => (
              <Grid key={index} item xs={4}>
                <DateChart
                  title={chart.title}
                  total={chart.total}
                  x={chart.x}
                  y={chart.y}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
}

export default PhotoStatistics;
