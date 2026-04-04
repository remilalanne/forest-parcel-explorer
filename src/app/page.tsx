'use client';

import { useState } from 'react';
import { SelectedParcelCard } from '@/components/map/SelectedParcelCard';
import {
	ForestType,
	forestTypeList,
	HealthType,
	healthTypeList,
	type ParcelFeature,
} from '@/types/geo';
import { ForestMapWrapper } from '@/components/map/MapWrapper';
import { Filters } from '@/components/Filters';

export default function HomePage() {
	const [selectedParcel, setSelectedParcel] = useState<ParcelFeature | null>(
		null,
	);
	const [types, setTypes] = useState<ForestType[]>([...forestTypeList]);
	const [health, setHealth] = useState<HealthType[]>([...healthTypeList]);
	const [isAutoFit, setIsAutoFit] = useState<boolean>(true);

	const handleTypesChange = (type: ForestType) => {
		setTypes((prev) =>
			prev.includes(type)
				? prev.filter((item) => item !== type)
				: [...prev, type],
		);
		setSelectedParcel(null);
	};

	const handleHealthChange = (health: HealthType) => {
		setHealth((prev) =>
			prev.includes(health)
				? prev.filter((item) => item !== health)
				: [...prev, health],
		);
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
					types,
					handleTypesChange,
					isAutoFit,
					handleChangeAutoFit,
					health,
					handleHealthChange,
				}}
			/>

			<div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
				<ForestMapWrapper
					selectedParcelId={selectedParcel?.properties.id ?? null}
					onSelectParcel={setSelectedParcel}
					types={types}
					isAutoFit={isAutoFit}
					health={health}
				/>
				<SelectedParcelCard parcel={selectedParcel} />
			</div>
		</main>
	);
}
