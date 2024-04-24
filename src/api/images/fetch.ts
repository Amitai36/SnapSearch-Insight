import axios from "axios";
import { QueryImageProps } from "./types";

const idClient = process.env.UNSPLASH_KEY;

export const queryImage = async ({
  photoName,
  pageNumber,
}: {
  photoName: string;
  pageNumber: number;
}) => {
  const res = axios
    .get(
      `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${photoName}&client_id=${idClient}`
    )
    .then((res) => res.data);

  return res;
};
// Using the hook
