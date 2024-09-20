import type { Gallery, Inventory } from '@shared/types/inventory';
import dayjs from 'dayjs';

export const basicInfo: Inventory = {
	id: '5e-armoured',
	item: 'Armoured',
	itemDescription: 'CAT 5e Armoured Cable',
	category: 'networking-cables',
	others: {},
	features: [],
	createdAt: dayjs().toISOString(),
	type: ['cat-5e'],
	sellerId: 'ar'
};

export const gallery: Gallery[] = [
	{
		type: 'image',
		src: 'https://orientcables.in/wp-content/uploads/2023/05/Thumb.png.webp',
		name: 'Armoured Cable',
		id: 'armoured-1'
	},
	{
		type: 'image',
		src: 'https://orientcables.in/wp-content/uploads/2023/05/Pop-up.png.webp',
		name: 'Armoured Cable',
		id: 'armoured-2'
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
		value: '0.920 ± 0.05 mm'
	},
	pairing: {
		label: 'Pairing',
		srcId: null,
		type: 'image',
		value: 'Twisted into two core'
	},
	armoring: {
		label: 'Armoring',
		srcId: null,
		type: 'image',
		value: 'Aluminum / ECCS Tape'
	},
	innerSheath: {
		label: 'Inner Sheath',
		srcId: null,
		type: 'image',
		value: 'PVC/ LSZH / PE'
	},
	outerSheathingMaterial: {
		label: 'Outer Sheathing Material',
		srcId: null,
		type: 'image',
		value: 'PVC/ LSZH / PE'
	},
	sheathingColor: {
		label: 'Sheathing Color',
		srcId: null,
		type: 'image',
		value: 'Black or Any as per requirement'
	},
	cableDiameter: {
		label: 'Cable Diameter (Approx)',
		srcId: null,
		type: 'image',
		value: '6.4 mm'
	}
};

export const armouredData = {
	basicInfo,
	gallery,
	details: [physicalSpecs]
};
