import { useEffect, useState } from "react";
import Search from "../../components/Search";
import { useQueryImage } from "../../api/images/query";
import Display from "./Display";
import { Button } from "@mui/material";
import { Map } from "@mui/icons-material";

function SearchToDisplay() {
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [displayMap, setDisplayMap] = useState(false);
  const { data, refetch } = useQueryImage({
    pageNumber: page,
    photoName: search,
  });

  console.log("🚀 ~ SearchToDisplay ~ data:", data);
  useEffect(() => {
    if (search) refetch();
  }, [activeSearch, page]);

  return (
    <div style={{ height: "100%" }}>
      <Search
        value={search}
        setValue={setSearch}
        setActiveSearch={setActiveSearch}
      />
      <Button onClick={() => setDisplayMap(!displayMap)}>
        <Map />
      </Button>
      {data && <Display setPage={setPage} items={data} page={page} />}
    </div>
  );
}

export default SearchToDisplay;
