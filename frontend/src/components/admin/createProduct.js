import React, { useState, useEffect, Fragment } from 'react';
import MetaData from '../Nav bar/metadata';
import Sidebar from './sidebar';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { newProduct, clearErrors } from '../../action/productActions';
import { useNavigate } from 'react-router-dom';
import { NEW_PRODUCT_RESET } from '../../constants/productConstant';
let CreateProduct = () => {
	let naviagte = useNavigate();
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState();
	const [stock, setStock] = useState(0);
	const [seller, setSeller] = useState('');
	const [images, setImages] = useState([]);
	const [imagesPreview, setImagePreview] = useState([]);

	const categories = [
		'Electronics',
		'Carmeras',
		'Laptop',
		'Accessories',
		'Headphone',
		'Food',
		'Books',
		'Cloths/Shoes',
		'Beauty/Health',
		'Sports',
		'Outdoor',
		'Home',
		'Pets',
		'Furnituire',
		'Vehicle',
		'Pottery',
		"Toy's",
	];
	const alert = useAlert();
	const dispatch = useDispatch();

	const { loading, error, success } = useSelector((state) => state.newProduct);
	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors);
		}
		if (success) {
			naviagte('/admin/products');
			alert.success('product created successfully');
			dispatch({ type: NEW_PRODUCT_RESET });
		}
	}, [dispatch, alert, error, success, naviagte]);

	const submitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name', 'e');
		formData.set('price', price);
		formData.set('description', description);
		formData.set('category', category);
		formData.set('stock', stock);
		formData.set('seller', seller);

		images.forEach((image) => {
			formData.append('images', image);
		});
		console.log(formData);
		dispatch(newProduct(formData));
	};
	const onChange = (e) => {
		const files = Array.from(e.target.files);
		setImagePreview([]);
		setImages([]);
		files.forEach((file) => {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setImagePreview((oldArray) => [...oldArray, reader.result]);
					setImages((oldArray) => [...oldArray, reader.result]);
				}
			};
			reader.readAsDataURL(file);
		});

		// setUser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<>
			<Fragment>
				<MetaData title={'New product'} />
				<div style={{ marginTop: '200px' }}>
					<div style={{ margin: '0px 0px 0px 0px' }}>
						<Fragment>
							<div className="wrapper my-5">
								<form
									className="shadow-lg"
									onSubmit={submitHandler}
									encType="multipart/form-data"
								>
									<h1 className="mb-4">Create Product</h1>
									<br />
									<div className="form-group">
										<label for="name_field">Name :</label>

										<input
											type="text"
											id="name_field"
											className="form-control"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<br />
									<div className="form-group">
										<label for="price_field">Price :</label>
										<input
											type="text"
											id="price_field"
											className="form-control"
											value={price}
											onChange={(e) => setPrice(e.target.value)}
										/>
									</div>

									<div className="form-group">
										<label for="description_field">Description</label>
										<textarea
											className="form-control"
											id="description_field"
											rows="8"
											value={description}
											onChange={(e) => setDescription(e.target.value)}
										></textarea>
									</div>

									<div className="form-group">
										<label for="category_field">Category</label>
										<select
											className="form-control"
											id="category_field"
											value={category}
											onChange={(e) => setCategory(e.target.value)}
										>
											{categories.map((category) => (
												<option key={category} value={category}>
													{category}
												</option>
											))}
										</select>
									</div>
									<div className="form-group">
										<label for="stock_field">Stock</label>
										<input
											type="number"
											id="stock_field"
											className="form-control"
											value={stock}
											onChange={(e) => setStock(e.target.value)}
										/>
									</div>

									<div className="form-group">
										<label htmlFor="seller_field">Seller Name</label>
										<input
											type="text"
											id="seller_field"
											className="form-control"
											value={seller}
											onChange={(e) => setSeller(e.target.value)}
										/>
									</div>

									<div className="form-group">
										<label>Images</label>

										<div className="custom-file">
											<input
												type="file"
												name="product_images"
												className="custom-file-input"
												id="customFile"
												onChange={onChange}
												multiple
											/>
											<label className="custom-file-label" htmlFor="customFile">
												Choose Images
											</label>
										</div>
										{imagesPreview.map((img) => (
											<img src={img} key={img} alt="" className="mt-3 mr-2" />
										))}
									</div>

									<button
										id="login_button"
										type="submit"
										className="btn btn-block py-3"
										disabled={loading ? true : false}
									>
										CREATE
									</button>
								</form>
							</div>
						</Fragment>
					</div>
				</div>
			</Fragment>
		</>
	);
};
export default CreateProduct;

// const CreateProduct = () => {
// 	let naviagte = useNavigate();
// 	const [name, setName] = useState('');
// 	const [price, setPrice] = useState('');
// 	const [description, setDescription] = useState('');
// 	const [category, setCategory] = useState();
// 	const [stock, setStock] = useState(0);
// 	const [seller, setSeller] = useState('');
// 	const [images, setImages] = useState([]);
// 	const [imagesPreview, setImagePreview] = useState([]);
// 	const submitHandler = async (e) => {
// 		e.preventDefault();

// 		const formData = new FormData();
// 		formData.append('name', name);
// 		formData.append('price', price);
// 		formData.append('description', description);
// 		formData.append('category', category);
// 		formData.append('stock', stock);
// 		formData.append('seller', seller);

// 		// Append images to formData
// 		images.forEach((image) => {
// 			formData.append('images', image);
// 		});

// 		try {
// 			// Dispatch action to create new product
// 			await dispatch(newProduct(formData));

// 			// If successful, reset form and show success message
// 			setName('');
// 			setPrice('');
// 			setDescription('');
// 			setCategory('');
// 			setStock(0);
// 			setSeller('');
// 			setImages([]);
// 			setImagePreview([]);

// 			alert.success('Product created successfully');
// 			navigate('/admin/products');
// 		} catch (error) {
// 			// If there's an error, show error message
// 			alert.error(error.response.data.message);
// 		}
// 	};

// 	const onChange = (e) => {
// 		const files = Array.from(e.target.files);
// 		setImagePreview([]);
// 		setImages([]);
// 		files.forEach((file) => {
// 			const reader = new FileReader();
// 			reader.onload = () => {
// 				if (reader.readyState === 2) {
// 					setImagePreview((oldArray) => [...oldArray, reader.result]);
// 					setImages((oldArray) => [...oldArray, file]);
// 				}
// 			};
// 			reader.readAsDataURL(file);
// 		});
// 	};

// 	return (
// 		<Fragment>
// 			<MetaData title={'New product'} />
// 			<div style={{ marginTop: '200px' }}>
// 				<div style={{ margin: '0px 0px 0px 0px' }}>
// 					<div className="wrapper my-5">
// 						<form
// 							className="shadow-lg"
// 							onSubmit={submitHandler}
// 							encType="multipart/form-data"
// 						>
// 							<h1 className="mb-4">Create Product</h1>
// 							<br />
// 							<div className="form-group">
// 								<label htmlFor="name_field">Name :</label>
// 								<input
// 									type="text"
// 									id="name_field"
// 									className="form-control"
// 									value={name}
// 									onChange={(e) => setName(e.target.value)}
// 								/>
// 							</div>
// 							<br />
// 							<div className="form-group">
// 								<label htmlFor="price_field">Price :</label>
// 								<input
// 									type="text"
// 									id="price_field"
// 									className="form-control"
// 									value={price}
// 									onChange={(e) => setPrice(e.target.value)}
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<label htmlFor="description_field">Description</label>
// 								<textarea
// 									className="form-control"
// 									id="description_field"
// 									rows="8"
// 									value={description}
// 									onChange={(e) => setDescription(e.target.value)}
// 								></textarea>
// 							</div>
// 							<div className="form-group">
// 								<label htmlFor="category_field">Category</label>
// 								<select
// 									className="form-control"
// 									id="category_field"
// 									value={category}
// 									onChange={(e) => setCategory(e.target.value)}
// 								>
// 									<option value="">Select category</option>
// 									{categories.map((category) => (
// 										<option key={category} value={category}>
// 											{category}
// 										</option>
// 									))}
// 								</select>
// 							</div>
// 							<div className="form-group">
// 								<label htmlFor="stock_field">Stock</label>
// 								<input
// 									type="number"
// 									id="stock_field"
// 									className="form-control"
// 									value={stock}
// 									onChange={(e) => setStock(e.target.value)}
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<label htmlFor="seller_field">Seller Name</label>
// 								<input
// 									type="text"
// 									id="seller_field"
// 									className="form-control"
// 									value={seller}
// 									onChange={(e) => setSeller(e.target.value)}
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<label>Images</label>
// 								<div className="custom-file">
// 									<input
// 										type="file"
// 										name="product_images"
// 										className="custom-file-input"
// 										id="customFile"
// 										onChange={onChange}
// 										multiple
// 									/>
// 									<label className="custom-file-label" htmlFor="customFile">
// 										Choose Images
// 									</label>
// 								</div>
// 								{imagesPreview.map((img, index) => (
// 									<img
// 										src={img}
// 										key={index}
// 										alt={`Preview ${index}`}
// 										className="mt-3 mr-2"
// 									/>
// 								))}
// 							</div>
// 							<button
// 								id="login_button"
// 								type="submit"
// 								className="btn btn-block py-3"
// 								disabled={loading}
// 							>
// 								{loading ? 'Creating...' : 'CREATE'}
// 							</button>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</Fragment>
// 	);
// };
// export default CreateProduct;
// import React, { Fragment, useState } from 'react';

// const CreateProduct = () => {
// 	const [name, setName] = useState('');
// 	const [price, setPrice] = useState('');
// 	const [description, setDescription] = useState('');
// 	const [category, setCategory] = useState('');
// 	const [stock, setStock] = useState('');
// 	const [seller, setSeller] = useState('');
// 	const [images, setImages] = useState([]);
// 	const [imagesPreview, setImagesPreview] = useState([]);
// 	const [imageUrls, setImageUrls] = useState([]); // To store the URLs after upload
// 	const [loading, setLoading] = useState(false);
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
// 	//const categories = ['Category1', 'Category2', 'Category3']; // Example categories

// 	const onChange = (e) => {
// 		const files = Array.from(e.target.files);

// 		setImagesPreview([]);
// 		setImages([]);

// 		files.forEach((file) => {
// 			const reader = new FileReader();

// 			reader.onload = () => {
// 				if (reader.readyState === 2) {
// 					setImagesPreview((oldArray) => [...oldArray, reader.result]);
// 					setImages((oldArray) => [...oldArray, file]);
// 				}
// 			};

// 			reader.readAsDataURL(file);
// 		});
// 	};

// 	const submitHandler = async (e) => {
// 		e.preventDefault();
// 		setLoading(true);

// 		// Create a FormData object to hold the data including images
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

// 		// Example: Send formData to your API endpoint
// 		const response = await fetch('/api/v1/products/new', {
// 			method: 'POST',
// 			body: formData,
// 		});

// 		const data = await response.json();

// 		if (response.ok) {
// 			// Assuming the response contains the URLs of the uploaded images
// 			setImageUrls(data.imageUrls);
// 		} else {
// 			// Handle error
// 			console.error(data.message);
// 		}

// 		setLoading(false);
// 	};

// 	return (
// 		<Fragment>
// 			<form onSubmit={submitHandler} style={{ margin: '300px 0px 0px 0px' }}>
// 				<div className="form-group">
// 					<label for="name_field">Name :</label>
// 					<input
// 						type="text"
// 						id="name_field"
// 						className="form-control"
// 						value={name}
// 						onChange={(e) => setName(e.target.value)}
// 					/>
// 				</div>
// 				<br />
// 				<div className="form-group">
// 					<label for="price_field">Price :</label>
// 					<input
// 						type="text"
// 						id="price_field"
// 						className="form-control"
// 						value={price}
// 						onChange={(e) => setPrice(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label htmlFor="description_field">Description</label>
// 					<textarea
// 						className="form-control"
// 						id="description_field"
// 						rows="8"
// 						value={description}
// 						onChange={(e) => setDescription(e.target.value)}
// 					></textarea>
// 				</div>

// 				{/* <div className="form-group">
// 					<label htmlFor="category_field">Category</label>
// 					<select
// 						className="form-control"
// 						id="category_field"
// 						value={category}
// 						onChange={(e) => setCategory(e.target.value)}
// 					>
// 						{categories.map((category) => (
// 							<option key={category} value={category}>
// 								{category}
// 							</option>
// 						))}
// 					</select>
// 				</div> */}

// 				<div className="form-group">
// 					<label for="category_field">Category</label>
// 					<select
// 						className="form-control"
// 						id="category_field"
// 						value={category}
// 						onChange={(e) => setCategory(e.target.value)}
// 					>
// 						{categories.map((category) => (
// 							<option key={category} value={category}>
// 								{category}
// 							</option>
// 						))}
// 					</select>
// 				</div>
// 				<div className="form-group">
// 					<label htmlFor="stock_field">Stock</label>
// 					<input
// 						type="number"
// 						id="stock_field"
// 						className="form-control"
// 						value={stock}
// 						onChange={(e) => setStock(e.target.value)}
// 					/>
// 				</div>

// 				<div className="form-group">
// 					<label htmlFor="seller_field">Seller Name</label>
// 					<input
// 						type="text"
// 						id="seller_field"
// 						className="form-control"
// 						value={seller}
// 						onChange={(e) => setSeller(e.target.value)}
// 					/>
// 				</div>

// 				<div className="form-group">
// 					<label>Images</label>

// 					<div className="custom-file">
// 						<input
// 							type="file"
// 							name="product_images"
// 							className="custom-file-input"
// 							id="customFile"
// 							onChange={onChange}
// 							multiple
// 						/>
// 						<label className="custom-file-label" htmlFor="customFile">
// 							Choose Images
// 						</label>
// 					</div>
// 					{imagesPreview.map((img) => (
// 						<img src={img} key={img} alt="" className="mt-3 mr-2" />
// 					))}
// 				</div>
// 				<button
// 					id="login_button"
// 					type="submit"
// 					className="btn btn-block py-3"
// 					disabled={loading}
// 				>
// 					CREATE
// 				</button>
// 			</form>

// 			<div>
// 				<h3>Uploaded Images:</h3>
// 				{imageUrls.map((url) => (
// 					<img src={url} key={url} alt="" className="mt-3 mr-2" />
// 				))}
// 			</div>
// 		</Fragment>
// 	);
// };

// export default CreateProduct;

// import React, { Fragment, useState } from 'react';

// const CreateProduct = () => {
// 	const [name, setName] = useState('');
// 	const [price, setPrice] = useState('');
// 	const [description, setDescription] = useState('');
// 	const [category, setCategory] = useState('');
// 	const [stock, setStock] = useState('');
// 	const [seller, setSeller] = useState('');
// 	const [images, setImages] = useState([]);
// 	const [imagesPreview, setImagesPreview] = useState([]);
// 	const [imageUrls, setImageUrls] = useState([]); // To store the URLs after upload
// 	const [loading, setLoading] = useState(false);

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

// 	const onChange = (e) => {
// 		const files = Array.from(e.target.files);

// 		setImagesPreview([]);
// 		setImages([]);

// 		files.forEach((file) => {
// 			const reader = new FileReader();

// 			reader.onload = () => {
// 				if (reader.readyState === 2) {
// 					setImagesPreview((oldArray) => [...oldArray, reader.result]);
// 					setImages((oldArray) => [...oldArray, file]);
// 				}
// 			};

// 			reader.readAsDataURL(file);
// 		});
// 	};

// 	const submitHandler = async (e) => {
// 		e.preventDefault();
// 		setLoading(true);

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

// 		try {
// 			const response = await fetch('/api/v1/products/new', {
// 				method: 'POST',
// 				body: formData,
// 			});

// 			const data = await response.json();

// 			if (response.ok) {
// 				setImageUrls(data.imageUrls);
// 			} else {
// 				console.error(data.message);
// 			}
// 		} catch (error) {
// 			console.error('Error uploading the product:', error);
// 		}

// 		setLoading(false);
// 	};

// 	return (
// 		<Fragment>
// 			<form onSubmit={submitHandler} style={{ margin: '300px 0px 0px 0px' }}>
// 				<div className="form-group">
// 					<label htmlFor="name_field">Name :</label>
// 					<input
// 						type="text"
// 						id="name_field"
// 						className="form-control"
// 						value={name}
// 						onChange={(e) => setName(e.target.value)}
// 					/>
// 				</div>
// 				<br />
// 				<div className="form-group">
// 					<label htmlFor="price_field">Price :</label>
// 					<input
// 						type="text"
// 						id="price_field"
// 						className="form-control"
// 						value={price}
// 						onChange={(e) => setPrice(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label htmlFor="description_field">Description</label>
// 					<textarea
// 						className="form-control"
// 						id="description_field"
// 						rows="8"
// 						value={description}
// 						onChange={(e) => setDescription(e.target.value)}
// 					></textarea>
// 				</div>
// 				<div className="form-group">
// 					<label htmlFor="category_field">Category</label>
// 					<select
// 						className="form-control"
// 						id="category_field"
// 						value={category}
// 						onChange={(e) => setCategory(e.target.value)}
// 					>
// 						{categories.map((category) => (
// 							<option key={category} value={category}>
// 								{category}
// 							</option>
// 						))}
// 					</select>
// 				</div>
// 				<div className="form-group">
// 					<label htmlFor="stock_field">Stock</label>
// 					<input
// 						type="number"
// 						id="stock_field"
// 						className="form-control"
// 						value={stock}
// 						onChange={(e) => setStock(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label htmlFor="seller_field">Seller Name</label>
// 					<input
// 						type="text"
// 						id="seller_field"
// 						className="form-control"
// 						value={seller}
// 						onChange={(e) => setSeller(e.target.value)}
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<label>Images</label>
// 					<div className="custom-file">
// 						<input
// 							type="file"
// 							name="product_images"
// 							className="custom-file-input"
// 							id="customFile"
// 							onChange={onChange}
// 							multiple
// 						/>
// 						<label className="custom-file-label" htmlFor="customFile">
// 							Choose Images
// 						</label>
// 					</div>
// 					{imagesPreview.map((img) => (
// 						<img src={img} key={img} alt="" className="mt-3 mr-2" />
// 					))}
// 				</div>
// 				<button
// 					id="login_button"
// 					type="submit"
// 					className="btn btn-block py-3"
// 					disabled={loading}
// 				>
// 					CREATE
// 				</button>
// 			</form>

// 			<div>
// 				<h3>Uploaded Images:</h3>
// 				{imageUrls.map((url) => (
// 					<img src={url} key={url} alt="" className="mt-3 mr-2" />
// 				))}
// 			</div>
// 		</Fragment>
// 	);
// };

// export default CreateProduct;
