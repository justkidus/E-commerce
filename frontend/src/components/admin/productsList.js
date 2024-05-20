// import React, { Fragment } from 'react';
// import Loader from '../components/Nav bar/Loader';
// import { useAlert } from 'react-alert';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAdminProducts, clearErrors } from '../action/productActions';
// import { useNavigate, useNavigation } from 'react-router-dom';
// import Sidebar from './sidebar';
// import MetaData from './Nav bar/metadata';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { MDBDataTable } from 'mdbreact';

// let ProductList = () => {
// 	let navigate = useNavigate();
// 	const alert = useAlert();
// 	const dispatch = useDispatch();
// 	const { loading, error, products } = useSelector((state) => state.products);

// 	useEffect(
// 		() => {
// 			dispatch(getAdminProducts());
// 			if (error) {
// 				alert.error(error);
// 				dispatch(clearErrors());
// 			}
// 		},
// 		dispatch,
// 		alert,
// 		error
// 	);

// 	const setProducts = () => {
// 		const data = {
// 			columns: [
// 				{
// 					label: 'ID',
// 					field: 'id',
// 					sort: 'asc',
// 				},
// 				{
// 					label: 'Name',
// 					field: 'name',
// 					sort: 'asc',
// 				},
// 				{
// 					label: 'Price',
// 					field: 'price',
// 					sort: 'asc',
// 				},
// 				{
// 					label: 'Stock',
// 					field: 'stock',
// 					sort: 'asc',
// 				},
// 				{
// 					label: 'Action',
// 					field: 'action',
// 				},
// 			],
// 			rows: [{ products }],
// 		};
// 		console.log();

// 		products.forEach((product) => {
// 			data.rows.push({
// 				id: product._id,
// 				name: product.name,
// 				amount: `$${product.price}`,
// 				stock: product.stock,
// 				actions: (
// 					<Fragment>
// 						<Link to={`/admin/product/${product._id}`}>
// 							<i></i>
// 						</Link>
// 						<button>
// 							<i></i>
// 						</button>
// 					</Fragment>
// 				),
// 			});
// 		});
// 		return data;
// 	};

// 	return (
// 		<>
// 			<Fragment>
// 				<MetaData title={'All products'} />
// 				<div>
// 					<div>
// 						<Sidebar />
// 					</div>
// 					<div>
// 						<Fragment>
// 							<h1>All products</h1>
// 							{loading ? (
// 								<Loader />
// 							) : (
// 								<MDBDataTable
// 									data={setProducts()}
// 									// className={},
// 									bordered
// 									striped
// 									hover
// 								/>
// 							)}
// 						</Fragment>
// 					</div>
// 				</div>
// 			</Fragment>
// 		</>
// 	);
// };
// export default ProductList;

import React, { Fragment, useEffect } from 'react';
import Loader from '../Nav bar/Loader';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts, clearErrors } from '../../action/productActions';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import MetaData from '../Nav bar/metadata';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

const ProductList = () => {
	const navigate = useNavigate();
	const alert = useAlert();
	const dispatch = useDispatch();
	const { loading, error, products } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getAdminProducts());
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, alert, error]);

	const setProducts = () => {
		const data = {
			columns: [
				{
					label: 'ID',
					field: 'id',
					sort: 'asc',
				},
				{
					label: 'Name',
					field: 'name',
					sort: 'asc',
				},
				{
					label: 'Price',
					field: 'price',
					sort: 'asc',
				},
				{
					label: 'Stock',
					field: 'stock',
					sort: 'asc',
				},
				{
					label: 'Action',
					field: 'action',
				},
			],
			rows: [],
		};

		if (!products) {
			return data; // Return empty data if products is undefined
		}

		products.forEach((product) => {
			data.rows.push({
				id: product._id,
				name: product.name,
				price: `$${product.price}`,
				stock: product.stock,
				action: (
					<Fragment>
						<Link to={`/admin/product/${product._id}`}>
							<i>View</i>
						</Link>
						<button>
							<i>Edit</i>
						</button>
					</Fragment>
				),
			});
		});
		return data;
	};

	return (
		<>
			<Fragment>
				<MetaData title={'All products'} />
				<div>
					<Sidebar />
					<div style={{ margin: '-650px 0px 0px 410px' }}>
						<h1>All products</h1>
						{loading ? (
							<Loader />
						) : error ? (
							<div>{error}</div>
						) : (
							<MDBDataTable
								data={setProducts()}
								style={table}
								bordered
								striped
								hover
							/>
						)}
					</div>
				</div>
			</Fragment>
		</>
	);
};
let table = {
	margin: '0px 10px 0px 10pz',
};
export default ProductList;
