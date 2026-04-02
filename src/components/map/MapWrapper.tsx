import dynamic from 'next/dynamic';
import { MapLoading } from './MapLoading';

export const ForestMapWrapper = dynamic(
	() => import('@/components/map/ForestMap').then((mod) => mod.ForestMap),
	{
		ssr: false,
		loading: () => <MapLoading />,
	},
);
