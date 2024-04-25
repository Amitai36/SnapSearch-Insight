import { Grid, Tab, Tabs, useMediaQuery } from "@mui/material";
import { FetchRes, OrderBySearch } from "../../api/images/types";
import CardsToDisplayImages from "../../components/Cards";
import OrderBySearchComponent from "../../components/OrderBySearchComponent";

function Display({
  items,
  setPage,
  page,
  orderBy,
  setOrderBySearch,
}: {
  items: FetchRes;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  orderBy: OrderBySearch;
  setOrderBySearch: React.Dispatch<React.SetStateAction<OrderBySearch>>;
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
      <div>
        <OrderBySearchComponent
          orderBy={orderBy}
          setOrderBySearch={setOrderBySearch}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={page}
          onChange={(_e, NV) => {
            window.sessionStorage.setItem("page", NV);
            setPage(NV);
          }}
        >
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
