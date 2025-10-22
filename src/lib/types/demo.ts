export type OptionType = {
  id: string;
  title: string;
  price: string;
  customizationId: string;
  image: string | null;
  supplierImage: string | null;
  supplierLink?: string | null;
  isDefault?: boolean;
  order?: number;
};

export type CustomizationType = {
  id: string;
  title: string;
  roomId: string;
  zIndex?: number;
  order?: number;
};

export type Room = {
  id: string;
  title: string;
  image: string | null;
  area?: number | null;
  customizations: CustomizationType[];
};

export type EnvironmentSelections = Record<
  string,
  Record<string, OptionType | null>
>;
