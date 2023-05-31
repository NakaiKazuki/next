import axios from "axios";

// types
import { TAxiosPost } from "../types/apis";

export const axiosPost: TAxiosPost = <T>(url: string, data: T) => {
  return axios.post(url, data);
};
