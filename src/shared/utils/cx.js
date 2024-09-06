/** clsx and twMerge */

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cx = (...args) => {
	return twMerge(clsx(...args));
};
