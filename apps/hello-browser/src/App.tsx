import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Hello} from './greet';

export const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path={'/'} element={<Hello location={'react'} />}/>
			<Route path="*" element={<Navigate to={'/'}/>}/>
		</Routes>
	</BrowserRouter>
);
