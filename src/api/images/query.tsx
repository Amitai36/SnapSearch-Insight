import { useQuery } from "react-query";
import { queryImage } from "./fetch";
import { QueryImageProps } from "./types";

export const useQueryImage = ({
  photoName,
  pageNumber,
  orderBy,
}: QueryImageProps) => {
  return useQuery(
    "images",
    () => queryImage({ photoName, pageNumber, orderBy }),
    {
      enabled: false,
    }
  );
};
