import type { ParcelFeature } from '@/types/geo';

type SelectedParcelCardProps = {
	parcel: ParcelFeature | null;
};

export function SelectedParcelCard({ parcel }: SelectedParcelCardProps) {
	if (!parcel) {
		return (
			<aside className="rounded-xl border p-4">
				<h2 className="text-lg font-semibold">Selected parcel</h2>
				<p className="mt-2 text-sm text-slate-600">
					Click a parcel on the map to view its details.
				</p>
			</aside>
		);
	}

	const { name, forestType, health, carbonScore, areaHa } = parcel.properties;

	return (
		<aside className="rounded-xl border p-4">
			<h2 className="text-lg font-semibold">{name}</h2>

			<dl className="mt-4 space-y-2 text-sm">
				<div>
					<dt className="font-medium">Forest type</dt>
					<dd>{forestType}</dd>
				</div>
				<div>
					<dt className="font-medium">Health</dt>
					<dd>{health}</dd>
				</div>
				<div>
					<dt className="font-medium">Carbon score</dt>
					<dd>{carbonScore}</dd>
				</div>
				<div>
					<dt className="font-medium">Area</dt>
					<dd>{areaHa} ha</dd>
				</div>
			</dl>
		</aside>
	);
}
