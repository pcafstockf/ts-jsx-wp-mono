import {Location} from '@ts-wb-mono/common';
import './greet.scss';

declare var React;

export function hello(location: string = Location) {
	return (<div className="rot-me">{`Hello ${location}!`}</div>);
}
