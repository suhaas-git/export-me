import type { Gallery, Inventory } from '@shared/types/inventory';
import dayjs from 'dayjs';

export const basicInfo: Inventory = {
	id: '6-sf-utp',
	item: 'SF/UTP',
	itemDescription: 'CAT 6 SF/UTP Cable',
	category: 'networking-cables',
	others: {},
	features: [],
	createdAt: dayjs().toISOString(),
	type: ['cat-6'],
	sellerId: 'ar'
};

export const gallery: Gallery[] = [
	{
		type: 'image',
		src: 'https://orientcables.in/wp-content/uploads/2023/05/Thumb-CAT6-SF-UTP.jpg.webp',
		name: 'SF/UTP Cable',
		id: 'sf-utp-1'
	},
	{
		type: 'image',
		src: 'https://orientcables.in/wp-content/uploads/2023/05/Pop-up-CAT6-SF-UTP.jpg.webp',
		name: 'SF/UTP Cable',
		id: 'sf-utp-2'
	}
];

export const physicalSpecs = {
	label: 'Physical Specifications',
	conductor: {
		label: 'Conductor',
		srcId: null,
		type: 'image',
		value: 'Solid Bare Electrolytic Grade Copper'
	},
	conductorSize: {
		label: 'Conductor Size',
		srcId: null,
		type: 'image',
		value: '24 AWG'
	},
	insulation: {
		label: 'Insulation',
		srcId: null,
		type: 'image',
		value: 'Polyolefin'
	},
	insulationSize: {
		label: 'Insulation Size',
		srcId: null,
		type: 'image',
		value: '1.02 ± 0.05 mm'
	},
	pairing: {
		label: 'Pairing',
		srcId: null,
		type: 'image',
		value: 'Twisted into two core'
	},
	shieldingTape: {
		label: 'Shielding Tape',
		srcId: null,
		type: 'image',
		value: '100% Covered with Foil Tape'
	},
	braiding: {
		label: 'Braiding',
		srcId: null,
		type: 'image',
		value: 'Braiding with ATC wire'
	},
	sheathingMaterial: {
		label: 'Sheathing Material',
		srcId: null,
		type: 'image',
		value: 'PVC/ LSZH / PE'
	},
	sheathingColor: {
		label: 'Sheathing Color',
		srcId: null,
		type: 'image',
		value: 'Grey (RAL 7035) or Any as per requirement'
	},
	cableDiameter: {
		label: 'Cable Diameter (Approx)',
		srcId: null,
		type: 'image',
		value: '6.7 mm'
	}
};

export const sfutpData = {
	basicInfo,
	gallery,
	details: [physicalSpecs]
};
