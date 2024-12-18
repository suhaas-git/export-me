import type { Gallery } from '@shared/types/inventory';
import { escavatorData } from '@entities/escavator';
//cat-6
import { uutpData as uutpData6 } from '@entities/cat-6/uutp';
import { sfutpData as sfutpData6 } from '@entities/cat-6/sfutp';
import { futpData as futpData6 } from '@entities/cat-6/futp';
import { armouredData as asarmouredData6 } from '@entities/cat-6/armoured';
//cat-5e
import { uutpData as uutpData5e } from '@entities/cat-5e/uutp';
import { sfutpData as sfutpData5e } from '@entities/cat-5e/sfutp';
import { futpData as futpData5e } from '@entities/cat-5e/futp';
import { armouredData as asarmouredData5e } from '@entities/cat-5e/armoured';
//cate-6a
import { uutpData as uutpData6a } from '@entities/cat-6a/uutp';
import { sfutpData as sfutpData6a } from '@entities/cat-6a/sfutp';
import { futpData as futpData6a } from '@entities/cat-6a/futp';
import { armouredData as asarmouredData6a } from '@entities/cat-6a/armoured';

type CategoryId = 'heavy-machines';

const data: Record<string, any> = [
	escavatorData,
	uutpData6,
	sfutpData6,
	futpData6,
	asarmouredData6,
	uutpData5e,
	sfutpData5e,
	futpData5e,
	asarmouredData5e,
	uutpData6a,
	sfutpData6a,
	futpData6a,
	asarmouredData6a
].reduce(
	(acc, item) => {
		acc[item.basicInfo.id] = item;

		return acc;
	},
	{} as Record<string, any>
);

export async function getAllProducts() {
	return Object.values(data).map((e) => e.basicInfo);
}

export async function getDetails(id: string) {
	return data[id].details ?? [];
}

export async function getGallery(id: string): Promise<Gallery[]> {
	return data[id].gallery ?? [];
}

export async function getBasicInfo(id: string) {
	return data[id].basicInfo;
}

export default async function getData(id: CategoryId) {
	return Object.values(data)
		.filter((item) => item.basicInfo.category === id)
		.map((e) => e.basicInfo);
}
