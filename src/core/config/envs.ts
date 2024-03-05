import "dotenv/config";
import { get } from "env-var";

export const envs = {
  BASE_URL: get("BASE_URL").required().asString(),
};
