export interface Inventory {
	id: string;
	type: string;
	make: string;
	model: string;
	year: number;
	condition: string;
	basicInfoId: string;
	specificationsId: string;
	certificationId: string;
	componentsId: string;
	mediaGalleryId: string;
}

export interface BasicInfo {
	id: string;
	itemNumber: number;
	location: string;
	createdDate: string;
	serialNumber: string;
	meterReads: {
		value: number;
		unit: string;
	};
}
