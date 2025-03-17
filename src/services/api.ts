import axios from "axios";
import { Images } from "../components/types";

type ImagesPromise = {
  results: Images[];
  total_pages: number;
};

export const fetchImages = async (
  query: string,
  page: number
): Promise<ImagesPromise> => {
  const API_KEY = "ipcl1xN65DLlRNV5GNLwcNdOnWVcw9lTS0t30WzdxCA";
  const URL = "https://api.unsplash.com/search/photos";
  const { data } = await axios.get(
    `${URL}?client_id=${API_KEY}&page=${page}&query=${query}&per_page=9`
  );
  return data;
};
