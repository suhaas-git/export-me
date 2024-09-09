import type { GeneralAppearance, Inventory } from '@shared/types/inventory';
import { basicInfo, gallery, generalAppearance } from '@entities/json';

export async function getGeneralAppearence(id: string): Promise<GeneralAppearance> {
	return generalAppearance;
}

export async function getGallery(id: string) {
	return gallery;
}

export async function getDataById(id: string) {
	return new Promise((resolve) => {
		resolve([basicInfo].find((e) => e.id === id));
	});
}

export default async function getData(): Promise<Inventory[]> {
	return new Promise((resolve) => {
		resolve([basicInfo]);
	});
}
