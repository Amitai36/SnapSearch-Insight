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
