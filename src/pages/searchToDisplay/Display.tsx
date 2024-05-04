import { FetchRes, OrderBySearch } from "../../api/images/types";
import OrderBySearchComponent from "../../components/OrderBySearchComponent";
import ResponsiveCardDisplay from "../ResponsiveCardDisplay";
import IndexTabs from "../../components/IndexTabs";
import LoaderCard from "../../components/LoaderCard";
import { SetURLSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Display({
  items,
  setPage,
  page,
  orderBy,
  setOrderBySearch,
  setSearchParams,
  element,
}: {
  items: FetchRes | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  orderBy: OrderBySearch;
  setOrderBySearch: React.Dispatch<React.SetStateAction<OrderBySearch>>;
  setSearchParams?: SetURLSearchParams;
  element: string;
}) {
  const { t } = useTranslation();
  const loaderCards = [<LoaderCard />, <LoaderCard />, <LoaderCard />];
  useEffect(() => {
    if (items?.results) {
      if (items.results.length === 0) {
        toast.warning(t("no data"));
      }
    }
  }, [items]);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {items?.results && items.results.length > 0 && (
        <>
          <div style={{ width: "20%" }}>
            <OrderBySearchComponent
              orderBy={orderBy}
              setOrderBySearch={setOrderBySearch}
            />
          </div>
          {/* <Stack justifyContent={"center"} display={"flex"} justifySelf={"center"}> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IndexTabs
              onChange={(_e, NV) => {
                window.sessionStorage.setItem("page", String(NV));
                setPage(NV);
                if (setSearchParams && element)
                  setSearchParams({ element: element, page: String(NV) });
              }}
              value={page}
              tabsLength={items?.total_pages ?? 100}
            />
          </div>
        </>
      )}
      <ResponsiveCardDisplay items={items?.results ?? loaderCards} />
    </div>
  );
}

export default Display;
