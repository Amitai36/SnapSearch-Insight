import axios from "axios";
import {
  FetchRes,
  OrderBySearch,
  PhotoStatisticsTypes,
  UserStatisticsTypes,
} from "./types";

const idClient = process.env.UNSPLASH_KEY;

export const queryImage = async ({
  photoName,
  pageNumber,
  orderBy,
}: {
  photoName: string;
  pageNumber: number;
  orderBy: OrderBySearch;
}) => {
  const res = axios
    .get<FetchRes>(
      `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${photoName}&client_id=${idClient}&per_page=30&order_by=${orderBy}`
    )
    .then((res) => res.data);

  return res;
};

export const getPhotoStatistics = async ({ id }: { id: string }) => {
  // `https://api.unsplash.com/users/okrema/photos?client_id=${idClient}`
  const res = axios
    .get<PhotoStatisticsTypes>(
      `https://api.unsplash.com/photos/${id}/statistics?&client_id=${idClient}`
    )
    .then((res) => res.data);

  return res;
};
export const getUserStatistics = async ({ name }: { name: string }) => {
  // `https://api.unsplash.com/users/okrema/photos?client_id=${idClient}`
  const res = axios
    .get<UserStatisticsTypes>(
      `https://api.unsplash.com/users/${name}/statistics?&client_id=${idClient}`
    )
    .then((res) => res.data);

  return res;
};
export const getUserPhotos = async ({ name }: { name: string }) => {
  const res = axios
    .get<FetchRes["results"]>(
      `https://api.unsplash.com/users/${name}/photos?&client_id=${idClient}&per_page=30`
    )
    .then((res) => res.data);

  return res;
};
