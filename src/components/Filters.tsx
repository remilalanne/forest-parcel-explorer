import { FilterForestType } from '@/types/geo';

type FiltersProps = {
	handleFilterChange: (type: FilterForestType) => void;
	filter: FilterForestType;
	isAutoFit: boolean;
	handleChangeAutoFit: () => void;
};

const forestTypeList: FilterForestType[] = [
	'All',
	'Conifer',
	'Mixed',
	'Deciduous',
] as const;

export function Filters({
	handleFilterChange,
	filter,
	isAutoFit,
	handleChangeAutoFit,
}: FiltersProps) {
	return (
		<div className="mb-4 flex gap-6">
			<div className="flex gap-2">
				{forestTypeList.map((type) => (
					<button
						key={type}
						onClick={() => handleFilterChange(type)}
						className={`rounded px-3 py-1 text-sm border ${
							filter === type ? 'bg-black text-white' : 'bg-white'
						} cursor-pointer`}
					>
						{type}
					</button>
				))}
			</div>
			<div>
				<label className="inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						value=""
						checked={isAutoFit}
						className="sr-only peer"
						readOnly
					/>
					<span className="me-3 text-sm font-medium text-gray-900">
						Auto-fit
					</span>

					<div
						onClick={handleChangeAutoFit}
						className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:inset-s-0.5 after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-black"
					></div>
				</label>
			</div>
		</div>
	);
}
