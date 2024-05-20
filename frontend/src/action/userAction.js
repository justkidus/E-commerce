import axios from 'axios';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	CLEAR_ERRORS,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	REGISTER_REQUEST,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOGOUT_FAIL,
	LOGOUT_SUCCESS,
} from '../constants/userConstants';

//login
export const login = (email, password) => async (dispatch, getState) => {
	try {
		dispatch({ type: LOGIN_REQUEST });
		// const config = {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// };
		const { data } = await axios.post('/api/v1/login', {
			email,
			password,
		});
		localStorage.setItem('user', JSON.stringify(getState().auth.user));
		// localStorage.setItem(
		// 	'cartItems',
		// 	JSON.stringify(getState().cart.cartItems)
		// );
		console.log(data);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data.message,
		});
	}
};

//Register user

export const register = (name, email, password) => async (dispatch) => {
	try {
		dispatch({ type: REGISTER_REQUEST });
		// const config = {
		// 	headers: {}, // Remove the 'Content-Type' header
		// };
		// const formData = new FormData();
		// formData.append('name', name);
		// formData.append('email', email);
		// formData.append('password', password);

		const { data } = await axios.post(
			'/api/v1/register',
			name,
			email,
			password
		);
		console.log(data);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: REGISTER_FAIL,
			payload: error.response.data.message,
		});
	}
};
//Load User

export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: LOAD_USER_REQUEST });

		const { data } = await axios.get('/api/v1/me');
		console.log(data);
		dispatch({
			type: LOAD_USER_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: LOAD_USER_FAIL,
			payload: error.response.data.message,
		});
	}
};

//LOGOUT USER

export const logout = () => async (dispatch) => {
	try {
		const { data } = await axios.get('/api/v1/logout');

		//console.log(data);
		dispatch({
			type: LOGOUT_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: LOGOUT_FAIL,
			payload: error.response.data.message,
		});
	}
};
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};
