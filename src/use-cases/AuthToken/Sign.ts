import "dotenv/config";
import { sign } from "jsonwebtoken";
import { AuthorizationToken } from "../../entities/AuthToken";

export const SignAuthToken = ({ payload }: AuthorizationToken) => {
  return sign(payload, process.env.TOKEN_SECRET!, { expiresIn: 60 * 60 * 6 });
};
