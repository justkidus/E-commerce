import axios from 'axios';
import {
	ALL_PRODUCTS_REQUEST,
	ALL_PRODUCTS_SUCCESS,
	ALL_PRODUCTS_FAIL,
	CLEAR_ERRORS,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	ADMIN_PRODUCTS_FAIL,
	ADMIN_PRODUCTS_SUCCESS,
	ADMIN_PRODUCTS_REQUEST,
	NEW_PRODUCT_FAIL,
	NEW_PRODUCT_REQUEST,
	NEW_PRODUCT_SUCCESS,
	NEW_PRODUCT_RESET,
} from '../constants/productConstant';

export const getProducts =
	(keyword = '', currentPage = 1, price) =>
	async (dispatch) => {
		try {
			dispatch({ type: ALL_PRODUCTS_REQUEST });

			let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}`;

			const { data } = await axios.get(link);
			console.log(data);
			if (data) {
				dispatch({
					type: ALL_PRODUCTS_SUCCESS,
					payload: data,
				});
			} else {
				dispatch({
					type: ALL_PRODUCTS_FAIL,
					payload: 'No data received from the API',
				});
			}
		} catch (error) {
			dispatch({
				type: ALL_PRODUCTS_FAIL,
				payload: error.response?.data?.message || 'an error occured',
			});
		}

		// dispatch({
		// 	type: CLEAR_ERRORS,
		// });
	};

export const newProduct = (productData) => async (dispatch) => {
	try {
		dispatch({ type: NEW_PRODUCT_REQUEST });

		const { data } = await axios.post('/api/v1/products/new', productData);
		console.log(data);
		dispatch({
			type: NEW_PRODUCT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: NEW_PRODUCT_FAIL,
			payload: error.response.data.message || 'an error occured',
		});
	}
};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/v1/product/${id}`);
		console.log(data);
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data.product,
		});

		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: 'No data received from the API',
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: error.response.data.message || 'an error occured',
		});
	}
};

export const getAdminProducts = () => async (dispatch) => {
	try {
		dispatch({ type: ADMIN_PRODUCTS_REQUEST });

		const { data } = await axios.get(`/api/v1/admin/products`);

		dispatch({
			type: ADMIN_PRODUCTS_SUCCESS,
			payload: data.products,
		});

		// dispatch({
		// 	type: ADMIN_PRODUCTS_FAIL,
		// 	payload: 'No data received from the API',
		// });
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: error.response.data.message || 'an error occured',
		});
	}
};
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};
