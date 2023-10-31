import { compareSync } from "bcrypt";
import { ServerError } from "../../entities/ServerError";
interface IncomingParams {
  sentPassword: string;
  userPassword: string;
}

export const isPasswordValid = async ({ sentPassword, userPassword }: IncomingParams) => {
  if (compareSync(sentPassword, userPassword)) {
    return true;
  } else {
    throw new ServerError(401, "Wrong password");
  }
};
