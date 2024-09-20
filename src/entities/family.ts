import type { Family, FamilyDetail } from '@shared/types/family';

const cableFamily: Family[] = [
	{
		id: 'networking',
		name: 'Networking Cables',
		src: 'https://orientcables.in/wp-content/uploads/2023/06/Networking-Cables.png.webp',
		href: '/networking-cables'
	},
	{
		id: 'optical-fibre',
		name: 'Optical Fibre Cables',
		src: 'https://orientcables.in/wp-content/uploads/2023/06/Optical-Fiber-Cables.png.webp',
		href: '/optical-fiber-cables'
	},
	{
		id: 'copper-terminated',
		name: 'Copper Terminated Assemblies',
		src: 'https://orientcables.in/wp-content/uploads/2023/09/Copper-Terminated-Assemblies.png.webp',
		href: '/copper-terminated-assemblies'
	},
	{
		id: 'optical-fibre-terminated',
		name: 'Optical Fibre Terminated Assemblies',
		src: 'https://orientcables.in/wp-content/uploads/2023/09/Optical-Fiber-Terminated-Assemblies.png.webp',
		href: '/optical-fiber-terminated-assemblies'
	},
	{
		id: 'coaxial',
		name: 'Coaxial Cables',
		src: 'https://orientcables.in/wp-content/uploads/2023/06/Coaxial-Cables.png.webp',
		href: '/coaxial-cables'
	},
	{
		id: 'telecommunication',
		name: 'Telecommunication Cables',
		src: 'https://orientcables.in/wp-content/uploads/2023/06/Telecommunication-Cables.png.webp',
		href: '/telecommunication-cables'
	},
	{
		id: 'solar',
		name: 'Solar DC Wire',
		src: 'https://orientcables.in/wp-content/uploads/2023/06/Instrumentation-Cables.png.webp',
		href: '/solar-dc-wire'
	},
	{
		id: 'power-cables',
		name: 'Power Cables',
		src: 'https://orientcables.in/wp-content/uploads/2023/06/Power-Cables.png.webp',
		href: '/power-cables'
	}
];

const cableFamilyDetail: FamilyDetail = {
	name: 'Cables',
	id: 'cables',
	description:
		'Orient Cables offers a wide range of networking cables that are designed to meet the requirements of modern networking systems. Our networking cables are designed to provide high-speed data transmission and are available in various categories like CAT 5e, CAT 6, CAT 6A, CAT 7, and CAT 8. These cables are manufactured using high-quality materials and are tested to ensure that they meet the highest standards of quality and performance. Our networking cables are available in various lengths and configurations to meet the needs of different networking systems. Whether you need cables for your home or office network, Orient Cables has the right solution for you.'
};

const families: Record<
	string,
	{
		family: Family[];
		detail: FamilyDetail;
	}
> = {
	cables: {
		family: cableFamily,
		detail: cableFamilyDetail
	}
};

export async function getFamily(id: string) {
	return families[id];
}
