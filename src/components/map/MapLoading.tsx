export function MapLoading() {
	return (
		<div className="flex h-150 w-full items-center justify-center rounded-xl border bg-slate-50">
			<div className="text-center">
				<div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-700" />
				<p className="text-sm text-slate-600">Loading map…</p>
			</div>
		</div>
	);
}
