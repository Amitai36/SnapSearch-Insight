import { useSearchParams } from "react-router-dom";
import { useQueryImage } from "../api/images/query";
import { useEffect, useState } from "react";
import { OrderBySearch } from "../api/images/types";
import Display from "./searchToDisplay/Display";

function DisplaySearchRes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 1;
  const element = searchParams.get("element") as string;
  const [pageNumber, setPageNumber] = useState(page);
  const [orderBy, setOrderBy] = useState<OrderBySearch>("latest");
  const { data, refetch } = useQueryImage({
    pageNumber,
    photoName: element ?? "",
    orderBy,
  });
  useEffect(() => {
    refetch();
  }, [orderBy, pageNumber, element]);

  return (
    <Display
      items={data}
      orderBy={orderBy}
      page={pageNumber}
      setOrderBySearch={setOrderBy}
      setPage={setPageNumber}
      setSearchParams={setSearchParams}
      element={element}
    />
  );
}

export default DisplaySearchRes;
