'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import type { ParcelFeature } from '@/types/geo';
import { GeoJsonLayer } from './GeoJsonLayer';
import 'leaflet/dist/leaflet.css';
import { MapLegend } from './MapLegend';

type ForestMapProps = {
	selectedParcelId: string | null;
	onSelectParcel: (feature: ParcelFeature) => void;
	filter: string;
};

export function ForestMap({
	selectedParcelId,
	onSelectParcel,
	filter,
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
					filter={filter}
				/>
			</MapContainer>

			<MapLegend />
		</div>
	);
}
