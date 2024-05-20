import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, clearErrors } from '../../action/productActions';
import { useAlert } from 'react-alert';
import Loader from '../Nav bar/Loader';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import '../../components/product/productDetail.css';
import { addItemToCart } from '../../action/cartAction';
let ProductDetails = (match) => {
	const dispatch = useDispatch();

	const alert = useAlert();
	const { loading, error, product } = useSelector(
		(state) => state.productsDetails
	);
	// const { id } = useParams();
	// useEffect(() => {
	// 	dispatch(getProductDetails(match.params.id));

	// 	if (error) {
	// 		alert.error(error);
	// 		dispatch(clearErrors());
	// 	}
	// }, [dispatch, error, alert, match.params.id]);
	const { id } = useParams();
	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [id]);

	const addToCart = () => {
		dispatch(addItemToCart(id));
		alert.success('Item added to cart');
	};
	let [more, setMore] = useState(1);

	let handleIncrement = () => {
		setMore(more++);
	};
	let handleDecrement = () => {
		setMore(more--);
	};
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<div>
						<div
							className="row f-flex justify-content-around"
							style={{ margin: '-100px 0px 0px 0px' }}
						>
							<div className="col-12 col-lg-5 img-fluid" id="product_image">
								{product.images &&
									product.images.map((image) => (
										<img
											style={{
												width: '500px',
												height: '500px',
												marginTop: '40px',
											}}
											src={image.url}
											alt={product.title}
											height="500"
											width="500"
										/>
									))}
							</div>

							<div className="col-12 col-lg-5 mt-5">
								<h3>{product.name}</h3>
								<p id="product_id">product #{product._id}</p>

								<hr />

								<div className="rating-outer">
									<div className="rating-inner"></div>
								</div>
								{/* <span id="no_of_reviews">(5 Reviews)</span> */}

								<hr />
								<br />

								<p id="product_price">${product.price}</p>
								<br />
								<div className="stockCounter d-inline">
									<button onClick={handleDecrement}>
										<span className="btn btn-danger minus">-</span>
									</button>

									<input
										type="number"
										className="form-control count d-inline"
										value="1"
										readOnly
									/>

									<button onClick={handleIncrement}>
										<span className="btn btn-primary plus">+</span>
									</button>
								</div>
								<br />
								<button
									type="button"
									id="cart_btn"
									className="btn btn-primary d-inline ml-4"
									disabled={product.stock === 0}
									onClick={addToCart}
								>
									Add to Cart
								</button>

								<hr />
								<br />

								<p>
									Status:{' '}
									<span
										id="stock_status"
										className={product.stock > 0 ? 'greenColor' : 'redColor'}
									>
										{product.stock > 0 ? 'In stock' : 'out of stock'}
									</span>
								</p>
								<br />

								<hr />

								<h4 className="mt-2">{product.description}</h4>
								<br />
								<p style={{ width: '60%', margin: '0px 0px 0px 220px' }}>
									Binge on movies and TV episodes, news, sports, music and more!
									We insisted on 720p High Definition for this 32" LED TV,
									bringing out more lifelike color, texture and detail. We also
									partnered with Roku to bring you the best possible content
									with thousands of channels to choose from, conveniently
									presented through your own custom home screen.
								</p>
								<hr />
								<br />
								<p id="product_seller mb-3">
									Sold by: <strong>Amazon</strong>
								</p>
								<br />
								<button
									id="review_btn"
									type="button"
									className="btn btn-primary mt-4"
									data-toggle="modal"
									data-target="#ratingModal"
								>
									Submit Your Review
								</button>

								<br />
								<div className="row mt-2 mb-5">
									<div className="rating w-50">
										<div
											className="modal fade"
											id="ratingModal"
											tabIndex="-1"
											role="dialog"
											aria-labelledby="ratingModalLabel"
											aria-hidden="true"
										>
											<div className="modal-dialog" role="document">
												<div className="modal-content">
													<div className="modal-header">
														<h5 className="modal-title" id="ratingModalLabel">
															Submit Review
														</h5>
														<button
															type="button"
															className="close"
															data-dismiss="modal"
															aria-label="Close"
														>
															<span aria-hidden="true">&times;</span>
														</button>
													</div>
													<div className="modal-body">
														<ul className="stars">
															<li className="star">
																<i className="fa fa-star"></i>
															</li>
															<li className="star">
																<i className="fa fa-star"></i>
															</li>
															<li className="star">
																<i className="fa fa-star"></i>
															</li>
															<li className="star">
																<i className="fa fa-star"></i>
															</li>
															<li className="star">
																<i className="fa fa-star"></i>
															</li>
														</ul>

														<textarea
															name="review"
															id="review"
															className="form-control mt-3"
														></textarea>

														<button
															className="btn my-3 float-right review-btn px-4 text-white"
															data-dismiss="modal"
															aria-label="Close"
														>
															Submit
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};
export default ProductDetails;
