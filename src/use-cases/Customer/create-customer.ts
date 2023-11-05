import { IUseCase } from "../../@types/_index";

interface IProps {
  company_name: string;
  address: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  phone: string;
  fax?: string;
  contact_name?: string;
  contact_title?: string;
}

export const CreateCustomer = ({
  address,
  city,
  company_name,
  country,
  phone,
  postal_code,
  region,
  contact_name,
  contact_title,
  fax,
}: IProps): IUseCase => {
  const execute = async () => {};
  return { execute };
};
