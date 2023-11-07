import { IUseCase } from "../../@types/_index";
import { EntityError } from "../../entities/EntityError";

interface IProps {
  customer_id: string;
  employee_id: number;
  ship_via: number;
  order_date?: Date;
  required_date: Date;
  shipped_date: Date;
  freight: number;
  ship_name: string;
  ship_address: string;
  ship_city: string;
  ship_region: string;
  ship_postal_code: string;
  ship_country: string;
}

export const CreateOrder = ({
  customer_id,
  employee_id,
  ship_via,
  ship_address,
  ship_city,
  ship_country,
  ship_name,
  ship_postal_code,
  ship_region,
  freight,
  required_date,
  shipped_date,
  order_date = new Date(),
}: IProps): IUseCase => {
  if (typeof customer_id !== "string" || !customer_id) {
    throw new EntityError("Invalid customer id");
  }

  if (typeof employee_id !== "number") {
    throw new EntityError("Invalid employee id");
  }

  if (typeof ship_via !== "number") {
    throw new EntityError("Invalid shipper id");
  }

  if (typeof ship_name !== "string") {
    throw new EntityError("Invalid name");
  }

  if (ship_name.length > 60) {
    throw new EntityError("Name must have 60 or less characters");
  }

  if (typeof ship_address !== "string") {
    throw new EntityError("Invalid address");
  }

  if (ship_address.length > 60) {
    throw new EntityError("Address must have 60 or less characters");
  }

  if (typeof ship_city !== "string") {
    throw new EntityError("Invalid city");
  }

  if (ship_city.length > 60) {
    throw new EntityError("City must have 15 or less characters");
  }

  if (typeof ship_region !== "string") {
    throw new EntityError("Invalid region");
  }

  if (ship_region.length > 15) {
    throw new EntityError("Region must have 15 or less characters");
  }

  if (typeof ship_postal_code !== "string") {
    throw new EntityError("Invalid postal code");
  }

  if (ship_postal_code.length > 10) {
    throw new EntityError("Postal code must have 10 or less characters");
  }

  if (typeof ship_country !== "string") {
    throw new EntityError("Invalid country");
  }

  if (ship_country.length > 15) {
    throw new EntityError("Country must have 15 or less characters");
  }

  if (typeof freight !== "number") {
    throw new EntityError("Invalid freight");
  }

  const execute = async () => {};
  return { execute };
};
