import { describe, expect, test } from "vitest";
import { EntityError } from "../../entities/EntityError";
import { CreateTerritoryUseCase } from "./create-territory";

describe("Create territory use-case", () => {
  test("Length business logic", async () => {
    await expect(
      CreateTerritoryUseCase({
        region_id: 0,
        territory_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.",
      }),
    ).rejects.toThrow(EntityError);
    await expect(
      CreateTerritoryUseCase({
        region_id: 0,
        territory_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.2",
      }),
    ).rejects.toThrow(EntityError);

    expect(
      CreateTerritoryUseCase({ region_id: 0, territory_description: "Lorem ipsum dolor sit amet." }),
    ).resolves.toContain("execute");
    expect(
      CreateTerritoryUseCase({ region_id: 0, territory_description: "Lorem ipsum dolor sit ameta2as56asd." }),
    ).resolves.toContain("execute");
  });
});
