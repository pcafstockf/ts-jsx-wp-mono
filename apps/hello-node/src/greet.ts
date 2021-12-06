import {Location} from '@ts-wb-mono/common';

export function hello(location: string = Location): string {
	return `Hello ${location}!`;
}
