export interface Inventory {
	item: string;
	itemDescription: string;
	type: string;
	features: {
		label: string;
		value: string;
	}[];
	gallery: {
		type: string;
		url: string;
	}[];
}
