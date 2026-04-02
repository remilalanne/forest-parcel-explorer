'use client';

import { useState } from 'react';
import { SelectedParcelCard } from '@/components/map/SelectedParcelCard';
import type { FilterForestType, ParcelFeature } from '@/types/geo';
import { ForestMapWrapper } from '@/components/map/MapWrapper';
import { Filters } from '@/components/Filters';

export default function HomePage() {
	const [selectedParcel, setSelectedParcel] = useState<ParcelFeature | null>(
		null,
	);
	const [filter, setFilter] = useState<FilterForestType>('All');
	const [isAutoFit, setIsAutoFit] = useState<boolean>(true);

	const handleFilterChange = (type: FilterForestType) => {
		setFilter(type);
		setSelectedParcel(null);
	};

	const handleChangeAutoFit = () => {
		setIsAutoFit((prev) => !prev);
	};

	return (
		<main className="mx-auto max-w-7xl p-6 w-full">
			<header className="mb-6">
				<h1 className="text-3xl font-bold">Forest Parcel Explorer</h1>
				<p className="mt-2 text-slate-600">
					Biscarrosse (France) forest parcels with detailed GeoJSON
					shapes.
				</p>
			</header>

			<Filters
				{...{
					filter,
					handleFilterChange,
					isAutoFit,
					handleChangeAutoFit,
				}}
			/>

			<div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
				<ForestMapWrapper
					selectedParcelId={selectedParcel?.properties.id ?? null}
					onSelectParcel={setSelectedParcel}
					filter={filter}
					isAutoFit={isAutoFit}
				/>
				<SelectedParcelCard parcel={selectedParcel} />
			</div>
		</main>
	);
}
