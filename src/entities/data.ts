import type { Inventory } from '@shared/types/inventory';

const imageModules = import.meta.glob('@shared/assets/images/*');
const videoModules = import.meta.glob('@shared/assets/videos/*');

async function getUrlFromModule(module: typeof imageModules, type = 'image') {
	const promises: Promise<{ default: string }>[] = [];

	console.log(module);

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
				gallery: [].concat(data[0]).concat(data[1])
			}
		]);
	});
}
