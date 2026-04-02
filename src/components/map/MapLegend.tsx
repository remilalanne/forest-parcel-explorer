export function MapLegend() {
	return (
		<div className="absolute z-500 bottom-4 left-4 bg-white p-3 rounded shadow text-sm">
			<h4 className="font-semibold mb-2">Carbon Score</h4>
			<div className="flex items-center gap-2">
				<span className="w-4 h-4 bg-green-800 inline-block"></span> High
			</div>
			<div className="flex items-center gap-2">
				<span className="w-4 h-4 bg-lime-600 inline-block"></span>{' '}
				Medium
			</div>
			<div className="flex items-center gap-2">
				<span className="w-4 h-4 bg-orange-500 inline-block"></span> Low
			</div>
		</div>
	);
}
