// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import { Provider } from 'react-redux';
// import store from './store';

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Provider>
// 			<App />
// 		</Provider>
// 		,
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

// index.js

import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
const options = {
	tomeout: 5000,
	position: positions.BOTTOM_CENTER,
	transitions: transitions.SCALE,
};
ReactDOM.render(
	<Provider store={store}>
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</Provider>,
	document.getElementById('root')
);
