'use client';

import { GeoJSON } from 'react-leaflet';
import parcelData from '@/data/forest-parcels.json';
import type {
	ParcelFeature,
	ParcelFeatureCollection,
	ParcelProperties,
} from '@/types/geo';
import type { PathOptions } from 'leaflet';
import L from 'leaflet';

type GeoJsonLayerProps = {
	selectedParcelId: string | null;
	onSelectParcel: (feature: ParcelFeature) => void;
};

const data = parcelData as ParcelFeatureCollection;

function getParcelColor(carbonScore: number): string {
	if (carbonScore >= 75) return '#166534';
	if (carbonScore >= 55) return '#65a30d';
	return '#d97706';
}

function getStyle(
	feature?: GeoJSON.Feature<GeoJSON.Geometry, ParcelProperties>,
	selectedParcelId?: string | null,
): PathOptions {
	if (!feature) {
		return {
			color: '#334155',
			weight: 2,
			fillOpacity: 0.5,
		};
	}

	const isSelected = feature.properties.id === selectedParcelId;

	return {
		color: isSelected ? '#f8fafc' : '#cbd5e1',
		weight: isSelected ? 3.5 : 2,
		opacity: isSelected ? 1 : 0.9,
		lineJoin: 'round',
		fillColor: getParcelColor(feature.properties.carbonScore),
		fillOpacity: isSelected ? 0.65 : 0.5,
	};
}

export function GeoJsonLayer({
	selectedParcelId,
	onSelectParcel,
}: GeoJsonLayerProps) {
	return (
		<GeoJSON
			data={data}
			style={(feature) => getStyle(feature, selectedParcelId)}
			onEachFeature={(feature, layer) => {
				layer.on({
					click: () => {
						onSelectParcel(feature as ParcelFeature);
					},
					mouseover: () => {
						const polygon = layer as L.Path;
						polygon.setStyle({
							weight: 4,
							fillOpacity: 0.72,
						});
					},
					mouseout: () => {
						const polygon = layer as L.Path;
						polygon.setStyle(getStyle(feature, selectedParcelId));
					},
				});

				layer.bindPopup(`
          <div>
            <strong>${feature.properties.name}</strong><br/>
            Type: ${feature.properties.forestType}<br/>
            Health: ${feature.properties.health}<br/>
            Area: ${feature.properties.areaHa} ha<br/>
            Carbon score: ${feature.properties.carbonScore}
          </div>
        `);
			}}
		/>
	);
}
