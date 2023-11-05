interface IAuthorizationTokenPayload {
  email: string;
  name: string;
  userId: string;
  issuedAt: number;
}

interface IAuthorizationTokenData extends Omit<IAuthorizationTokenPayload, "issuedAt"> {
  issuedAt: Date;
}

interface IAuthorizationToken {
  payload: IAuthorizationTokenPayload;
  data: IAuthorizationTokenData;
}

export type { IAuthorizationToken, IAuthorizationTokenPayload, IAuthorizationTokenData };
