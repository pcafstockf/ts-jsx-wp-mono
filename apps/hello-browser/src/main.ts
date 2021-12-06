import {hello} from './greet'; // Modular Stylesheet

// This is a quick little hack to demonstrate TypeScript's downleveling to es5.
// If your tsconfig targets es5 (which this does), the emitted code will be a function, not an arrow function.
// If you target > es5, the emmited code will look just like this (you can check in your browser).
try {
	var square = (num) => {
		return num * num;
	};
	console.log('Arrow function: ' + square(3));
}
catch (err) {
	console.error('Arrow function: FAILED');
}

// We load React via cdn to demonstrate
declare var ReactDOM;
ReactDOM.render(
	hello(),
	document.getElementById('hello-root')
);
