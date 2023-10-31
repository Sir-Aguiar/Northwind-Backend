import { randomUUID } from "crypto";

export class UniqueID {
  static generate(prefix?: string) {
    return `${prefix}-${randomUUID()}`;
  }
}
