import { IUseCase } from "../../@types/_index";
import { EntityError } from "../../entities/EntityError";

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
  if (typeof company_name !== "string" || !company_name) {
    throw new EntityError("Invalid company name");
  }

  if (company_name.length > 40) {
    throw new EntityError("Company name must have 40 our less characters");
  }

  if (typeof address !== "string" || !address) {
    throw new EntityError("Invalid address");
  }

  if (address.length > 60) {
    throw new EntityError("Address must have 60 or less characters");
  }

  if (typeof city !== "string" || !city) {
    throw new EntityError("Invalid city");
  }

  if (city.length > 15) {
    throw new EntityError("City must have 15 or less characters");
  }

  if (typeof region !== "string") {
    throw new EntityError("Invalid region");
  }

  if (region.length > 15) {
    throw new EntityError("Region must have 15 or less characters");
  }

  if (typeof postal_code !== "string") {
    throw new EntityError("Invalid postal code");
  }

  if (postal_code.length > 10) {
    throw new EntityError("Postal code must have 10 or less characters");
  }

  if (typeof country !== "string") {
    throw new EntityError("Invalid country");
  }

  if (country.length > 15) {
    throw new EntityError("Country must have 15 or less characters");
  }

  if (typeof phone !== "string" || !phone) {
    throw new EntityError("Invalid phone");
  }
  if (phone.length > 24) {
    throw new EntityError("Phone must have 24 our less characters");
  }

  if (contact_name) {
    if (typeof contact_name !== "string") {
      throw new EntityError("Invalid contact name");
    }

    if (contact_name.length > 40) {
      throw new EntityError("Contact name must have 40 or less characters");
    }
  }

  if (contact_title) {
    if (typeof contact_title !== "string") {
      throw new EntityError("Invalid contact title");
    }

    if (contact_title.length > 30) {
      throw new EntityError("Contact title must have 30 or less characters");
    }
  }

  if (fax) {
    if (typeof fax !== "string") {
      throw new EntityError("Invalid fax");
    }

    if (fax.length > 24) {
      throw new EntityError("Fax must have 24 or less characters");
    }
  }

  const execute = async () => {};

  return { execute };
};
