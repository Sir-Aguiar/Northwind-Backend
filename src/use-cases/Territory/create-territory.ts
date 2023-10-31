import { EntityError } from "../../entities/EntityError";

interface IProps {
  region_id: number;
  territory_description: string;
}
export const CreateTerritoryUseCase = async ({ region_id, territory_description }: IProps) => {
  if (typeof territory_description !== "string") {
    throw new EntityError(`No description inserted`);
  }

  if (territory_description.length > 60) {
    throw new EntityError(`Description of a territory must have 60 characters or less`);
  }

  if (typeof region_id !== "number") {
    throw new EntityError(`Invalid region was informed to ${territory_description}`);
  }

  const execute = async () => {};

  return { execute };
};
