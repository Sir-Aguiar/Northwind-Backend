import { IProduct } from "./Products";

interface IShipper {
  shipper_id: number;
  company_name: string;
  phone: string;
}

interface IOrder {}

interface IOrderDetails {
  order_id: number;
  Order: IOrder;
  product_id: number;
  Product: IProduct;
  unit_price: number;
  quantity: number;
  discount: number;
}

interface ICustomer {}

export type { ICustomer, IOrder, IOrderDetails, IShipper };
