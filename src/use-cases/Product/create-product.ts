import { IUseCase } from "../../@types/_index";
import { EntityError } from "../../entities/EntityError";

interface IProps {
  product_name: string;
  supplier_id: number;
  category_id: number;
  unit_price: number;
  units_in_stock: number;
  quantity_per_unit: string;
}

export const CreateProduct = ({
  product_name,
  quantity_per_unit,
  category_id,
  supplier_id,
  unit_price,
  units_in_stock,
}: IProps): IUseCase => {
  if (typeof product_name !== "string") {
    throw new EntityError("Invalid product name");
  }

  if (product_name.length > 40) {
    throw new EntityError("Product name must have 40 or less characters");
  }

  if (typeof category_id !== "number") {
    throw new EntityError("Product must belong to a category");
  }

  if (typeof supplier_id !== "number") {
    throw new EntityError("Product must have a supplier");
  }

  if (typeof quantity_per_unit !== "string") {
    throw new EntityError("Invalid quantity per unit");
  }

  if (quantity_per_unit.length > 20) {
    throw new EntityError("Quantity per unit must have 40 or less characters");
  }

  if (typeof unit_price !== "number" || unit_price < 0) {
    throw new EntityError("Invalid unit price");
  }

  if (typeof units_in_stock !== "number" || units_in_stock < 0) {
    throw new EntityError("Invalid unit on stock");
  }

  const execute = async () => {
    //
  };

  return { execute };
};
