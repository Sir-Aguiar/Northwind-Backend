import { IUseCase } from "../../@types/_index";
import { EntityError } from "../../entities/EntityError";

interface IProps {
  region_id: number;
  territory_description: string;
}
export const CreateTerritory = ({ region_id, territory_description }: IProps): IUseCase => {
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
