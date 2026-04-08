'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import type {
	ForestType,
	HealthType,
	ParcelFeature,
	ParcelFeatureCollection,
} from '@/types/geo';
import { GeoJsonLayer } from './GeoJsonLayer';
import 'leaflet/dist/leaflet.css';
import { MapLegend } from './MapLegend';
import { useFetchData } from '@/hooks/useFetchData';
import { MapLoading } from './MapLoading';

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
	const { data, isLoading, isError, error } =
		useFetchData<ParcelFeatureCollection>('/forest-parcels.json');

	if (isError) {
		return (
			<div className="flex h-150 w-full items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-4">
				<div className="text-center">
					<p className="text-sm font-semibold text-rose-800">
						Unable to load parcel data
					</p>
					<p className="mt-1 text-xs text-rose-700">
						{error instanceof Error
							? error.message
							: 'Unexpected error while fetching /forest-parcels.json'}
					</p>
				</div>
			</div>
		);
	}

	if (isLoading || !data) {
		return <MapLoading />;
	}

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
					data={data}
				/>
			</MapContainer>

			<MapLegend />
		</div>
	);
}
