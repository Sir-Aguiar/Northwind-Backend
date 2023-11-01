import { EntityError } from "../../entities/EntityError";

interface IProps {
  first_name: string;
  last_name: string;
  title?: string;
  title_of_courtesy?: string;
  birth_date?: string;
  hire_date?: string;
  address?: string;
  city?: string;
  region?: string;
  postal_code?: string;
  country?: string;
  home_phone?: string;
  extension?: string;
  notes?: string;
  reports_to?: number;
}

export const CreateEmployeeUseCase = async ({ first_name, last_name, title, title_of_courtesy }: IProps) => {
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
