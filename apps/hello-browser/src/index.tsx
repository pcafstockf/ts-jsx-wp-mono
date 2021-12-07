import React from 'react';
import ReactDOM from 'react-dom';
import {ReportHandler} from 'web-vitals';
import {App} from './App';

// Launch the app.
ReactDOM.render(
	<App/>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log)) or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals
((onPerfEntry?: ReportHandler) => {
	if (typeof onPerfEntry === 'function') {
		// import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
		//   getCLS(onPerfEntry);
		//   getFID(onPerfEntry);
		//   getFCP(onPerfEntry);
		//   getLCP(onPerfEntry);
		//   getTTFB(onPerfEntry);
		// });
	}
})();
