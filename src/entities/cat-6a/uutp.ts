import type { Gallery, Inventory } from '@shared/types/inventory';
import dayjs from 'dayjs';

export const basicInfo: Inventory = {
	id: '6a-u-utp',
	item: 'U/UTP',
	itemDescription: 'CAT 6A U/UTP Cable',
	category: 'networking-cables',
	others: {},
	features: [],
	createdAt: dayjs().toISOString(),
	type: ['cat-6a'],
	sellerId: 'ar'
};

export const gallery: Gallery[] = [
	{
		type: 'image',
		src: 'https://orientcables.in/wp-content/uploads/2023/06/Thumb-1.png.webp',
		name: 'U/UTP Cable',
		id: 'u-utp-1'
	},
	{
		type: 'image',
		src: 'https://orientcables.in/wp-content/uploads/2023/06/Pop-up-1.png.webp',
		name: 'U/UTP Cable',
		id: 'u-utp-2'
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
		value: '23 AWG'
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
		value: '1.10 ± 0.05 mm'
	},
	pairing: {
		label: 'Pairing',
		srcId: null,
		type: 'image',
		value: 'Twisted into two core'
	},
	sheathingMaterial: {
		label: 'Sheathing Material',
		srcId: null,
		type: 'image',
		value: 'PVC/ LSZH / PE'
	},
	noiseBarrier: {
		label: 'Noise Barrier',
		srcId: null,
		type: 'image',
		value: 'Special design for AXT'
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
		value: '6.9 mm'
	}
};

export const uutpData = {
	basicInfo,
	gallery,
	details: [physicalSpecs]
};
