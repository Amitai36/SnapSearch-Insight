import { Tab, Tabs } from "@mui/material";
import { FetchRes, OrderBySearch } from "../../api/images/types";
import OrderBySearchComponent from "../../components/OrderBySearchComponent";
import ResponsiveCardDisplay from "../ResponsiveCardDisplay";
import IndexTabs from "../../components/IndexTabs";

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
        <IndexTabs
          onChange={(_e, NV) => {
            window.sessionStorage.setItem("page", NV);
            setPage(NV);
            
          }}
          setPage={setPage}
          value={page}
          tabsLength={items.total_pages}
        />
      </div>
      <ResponsiveCardDisplay items={items.results} />
    </div>
  );
}

export default Display;
