import type { Poetry } from "../../interfaces/poetry.response";
import { BASE_URL } from "../config/constants";

export const getAllUseCase = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
    });

    const data = (await response.json()) as Poetry[];
    return data;
  } catch (error) {
    return [];
  }
};
