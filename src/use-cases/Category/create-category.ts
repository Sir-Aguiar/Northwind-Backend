import { EntityError } from "../../entities/EntityError";

interface IProps {
  category_name: string;
  description: string;
  /* picture:string */
}

export const CreateCategory = async ({ category_name, description }: IProps) => {
  if (typeof category_name !== "string") {
    throw new EntityError("Invalid category name");
  }

  if (category_name.length < 15) {
    throw new EntityError("Category name must have 15 or less characters");
  }

  if (description && typeof description !== "string") {
    throw new EntityError("Invalid category description");
  }

  const execute = async () => {
    //
  }; 

  return { execute };
};
