export type ParcelProperties = {
	id: string;
	name: string;
	forestType: ForestType;
	health: 'Good' | 'Average' | 'Needs Attention';
	carbonScore: number;
	areaHa: number;
};

export type ParcelFeature = GeoJSON.Feature<GeoJSON.Polygon, ParcelProperties>;
export type ParcelFeatureCollection = GeoJSON.FeatureCollection<
	GeoJSON.Polygon,
	ParcelProperties
>;

export type ForestType = 'Conifer' | 'Mixed' | 'Deciduous';
export type FilterForestType = ForestType | 'All';
