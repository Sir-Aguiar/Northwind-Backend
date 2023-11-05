import { describe, expect, test } from "vitest";
import { CreateShipper } from "./create-shipper";
import { EntityError } from "../../entities/EntityError";

describe("Create shipper use-case", () => {
  test("Company name length constraint", async () => {
    expect(() => {
      CreateShipper({ company_name: "Lorem ipsum dolor sit amet viverra fusce.", phone: "Lorem ipsum" });
    }).toThrow(EntityError);

    expect(() => {
      CreateShipper({ company_name: "Lorem ipsum dolor sit amet viverra fusce.", phone: "Lorem ipsum" });
    }).toThrow(EntityError);

    expect(() => CreateShipper({ company_name: "Lorem.", phone: "Lorem ipsum" })).toBeDefined();
  });
});
