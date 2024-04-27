import { useEffect, useState } from "react";
import Search from "../../components/Search";
import { useQueryImage } from "../../api/images/query";
import Display from "./Display";
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
  const [orderBySearch, setOrderBySearch] = useState<OrderBySearch>(
    sessionOrderBy ?? "latest"
  );
  const { data, refetch } = useQueryImage({
    pageNumber: page,
    photoName: search,
    orderBy: orderBySearch,
  });

  useEffect(() => {
    if (search) {
      window.sessionStorage.setItem("search", search);
      refetch();
    }
  }, [search, refetch, activeSearch, page, orderBySearch]);

  return (
    <div style={{ height: "100%" }}>
      <Search
        value={search}
        setValue={setSearch}
        setActiveSearch={setActiveSearch}
        setPage={setPage}
      />
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
