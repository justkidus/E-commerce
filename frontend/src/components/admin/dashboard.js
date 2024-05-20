import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Nav bar/Loader';
import Sidebar from './sidebar';
import { Route, Router, Routes } from 'react-router-dom';
import { getAdminProducts } from '../../action/productActions';
import { useDispatch, useSelector } from 'react-redux';
//import product from '../../../backend/models/product';
let Dashboard = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);
	let outOfStock = 0;
	products.forEach((product) => {
		if (product.stock === 0) {
			outOfStock += 1;
		}
	});
	useEffect(() => {
		dispatch(getAdminProducts());
	}, [dispatch]);
	return (
		<>
			<Fragment>
				<div className="row">
					<div className="col-12 col-md-2">
						<Sidebar />
					</div>
					<div
						className="col-12 col-md-10"
						style={{ margin: '-650px 0px 0px 0px' }}
					>
						<h1 className="my-4" style={{ margin: '0px 0px 0px -300px' }}>
							Dashboard
						</h1>
						<div className="row pr-4">
							<div className="col-xl-12 col-sm-12 mb-3">
								<div className="card text-white bg-primary o-hidden h-100">
									<div className="card-body">
										<div
											className="text-center card-font-size"
											style={{
												backgroundColor: 'skyblue',
												color: 'white',
												height: '100px',
												fontSize: '18px',
												width: '70%',
												margin: '0px 0px 0px 320px',
											}}
										>
											<h2 style={{ margin: '20px 0px 0px 30px' }}>
												Total Amount:{' '}
											</h2>
											<br /> <b style={{ fontSize: '18px' }}>$4567</b>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div
							className="row pr-4"
							style={{ display: 'flex', margin: '0px 0px 0px 350px' }}
						>
							<div className="col-xl-3 col-sm-6 mb-3">
								<div className="card text-white bg-success o-hidden h-100">
									<div className="card-body">
										<div
											className="text-center card-font-size"
											style={{
												backgroundColor: 'green',
												width: '200px',
												height: '150px',
												margin: '20px 0px 0px -30px',
												borderRadius: '7px',
												color: 'white',
											}}
										>
											<h2>Products</h2>
											<br />{' '}
											<b style={{ fontSize: '20px' }}>
												{products && products.length}
											</b>
											<br />
											<br />
											<br />
											<hr style={{ color: 'black' }} />
											<Link
												className="card-footer text-white clearfix small z-1"
												to="/admin/products"
											>
												<span className="float-left" style={{ color: 'white' }}>
													View Details
												</span>
												<span className="float-right">
													<i className="fa fa-angle-right"></i>
												</span>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-sm-6 mb-3">
								<div className="card text-white bg-danger o-hidden h-100">
									<div className="card-body">
										<div
											className="text-center card-font-size"
											style={{
												backgroundColor: 'red',
												width: '200px',
												height: '150px',
												margin: '20px 0px 0px 60px',
												borderRadius: '7px',
												color: 'white',
											}}
										>
											<h2>Orders</h2>
											<br /> <b style={{ fontSize: '20px' }}>125</b>
											<br />
											<br />
											<br />
											<hr style={{ color: 'black' }} />
											<Link
												className="card-footer text-white clearfix small z-1"
												to="/admin/orders"
											>
												<span className="float-left" style={{ color: 'white' }}>
													View Details
												</span>
												<span className="float-right">
													<i className="fa fa-angle-right"></i>
												</span>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-sm-6 mb-3">
								<div className="card text-white bg-info o-hidden h-100">
									<div className="card-body">
										<div
											className="text-center card-font-size"
											style={{
												backgroundColor: 'skyblue',
												width: '200px',
												height: '150px',
												margin: '20px 0px 0px 60px',
												borderRadius: '7px',
												color: 'white',
											}}
										>
											<h2>Users</h2>
											<br /> <b style={{ fontSize: '20px' }}>45</b>
											<br />
											<br />
											<br />
											<hr style={{ color: 'black' }} />
											<Link
												className="card-footer text-white clearfix small z-1"
												to="/admin/users"
											>
												<span className="float-left" style={{ color: 'white' }}>
													View Details
												</span>
												<span className="float-right">
													<i className="fa fa-angle-right"></i>
												</span>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-sm-6 mb-3">
								<div className="card text-white bg-warning o-hidden h-100">
									<div className="card-body">
										<div
											className="text-center card-font-size"
											style={{
												backgroundColor: 'orange',
												width: '320px',
												height: '150px',
												margin: '200px 0px 0px -550px',
												borderRadius: '7px',
												color: 'white',
											}}
										>
											<h2>out of stock</h2>
											<br /> <b style={{ fontSize: '20px' }}>{outOfStock}</b>
											<br />
											<br />
											<br />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		</>
	);
};
export default Dashboard;
