import { useSearchParams } from "react-router-dom";
import { useQueryImage } from "../api/images/query";
import React from "react";
import { OrderBySearch } from "../api/images/types";
import Display from "./searchToDisplay/Display";

function DisplaySearchRes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 1;
  const element = searchParams.get("element") as string;
  const [pageNumber, setPageNumber] = React.useState(page);
  const [orderBy, setOrderBy] = React.useState<OrderBySearch>("latest");
  const { data, refetch } = useQueryImage({
    pageNumber,
    photoName: element ?? "",
    orderBy,
  });
  React.useEffect(() => {
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
