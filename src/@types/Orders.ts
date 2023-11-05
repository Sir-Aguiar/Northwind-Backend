import { IEmployee } from "./Employee";
import { IProduct } from "./Products";

interface IShipper {
  shipper_id: number;
  company_name: string;
  phone: string;
}

interface IOrder {
  customer_id: string;
  Customer: ICustomer;
  employee_id: number;
  Employee: IEmployee;
  ship_via: number;
  Shipper: IShipper;
}

interface IOrderDetails {
  order_id: number;
  Order: IOrder;
  product_id: number;
  Product: IProduct;
  unit_price: number;
  quantity: number;
  discount: number;
}

interface ICustomer {
  customer_id: string;
  company_name: string;
  address: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  phone: string;
  fax?: string;
  contact_name?: string;
  contact_title?: string;
}

export type { ICustomer, IOrder, IOrderDetails, IShipper };
