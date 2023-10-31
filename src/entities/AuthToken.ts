import { ITokenProps } from "../@types/User";

export class AuthorizationToken {
  private props: ITokenProps;

  constructor({ email, name, userId, issuedAt }: ITokenProps) {
    this.props = { email, name, userId, issuedAt };
  }

  get payload() {
    return this.props;
  }

  get data() {
    const { email, name, userId, issuedAt } = this.props;
    return { email, name, userId, issuedAt: new Date(issuedAt) };
  }
}
