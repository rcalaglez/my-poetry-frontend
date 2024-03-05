import type { Poetry } from "../../interfaces/poetry.response";
import { envs } from "../config/envs";

export const getAllUseCase = async () => {
  try {
    const response = await fetch(envs.BASE_URL, {
      method: "GET",
    });

    const data = (await response.json()) as Poetry[];
    return data;
  } catch (error) {
    return [];
  }
};
