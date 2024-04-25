import { useEffect, useState } from "react";
import Search from "../../components/Search";
import { useQueryImage } from "../../api/images/query";
import Display from "./Display";
import { Button } from "@mui/material";
import { Map } from "@mui/icons-material";
import { OrderBySearch } from "../../api/images/types";

function SearchToDisplay() {
  const sessionSearch = window.sessionStorage.getItem("search") ?? "";
  const sessionPage = window.sessionStorage.getItem("page");
  const sessionOrderBy = window.sessionStorage.getItem("orderBy") as
    | OrderBySearch
    | undefined;
  const [search, setSearch] = useState(sessionSearch);
  const [activeSearch, setActiveSearch] = useState(false);
  const [page, setPage] = useState(sessionPage ? parseInt(sessionPage) : 1);
  const [displayMap, setDisplayMap] = useState(false);
  const [orderBySearch, setOrderBySearch] = useState<OrderBySearch>(
    sessionOrderBy ?? "latest"
  );
  const { data, refetch } = useQueryImage({
    pageNumber: page,
    photoName: search,
    orderBy: orderBySearch,
  });

  useEffect(() => {
    console.log("🚀 ~ SearchToDisplay ~ data:", data);
    if (search) {
      window.sessionStorage.setItem("search", search);
      refetch();
    }
  }, [activeSearch, page, orderBySearch]);

  return (
    <div style={{ height: "100%" }}>
      <Search
        value={search}
        setValue={setSearch}
        setActiveSearch={setActiveSearch}
        setPage={setPage}
      />
      <Button onClick={() => setDisplayMap(!displayMap)}>
        <Map />
      </Button>
      {data && (
        <Display
          orderBy={orderBySearch}
          setOrderBySearch={setOrderBySearch}
          setPage={setPage}
          items={data}
          page={page}
        />
      )}
    </div>
  );
}

export default SearchToDisplay;
