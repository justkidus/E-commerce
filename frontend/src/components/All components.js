import React from 'react';
import Body from './home/body/firstmain';
import Secondbody from './home/body2/secondbody1';
import MetaData from '../components/Nav bar/metadata';
import THIRED from './home/body3/thired';
import Dashboard from './admin/dashboard';
import { Route, Router, Routes } from 'react-router-dom';
let Allcomponents = () => {
	return (
		<>
			<div>
				<MetaData title={'Buy Best Products Online'} />
				<Body />
				<Secondbody />
				<THIRED />
			</div>
		</>
	);
};
export default Allcomponents;

// import React, { useState, useEffect, Fragment } from 'react';
// import MetaData from '../Nav bar/metadata';
// import Sidebar from './sidebar';
// import { useAlert } from 'react-alert';
// import { useDispatch, useSelector } from 'react-redux';
// import { newProduct, clearErrors } from '../../action/productActions';
// import { useNavigate } from 'react-router-dom';
// import { NEW_PRODUCT_RESET } from '../../constants/productConstant';
// let Newproduct = () => {
// 	let naviagte = useNavigate();
// 	const [name, setName] = useState('');
// 	const [price, setPrice] = useState('');
// 	const [description, setDescription] = useState('');
// 	const [category, setCategory] = useState();
// 	const [stock, setStock] = useState(0);
// 	const [seller, setSeller] = useState('');
// 	const [images, setImages] = useState([]);
// 	const [imagesPreview, setImagePreview] = useState([]);

// 	const categories = [
// 		'Electronics',
// 		'Carmeras',
// 		'Laptop',
// 		'Accessories',
// 		'Headphone',
// 		'Food',
// 		'Books',
// 		'Cloths/Shoes',
// 		'Beauty/Health',
// 		'Sports',
// 		'Outdoor',
// 		'Home',
// 		'Pets',
// 		'Furnituire',
// 		'Vehicle',
// 		'Pottery',
// 		"Toy's",
// 	];
// 	const alert = useAlert();
// 	const dispatch = useDispatch();

// 	const { loading, error, success } = useSelector((state) => state.newProduct);
// 	useEffect(() => {
// 		if (error) {
// 			alert.error(error);
// 			dispatch(clearErrors);
// 		}
// 		if (success) {
// 			naviagte('/admin/products');
// 			alert.success('product created successfully');
// 			dispatch({ type: NEW_PRODUCT_RESET });
// 		}
// 	}, [dispatch, alert, error, success]);

// 	const submitHandler = (e) => {
// 		e.preventDefault();
// 		const formData = new FormData();
// 		formData.set('name', name);
// 		formData.set('price', price);
// 		formData.set('description', description);
// 		formData.set('category', category);
// 		formData.set('stock', stock);
// 		formData.set('seller', seller);

// 		images.forEach((image) => {
// 			formData.append('images', image);
// 		});
// 		dispatch(newProduct(formData));
// 	};
// 	const onChange = (e) => {
// 		const files = Array(e.target.files);
// 		setImages([]);
// 		setImagePreview([]);

// 		files.forEach((file) => {
// 			const reader = new FileReader();

// 			reader.onload = () => {
// 				if (reader.readyState === 2) {
// 					setImages((oldArray) => [...oldArray, file]);
// 					setImagePreview((oldArray) => [...oldArray, reader.result]);
// 				}
// 			};

// 			reader.readAsDataURL(file);
// 		});
// 	};
// 	// 		files.forEach((file) => {
// 	// 			const reader = new FileReader();

// 	// 			reader.onload = () => {
// 	// 				if (reader.readyState === 2) {
// 	// 					setImages((oldArray) => [...oldArray, reader.result]);
// 	// 				}
// 	// 			};
// 	// 			reader.readAsDataURL(file);
// 	// 		});

// 	// 		// setUser({ ...user, [e.target.name]: e.target.value });
// 	// };
// 	return (
// 		<>
// 			<Fragment>
// 				<MetaData title={'New product'} />
// 				<div>
// 					<Sidebar />
// 					<div style={{ margin: '-650px 0px 0px 410px' }}>
// 						<Fragment>
// 							<div className="wrapper my-5">
// 								<form
// 									className="shadow-lg"
// 									onSubmit={submitHandler}
// 									encType="multipart/form-data"
// 								>
// 									<h1 className="mb-4">New Product</h1>

// 									<div className="form-group">
// 										<label htmlFor="name_field">Name</label>
// 										<input
// 											type="text"
// 											id="name_field"
// 											className="form-control"
// 											value={name}
// 											onChange={(e) => setName(e.target.value)}
// 										/>
// 									</div>

// 									<div className="form-group">
// 										<label htmlFor="price_field">Price</label>
// 										<input
// 											type="text"
// 											id="price_field"
// 											className="form-control"
// 											value={price}
// 											onChange={(e) => setPrice(e.target.value)}
// 										/>
// 									</div>

// 									<div className="form-group">
// 										<label htmlFor="description_field">Description</label>
// 										<textarea
// 											className="form-control"
// 											id="description_field"
// 											rows="8"
// 											value={description}
// 											onChange={(e) => setDescription(e.target.value)}
// 										></textarea>
// 									</div>

// 									<div className="form-group">
// 										<label htmlFor="category_field">Category</label>
// 										<select
// 											className="form-control"
// 											id="category_field"
// 											value={category}
// 											onChange={(e) => setCategory(e.target.value)}
// 										>
// 											{categories.map((category) => (
// 												<option key={category} value={category}>
// 													{category}
// 												</option>
// 											))}
// 										</select>
// 									</div>
// 									<div className="form-group">
// 										<label htmlFor="stock_field">Stock</label>
// 										<input
// 											type="number"
// 											id="stock_field"
// 											className="form-control"
// 											value={stock}
// 											onChange={(e) => setStock(e.target.value)}
// 										/>
// 									</div>

// 									<div className="form-group">
// 										<label htmlFor="seller_field">Seller Name</label>
// 										<input
// 											type="text"
// 											id="seller_field"
// 											className="form-control"
// 											value={seller}
// 											onChange={(e) => setSeller(e.target.value)}
// 										/>
// 									</div>

// 									<div className="form-group">
// 										<label>Images</label>

// 										<div className="custom-file">
// 											<input
// 												type="file"
// 												name="product_images"
// 												className="custom-file-input"
// 												id="customFile"
// 												onChange={onChange}
// 												multiple
// 											/>
// 											<label className="custom-file-label" htmlFor="customFile">
// 												Choose Images
// 											</label>
// 										</div>
// 										{imagesPreview.map((img, index) => (
// 											<img
// 												key={index}
// 												src={img}
// 												alt="Images Preview"
// 												className="mt-3 mr-2"
// 												width="55"
// 												height="52"
// 											/>
// 										))}
// 									</div>

// 									<button
// 										id="login_button"
// 										type="submit"
// 										className="btn btn-block py-3"
// 										disabled={loading ? true : false}
// 									>
// 										CREATE
// 									</button>
// 								</form>
// 							</div>
// 						</Fragment>
// 					</div>
// 				</div>
// 			</Fragment>
// 		</>
// 	);
// };
// export default Newproduct;
