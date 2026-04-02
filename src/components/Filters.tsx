import { FilterForestType } from '@/types/geo';

type FiltersProps = {
	handleFilterChange: (type: FilterForestType) => void;
	filter: FilterForestType;
};

const forestTypeList: FilterForestType[] = [
	'All',
	'Conifer',
	'Mixed',
	'Deciduous',
] as const;

export function Filters({ handleFilterChange, filter }: FiltersProps) {
	return (
		<div className="mb-4 flex gap-2">
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
	);
}
