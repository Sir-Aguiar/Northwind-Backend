import { describe, expect, test } from "vitest";
import { EntityError } from "../../entities/EntityError";
import { CreateTerritory } from "./create-territory";

describe("Create territory use-case", () => {
  test("Length business logic", async () => {
    await expect(
      CreateTerritory({
        region_id: 0,
        territory_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.",
      }),
    ).rejects.toThrow(EntityError);
    await expect(
      CreateTerritory({
        region_id: 0,
        territory_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.2",
      }),
    ).rejects.toThrow(EntityError);

    expect(CreateTerritory({ region_id: 0, territory_description: "Lorem ipsum dolor sit amet." })).resolves.toContain(
      "execute",
    );
    expect(
      CreateTerritory({ region_id: 0, territory_description: "Lorem ipsum dolor sit ameta2as56asd." }),
    ).resolves.toContain("execute");
  });
});
