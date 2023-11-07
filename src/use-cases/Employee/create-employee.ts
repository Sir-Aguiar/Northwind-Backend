import { IUseCase } from "../../@types/_index";
import { EntityError } from "../../entities/EntityError";

interface IProps {
  first_name: string;
  last_name: string;
  contact_phone: string;
  birth_date: string;
  address: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  title?: string;
  title_of_courtesy?: string;
  extension?: string;
  notes?: string;
  reports_to?: number;
}

export const CreateEmployee = ({
  first_name,
  last_name,
  address,
  birth_date,
  city,
  contact_phone,
  country,
  postal_code,
  region,
  extension,
  notes,
  reports_to,
  title,
  title_of_courtesy,
}: IProps): IUseCase => {
  if (typeof first_name !== "string") {
    throw new EntityError("Invalid first name");
  }

  if (first_name.length > 10) {
    throw new EntityError("First name must have 10 or less characters");
  }

  if (typeof last_name !== "string") {
    throw new EntityError("Invalid last name");
  }

  if (last_name.length > 10) {
    throw new EntityError("Last name must have 20 or less characters");
  }

  if (typeof address !== "string") {
    throw new EntityError("Invalid address");
  }

  if (address.length > 60) {
    throw new EntityError("Address must have 60 or less characters");
  }

  if (typeof city !== "string") {
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

  if (typeof contact_phone !== "string") {
    throw new EntityError("Invalid contact phone");
  }

  if (contact_phone.length > 24) {
    throw new EntityError("Contact phone must have 24 or less characters");
  }

  if (typeof birth_date !== "string") {
    throw new EntityError("Invalid birth date");
  }

  if (extension) {
    if (typeof extension !== "string") {
      throw new EntityError("Invalid extension");
    }

    if (extension.length > 4) {
      throw new EntityError("Extension must have 4 or less characters");
    }
  }

  if (notes && typeof notes !== "string") {
    throw new EntityError("Invalid notes");
  }

  if (reports_to && typeof reports_to !== "number") {
    throw new EntityError("Invalid employee to report");
  }

  if (title) {
    if (typeof title !== "string") {
      throw new EntityError("Invalid title");
    }

    if (title.length > 30) {
      throw new EntityError("Title must have 30 or less characters");
    }
  }

  if (title_of_courtesy) {
    if (typeof title_of_courtesy !== "string") {
      throw new EntityError("Invalid title of courtesy");
    }

    if (title_of_courtesy.length > 25) {
      throw new EntityError("Title of courtesy must have 25 or less characters");
    }
  }

  const execute = async () => {
    //
  };

  return { execute };
};
