import { IEmployee } from "./Employee";
import { IProduct } from "./Products";

interface IShipper {
  shipper_id: number;
  company_name: string;
  phone: string;
}

interface IOrder {
  order_id: number;
  customer_id: string;
  Customer: ICustomer;
  employee_id: number;
  Employee: IEmployee;
  ship_via: number;
  Shipper: IShipper;
  order_date: Date;
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
