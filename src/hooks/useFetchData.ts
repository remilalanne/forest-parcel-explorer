'use client';

import { useQuery } from '@tanstack/react-query';

export function useFetchData<T>(url: string) {
	return useQuery<T>({
		queryKey: ['fetch-data', url],
		queryFn: async () => {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(
					`Request failed with status ${response.status}`,
				);
			}

			return (await response.json()) as T;
		},
	});
}
