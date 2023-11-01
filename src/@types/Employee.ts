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

export type { IRegion, ITerritory };
