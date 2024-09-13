export interface Inventory {
	sellerName: string;
	sellerAgeInYears: number;
	sellerLogo: string;
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

export interface Gallery {
	type: 'image' | 'video';
	src: string;
	name: string;
	id: string;
}
