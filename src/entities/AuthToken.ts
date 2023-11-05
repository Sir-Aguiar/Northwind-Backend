import { IAuthorizationToken, IAuthorizationTokenPayload } from "../@types/User";
import { EntityError } from "./EntityError";

export interface ITokenProps {
  email: string;
  name: string;
  userId: string;
}
export class AuthorizationToken implements IAuthorizationToken {
  public payload: IAuthorizationTokenPayload;

  constructor({ email, name, userId }: ITokenProps) {
    if (typeof email !== "string" || email.length > 255) {
      throw new EntityError("Invalid email");
    }

    if (typeof name !== "string" || name.length > 50) {
      throw new EntityError("Invalid name");
    }

    if (typeof userId !== "number") {
      throw new EntityError("Invalid user id");
    }

    this.payload = { email, name, userId, issuedAt: new Date().getTime() };
  }

  get data() {
    const { email, name, userId, issuedAt } = this.payload;
    return { email, name, userId, issuedAt: new Date(issuedAt) };
  }
}
