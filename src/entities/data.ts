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

export async function getGallery(id: string) {
	const imagesPaths = getUrlFromModule(imageModules);
	const videosPaths = getUrlFromModule(videoModules, 'video');

	const data = await Promise.all([imagesPaths, videosPaths]);

	return [].concat(data[1]).concat(data[0]);
}

export default async function getData(): Promise<Inventory[]> {
	return new Promise((resolve) => {
		resolve([
			{
				id: '1',
				item: '2024 FF Industrial FF-15 Mini Excavator - Unused',
				itemDescription: 'Excavator 210D',
				type: 'Excavator',
				meter: '5,589 hrs',
				manufacturer: 'Volvo',
				createdAt: '2024-01-01',
				location: 'Dubai, ARE',
				serial: '123456'
			}
		]);
	});
}
