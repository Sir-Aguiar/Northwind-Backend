interface ICategory {
  category_id: number;
  category_name: string;
  description: string | null;
  /*   picture: string; */
}

interface ISupplier {
  supplier_id: number;
  company_name: string;
  address: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  phone: string;
  contact_name: string | null;
  contact_title: string | null;
  fax: string | null;
  homepage: string | null;
}

interface IProduct {
  product_id: number;
  product_name: string;
  supplier_id: number;
  Supplier: ISupplier;
  category_id: number;
  Category: ICategory;
  discontinued: boolean;
  unit_price: number;
  quantity_per_unit: string;
  units_in_stock: number;
  units_on_order: number;
}

export type { ICategory, ISupplier, IProduct };
