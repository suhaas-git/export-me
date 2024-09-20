import type { Filter } from '@shared/types/filter';

export const networkingFilter = [
	{
		label: 'All',
		value: 'all'
	},
	{
		label: 'CAT-5E',
		value: 'cat-5e'
	},
	{
		label: 'CAT-6',
		value: 'cat-6'
	}
];

export const heavyMachinesFilter = [
	{
		label: 'All',
		value: 'all'
	},
	{
		label: 'Escavator',
		value: 'escavator'
	}
];

const data: Record<string, Filter[]> = {
	'networking-cables': networkingFilter,
	'heavy-machines': heavyMachinesFilter
};

export async function getFilter(id: string) {
	return data[id];
}
