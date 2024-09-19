import type { Gallery } from '@shared/types/inventory';
import { escavatorData } from '@entities/escavator';

type Id = 'cat-escavator';
type CategoryId = 'heavy-machines';

const data: Record<Id, any> = {
	'cat-escavator': escavatorData
};

export async function getDetails(id: Id) {
	return data[id].details;
}

export async function getGallery(id: Id): Promise<Gallery[]> {
	return data[id].gallery;
}

export async function getBasicInfo(id: Id) {
	console.log(data, id);
	return data[id].basicInfo;
}

export default async function getData(id: CategoryId) {
	return Object.values(data).map((item) => {
		if (item.basicInfo.category === id) {
			return item.basicInfo;
		}
	});
}
