import { Grid, Tab, Tabs, useMediaQuery } from "@mui/material";
import { FetchRes } from "../../api/images/types";
import CardsToDisplayImages from "../../components/Cards";

function Display({
  items,
  setPage,
  page,
}: {
  items: FetchRes;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}) {
  const matches730 = useMediaQuery("(min-width:730px)");
  const matches500 = useMediaQuery("(min-width:500px)");
  const craeteTotalPages = () => {
    const tabs = [];
    const pages = items.total_pages;
    for (let index = 1; index <= pages; index++) {
      tabs.push(
        <Tab
          value={index}
          key={index}
          sx={{ minWidth: "20px" }}
          label={`${index}`}
        />
      );
    }
    return tabs;
  };
  const tabs = craeteTotalPages();
  return (
    <div style={{ height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tabs value={page} onChange={(_e, NV) => setPage(NV)}>
          {tabs.map((tab) => tab)}
        </Tabs>
      </div>
      <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
        {items.results.map((res) => {
          return (
            <Grid key={res.id} xs={matches730 ? 4 : matches500 ? 6 : 12} item>
              <CardsToDisplayImages res={res} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Display;
