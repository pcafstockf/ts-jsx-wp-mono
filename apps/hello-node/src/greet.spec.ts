import {hello} from './greet';

describe('Greet', function () {
	it('is location aware', function () {

		expect(hello('jasmine')).toEqual('Hello jasmine!');
	});
});
