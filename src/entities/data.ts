import type { Inventory } from '@shared/types/inventory';

const imageModules = import.meta.glob('@shared/assets/images/*');
const videoModules = import.meta.glob('@shared/assets/videos/*');

async function getUrlFromModule(module: typeof imageModules, type = 'image') {
	const promises: Promise<{ default: string }>[] = [];

	for (const modulePath in module) {
		const p = module[modulePath]() as any;
		promises.push(p);
	}

	return (await Promise.all(promises)).map((e) => {
		return {
			type,
			url: e.default
		};
	});
}

export default async function getData(): Promise<Inventory[]> {
	const imagesPaths = getUrlFromModule(imageModules);
	const videosPaths = getUrlFromModule(videoModules, 'video');

	const data = await Promise.all([imagesPaths, videosPaths]);

	return new Promise((resolve) => {
		resolve([
			{
				item: '2024 FF Industrial FF-15 Mini Excavator - Unused',
				itemDescription: 'Excavator 210D',
				type: 'Excavator',
				features: [
					{
						label: 'Meter',
						value: '5,589 hrs'
					},
					{
						label: 'Manufacturer',
						value: 'Volvo'
					}
				],
				gallery: [].concat(data[1]).concat(data[0])
			},
			{
				item: '2022 Caterpillar 950M Wheel Loader',
				itemDescription: 'CAT 950M Loader',
				type: 'Wheel Loader',
				features: [
					{
						label: 'Meter',
						value: '3,210 hrs'
					},
					{
						label: 'Manufacturer',
						value: 'Caterpillar'
					},
					{
						label: 'Bucket Capacity',
						value: '5.5 cu yd'
					}
				],
				gallery: [].concat(data[1]).concat(data[0])
			},
			{
				item: '2023 John Deere 310L Backhoe Loader',
				itemDescription: 'JD 310L Backhoe',
				type: 'Backhoe Loader',
				features: [
					{
						label: 'Meter',
						value: '1,850 hrs'
					},
					{
						label: 'Manufacturer',
						value: 'John Deere'
					},
					{
						label: 'Digging Depth',
						value: '14 ft 3 in'
					}
				],
				gallery: [].concat(data[1]).concat(data[0])
			},
			{
				item: '2021 Komatsu PC490LC-11 Hydraulic Excavator',
				itemDescription: 'Komatsu PC490LC-11 Excavator',
				type: 'Excavator',
				features: [
					{
						label: 'Meter',
						value: '4,720 hrs'
					},
					{
						label: 'Manufacturer',
						value: 'Komatsu'
					},
					{
						label: 'Operating Weight',
						value: '105,670 lb'
					}
				],
				gallery: [].concat(data[1]).concat(data[0])
			},
			{
				item: '2020 Freightliner Cascadia 126 Day Cab Truck Tractor',
				itemDescription: 'Freightliner Cascadia 126',
				type: 'Truck Tractor',
				features: [
					{
						label: 'Odometer',
						value: '450,000 mi'
					},
					{
						label: 'Manufacturer',
						value: 'Freightliner'
					},
					{
						label: 'Engine',
						value: 'Detroit DD15 14.8L'
					}
				],
				gallery: [].concat(data[1]).concat(data[0])
			}
		]);
	});
}
