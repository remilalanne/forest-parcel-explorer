export type ParcelProperties = {
	id: string;
	name: string;
	forestType: 'Conifer' | 'Mixed' | 'Deciduous';
	health: 'Good' | 'Average' | 'Needs Attention';
	carbonScore: number;
	areaHa: number;
};

export type ParcelFeature = GeoJSON.Feature<GeoJSON.Polygon, ParcelProperties>;
export type ParcelFeatureCollection = GeoJSON.FeatureCollection<
	GeoJSON.Polygon,
	ParcelProperties
>;
