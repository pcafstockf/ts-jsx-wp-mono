// Remember, this helper is bundled into the browser by webpack and runs before anything else.
// We use it to create a known root location that we can attach our React components to.
import React from 'react';
import ReactDOM from 'react-dom';

let container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
	 React.createElement('div', {id:'react-karma-root'}),
	container
);
