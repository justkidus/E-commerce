import axios from 'axios';
import { ADD_TO_CART } from '../constants/cartconstants';
import { useDispatch } from 'react-redux';
export const addItemToCart = (id) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/v1/product/${id}`);
	dispatch({
		type: ADD_TO_CART,
		payload: {
			product: data.product._id,
			name: data.product.name,
			price: data.product.price,
			image: data.product.images[0].url,
			stock: data.product.stock,
			// quality,
		},
	});
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
	// localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
};
