import type { Poetry } from "../../interfaces/poetry.response";
import { BASE_URL } from "../config/constants";

interface Body {
  title: string;
  content: string;
  category: string;
  isLiked: boolean;
}

export const likeUseCase = async (poetry: Body) => {
  try {
    const { isLiked, category, ...body } = poetry;
    const endpoint = isLiked ? "/like" : "/unlike";

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: category, ...body }),
    });

    const data = (await response.json()) as Poetry;
    return data;
  } catch (error) {
    return [];
  }
};
