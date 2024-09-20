import type { Gallery, Inventory } from '@shared/types/inventory';
import dayjs from 'dayjs';

export const basicInfo: Inventory = {
	id: '6-f-utp',
	item: 'F/UTP',
	itemDescription: 'CAT 6 F/UTP Cable',
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
		src: 'https://orientcables.in/wp-content/uploads/2023/05/Thumb-CAT6-F-UTP.jpg.webp',
		name: 'F/UTP Cable',
		id: 'f-utp-1'
	},
	{
		type: 'image',
		src: 'https://orientcables.in/wp-content/uploads/2023/05/Pop-up-CAT6-F-UTP.jpg.webp',
		name: 'F/UTP Cable',
		id: 'f-utp-2'
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
		value: '23 AWG or 24 AWG'
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
		value: '0.980 ± 0.05 mm'
	},
	pairing: {
		label: 'Pairing',
		srcId: null,
		type: 'image',
		value: 'Twisted into two core'
	},
	shielding: {
		label: 'Shielding',
		srcId: null,
		type: 'image',
		value: '100% Covered AL Foil Tape'
	},
	drainWire: {
		label: 'Drain Wire',
		srcId: null,
		type: 'image',
		value: 'Yes'
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

export const futpData = {
	basicInfo,
	gallery,
	details: [physicalSpecs]
};