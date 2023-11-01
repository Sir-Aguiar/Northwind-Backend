import { describe, expect, test } from "vitest";
import { CreateRegionUseCase } from "./create-region";
import { EntityError } from "../../entities/EntityError";

describe("Create region use-case", () => {
  test("Length business logic", async () => {
    await expect(() =>
      CreateRegionUseCase({ region_description: "Lorem ipsum dolor sit amet nec." }),
    ).rejects.toThrow(EntityError);

    expect(CreateRegionUseCase({ region_description: "Lorem ipsum dolor sit egestas." })).resolves;
    expect(CreateRegionUseCase({ region_description: "Lorem ipsum dolor sit ligula." })).resolves;
    expect(CreateRegionUseCase({ region_description: "Eastern" })).resolves;
    expect(CreateRegionUseCase({ region_description: "Western" })).resolves;
  });
});
