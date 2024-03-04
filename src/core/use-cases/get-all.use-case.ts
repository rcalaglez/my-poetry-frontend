import type { Poetry } from "../../interfaces/poetry.response";

export const getAllUseCase = async () => {
  try {
    const response = await fetch("http://localhost:3100/api/poetry", {
      method: "GET",
    });

    const data = (await response.json()) as Poetry[];
    return data;
  } catch (error) {
    return [];
  }
};
