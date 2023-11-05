import { IUseCase } from "../../@types/_index";
import { EntityError } from "../../entities/EntityError";

interface IProps {
  company_name: string;
  phone: string;
}

export const CreateShipper = ({ company_name, phone }: IProps): IUseCase => {
  if (typeof company_name !== "string" || !company_name) {
    throw new EntityError("Invalid company name");
  }

  if (company_name.length > 40) {
    throw new EntityError("Company name must have 40 our less characters");
  }

  if (typeof phone !== "string" || !phone) {
    throw new EntityError("Invalid phone");
  }
  if (phone.length > 24) {
    throw new EntityError("Phone must have 24 our less characters");
  }

  const execute = async () => {};

  return { execute };
};
