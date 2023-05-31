import { axiosPost } from "../helpers";
import { FieldValues } from "react-hook-form";

export const postRegiser = (data: FieldValues): Promise<void> =>
  axiosPost("/api/register", data);
