import {hello} from './greet';

declare var ReactDOM;

describe('Greet', function () {
	beforeAll(() => {
		let d = document.createElement('div');
		d.id = 'hello-root';
		document.body.append(d);
	});

	it('is location aware', function () {
		ReactDOM.render(
			hello('jasmine'),
			document.getElementById('hello-root')
		);
		let elem = document.querySelector('div.rot-me');
		expect(elem).toBeTruthy();
		// @ts-ignore
		expect((elem as HTMLElement).innerText).toEqual('Hello jasmine!');
	});
});
