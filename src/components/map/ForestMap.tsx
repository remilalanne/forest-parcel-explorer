'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import type { ForestType, HealthType, ParcelFeature } from '@/types/geo';
import { GeoJsonLayer } from './GeoJsonLayer';
import 'leaflet/dist/leaflet.css';
import { MapLegend } from './MapLegend';

type ForestMapProps = {
	selectedParcelId: string | null;
	onSelectParcel: (feature: ParcelFeature) => void;
	types: ForestType[];
	isAutoFit: boolean;
	health: HealthType[];
};

export function ForestMap({
	selectedParcelId,
	onSelectParcel,
	types,
	isAutoFit,
	health,
}: ForestMapProps) {
	return (
		<div className="relative h-150 w-full rounded-xl overflow-hidden">
			<MapContainer center={[44.429, -1.12]} zoom={12} scrollWheelZoom>
				<TileLayer
					attribution="Tiles &copy; Esri"
					url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
				/>

				<GeoJsonLayer
					selectedParcelId={selectedParcelId}
					onSelectParcel={onSelectParcel}
					types={types}
					isAutoFit={isAutoFit}
					health={health}
				/>
			</MapContainer>

			<MapLegend />
		</div>
	);
}
