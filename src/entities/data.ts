import type { Gallery, Inventory } from '@shared/types/inventory';
import {
	basicInfo,
	gallery,
	generalAppearance,
	chasis,
	controlStation,
	drivetrain,
	engine,
	hydraulics,
	safety,
	undercarriage
} from '@entities/json';

export async function getDetails(id: string): Promise<any> {
	return [
		generalAppearance,
		chasis,
		controlStation,
		drivetrain,
		engine,
		hydraulics,
		safety,
		undercarriage
	];
}

export async function getGallery(id: string): Promise<Gallery[]> {
	return gallery;
}

export async function getBasicInfo(id: string): Promise<Inventory> {
	return new Promise((resolve) => {
		// @ts-expect-error
		resolve([basicInfo].find((e) => e.id === id));
	});
}

export default async function getData(): Promise<Inventory[]> {
	return new Promise((resolve) => {
		resolve([basicInfo]);
	});
}
