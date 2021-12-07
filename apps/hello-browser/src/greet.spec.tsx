import React from 'react';
import ReactDOM from 'react-dom';
import {Hello} from './greet';

describe('Greet', function () {
	beforeAll(() => {
		let d = document.createElement('div');
		d.id = 'hello-root';
		document.body.append(d);
	});

	it('is location aware', function () {
		ReactDOM.render(<Hello location={'karma'} />, document.getElementById('hello-root'));
		let elem = document.querySelector('div.rot-me');
		expect(elem).toBeTruthy();
		// @ts-ignore
		expect((elem as HTMLElement).innerText).toEqual('Hello karma!');
	});
});
