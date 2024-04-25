import axios from "axios";
import { OrderBySearch, PhotoStatisticsTypes } from "./types";

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
    .get(
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
// Using the hook
