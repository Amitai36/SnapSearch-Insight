import { useQuery } from "react-query";
import { getPhotoStatistics, queryImage } from "./fetch";
import { QueryImageProps } from "./types";

export const useQueryImage = ({
  photoName,
  pageNumber,
  orderBy,
}: QueryImageProps) => {
  return useQuery(
    ["images", "photo", "user"],
    () => queryImage({ photoName, pageNumber, orderBy }),
    {
      enabled: false,
    }
  );
};
export const useQueryPhotoStatistics = ({ id }: { id: string }) => {
  return useQuery(["photo"], () => getPhotoStatistics({ id }), {
  });
};
