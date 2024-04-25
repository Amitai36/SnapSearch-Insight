import axios from "axios";
import { OrderBySearch } from "./types";

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
      `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${photoName}&client_id=${idClient}&per_page=12&order_by=${orderBy}`
    )
    .then((res) => res.data);

  return res;
};
// Using the hook
