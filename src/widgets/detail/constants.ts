import type { Inventory } from '@shared/types/inventory';

export const DETAILS_TO_SHOW: {
	title: string;
	key: keyof Inventory;
}[] = [
	{
		title: 'General Appearance',
		key: 'generalAppearance'
	}
];
