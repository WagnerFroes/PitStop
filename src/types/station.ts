export type FuelType =
  | "gasolina_comum"
  | "gasolina_aditivada"
  | "etanol"
  | "diesel_s10";

export interface FuelPrice {
  type: FuelType;
  price: number;
  lastUpdated: Date;
}

export type StationService =
  | "conveniencia"
  | "gelo"
  | "banheiro"
  | "calibrador"
  | "lava_rapido"
  | "pix"
  | "cartao"
  | "24h";

export interface Station {
  id: string;
  name: string;
  brand: string;
  address: string;
  neighborhood: string;
  city: string;
  distanceInKm: number;
  rating: number;
  reviewsCount: number;
  isOpen: boolean;
  lastUpdatedAt: Date;
  services: StationService[];
  fuelPrices: FuelPrice[];
}
