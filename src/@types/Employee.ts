interface IRegion {
  region_id: number;
  region_description: string;
}

interface ITerritory {
  territory_id: string;
  territory_description: string;
  region_id: number;
  Region: IRegion;
}

interface IEmployee {
  employee_id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  hire_date: string;
  address: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  title: string | null;
  title_of_courtesy: string | null;
  home_phone: string | null;
  extension: string | null;
  notes: string | null;
  reports_to: number | null;
  ReportsTo: IEmployee;
  photo: Buffer | null;
}

export type { IRegion, ITerritory, IEmployee };
