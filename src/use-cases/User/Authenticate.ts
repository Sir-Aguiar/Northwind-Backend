import { compareSync } from "bcrypt";
import { DecodeMessage } from "../../utils/decode-message";
import { ServerError } from "../../entities/ServerError";

export const isPasswordValid = async (encondedEmail: string, encodedPassword: string) => {
  const sentEmail = DecodeMessage(encondedEmail);
  const sentPassword = DecodeMessage(encodedPassword);

  const userData = {} as any;

  if (!userData) {
    throw new ServerError(404, "No user was found with this e-mail");
  }

  if (compareSync(sentPassword, userData.password)) {
    return true;
  } else {
    throw new ServerError(401, "Wrong password");
  }
};
