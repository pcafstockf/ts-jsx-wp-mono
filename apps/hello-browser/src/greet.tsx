import React from 'react';
import {Location} from '@ts-wb-mono/common';
import './greet.scss';

export const Hello: React.FC<{ location?: string }> = (props) => {
	return (<div className="rot-me">{`Hello ${props.location || Location}!`}</div>);
};
