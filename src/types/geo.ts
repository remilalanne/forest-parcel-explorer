export type ParcelProperties = {
	id: string;
	name: string;
	forestType: ForestType;
	health: HealthType;
	carbonScore: number;
	areaHa: number;
};

export type ParcelFeature = GeoJSON.Feature<GeoJSON.Polygon, ParcelProperties>;
export type ParcelFeatureCollection = GeoJSON.FeatureCollection<
	GeoJSON.Polygon,
	ParcelProperties
>;

export const forestTypeList = ['Conifer', 'Mixed', 'Deciduous'] as const;
export type ForestType = (typeof forestTypeList)[number];

export const healthTypeList = ['Good', 'Average', 'Needs Attention'] as const;
export type HealthType = (typeof healthTypeList)[number];
