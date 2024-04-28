import { useQuery } from "react-query";
import {
  getPhotoStatistics,
  getUserPhotos,
  getUserStatistics,
  queryImage,
} from "./fetch";
import { QueryImageProps } from "./types";

export const useQueryImage = ({
  photoName,
  pageNumber,
  orderBy,
}: QueryImageProps) => {
  return useQuery(
    ["images", "photo", "user"],
    () => queryImage({ photoName, pageNumber, orderBy }),
  );
};
export const useQueryPhotoStatistics = ({ id }: { id: string }) => {
  return useQuery(
    ["photo", "statistics"],
    () => getPhotoStatistics({ id }),
    {}
  );
};
export const useQueryUserStatistics = ({ name }: { name: string }) => {
  return useQuery(["photo", "statistics"], () => getUserStatistics({ name }));
};
export const useQueryUserPhotos = ({ name }: { name: string }) => {
  return useQuery(["photo", "user"], () => getUserPhotos({ name }));
};
