import dayjs from 'dayjs';
import ar from '@shared/assets/images/ar.png';

export type Seller = {
	id: string;
	name: string;
	age: number;
	sellerLogo: string;
};

export const sellers: Seller[] = [
	{
		id: 'ar',
		name: 'AR Enterprise',
		age: dayjs().startOf('year').diff(dayjs().subtract(20, 'years').startOf('year'), 'years'),
		sellerLogo: ar
	}
];

export async function getSellerById(id: string) {
	return sellers.find((seller) => seller.id === id) as Seller;
}
