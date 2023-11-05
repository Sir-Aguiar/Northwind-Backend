import { EntityError } from "../../entities/EntityError";

export const CreateRegion = async ({ region_description }: { region_description: string }) => {
  if (typeof region_description !== "string") {
    throw new EntityError("Invalid region description inserted");
  }

  if (region_description.length > 30) {
    throw new EntityError("Region description must have 30 characters or less");
  }

  const execute = async () => {
    // Create
  };

  return { execute };
};
