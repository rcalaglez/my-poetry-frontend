import type { Poetry } from "../../interfaces/poetry.response";
import { envs } from "../config/envs";

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

    const response = await fetch(`${envs.BASE_URL}${endpoint}`, {
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
