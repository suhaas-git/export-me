export interface Inventory {
	category: string;
	sellerId: string;
	// sellerName: string;
	// sellerAgeInYears: number;
	// sellerLogo: string;
	id: string;
	item: string;
	itemDescription: string;
	features: string[];
	createdAt: string;
	type: string[];

	others: Record<string, any>;
}

export interface Gallery {
	type: 'image' | 'video';
	src: string;
	name: string;
	id: string;
}
