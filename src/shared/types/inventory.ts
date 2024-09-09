export interface Inventory {
	id: string;
	item: string;
	itemDescription: string;
	type: string;
	location: string;
	serial: string;
	createdAt: string;
	meter: string;
	manufacturer: string;
	features: string[];
}

export interface GeneralAppearance {
	[k: string]: {
		label: string;
		value: string;
		src?: string;
	};
}

export interface Gallery {
	type: 'image' | 'video';
	src: string;
	name: string;
}
