// import { combineReducers, applyMiddleware } from 'redux';
// import { createStore } from 'redux';
// import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const reducer = combineReducers({});

// let initialState = {};

// const middleware = [thunk];
// const store = createStore(
// 	reducer,
// 	initialState,
// 	composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

// import { combineReducers, applyMiddleware, createStore } from 'redux';
// import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// // Define your reducers here if you have any
// const rootReducer = combineReducers({});

// // Initial state if needed
// const initialState = {};

// // Define middleware
// const middleware = [thunk];

// // Create store
// const store = createStore(
// 	rootReducer,
// 	initialState,
// 	composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
// import rootReducer from './reducers'; // Import your root reducer
import {
	productsReducer,
	ProductDetailsReducers,
	newProductReducer,
} from './redeucers/productreducers';
import { CartReducers } from './redeucers/cartReducers';
import { authReducer } from './redeucers/userreducer';
import { userReducer } from 'react';
const reducer = combineReducers({
	products: productsReducer,
	productsDetails: ProductDetailsReducers,
	auth: authReducer,
	// user: userReducer,
	cart: CartReducers,
	newProduct: newProductReducer,
});
const initialState = {
	cart: {
		cartItems: localStorage.getItem('cartItems')
			? JSON.parse(localStorage.getItem('cartItems'))
			: [],
	},
	auth: {
		user: localStorage.getItem('user')
			? JSON.parse(localStorage.getItem('user'))
			: null,
	},
}; // Initial state if needed

const middleware = [thunk]; // Define middleware

// Create store with Redux DevTools integration
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
