import { IUseCase } from "../../@types/_index";

interface IProps {
  company_name: string;
  phone: string;
}

export const CreateShipper = ({}: IProps): IUseCase => {
  const execute = async () => {};

  return { execute };
};
