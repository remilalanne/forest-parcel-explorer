import dynamic from 'next/dynamic';

export const ForestMapWrapper = dynamic(
	() => import('@/components/map/ForestMap').then((mod) => mod.ForestMap),
	{ ssr: false },
);
