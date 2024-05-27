import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../components/Nav bar/metadata';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../action/cartAction';
import { useState } from 'react';
let Cart = () => {
	const dispatch = useDispatch();

	const { cartItems } = useSelector((state) => state.cart);
	// const getTotalCartAmount = () => {
	// 	let totalAmount = 0;
	// 	for (const item in cartItems) {
	// 		if (cartItems[item] > 0) {
	// 			let itemInfo = Food_list.find((product) => product._id === item);
	// 			totalAmount += itemInfo.price * cartItems[item];
	// 		}
	// 	}
	// 	return totalAmount;
	// };
	return (
		<>
			<Fragment>
				<MetaData title={'Your cart'} />
				{cartItems.length === 0 ? (
					<h2 className="mt-5">Your cart is empty</h2>
				) : (
					<Fragment>
						<h2>
							Your Cart: <b>{cartItems.length}</b>
						</h2>

						<div style={{ margin: '70px 0px 0px 0px ' }}>
							<div>
								{cartItems.map((item) => (
									<Fragment>
										<div>
											<div className="row">
												<div style={{ margin: '30px 0px 0px -900px' }}>
													<img
														src={item.image}
														alt="Laptop"
														height="120"
														width="130"
													/>
												</div>

												<div>
													<div
														style={{
															justifyContent: 'center',
														}}
													>
														<Link
															to={`/products/${item.product}`}
															style={{
																margin: '0px 0px 0px 0px ',
																fontSize: '20px',
															}}
														>
															{item.name}
														</Link>
													</div>
												</div>

												<div className="col-4 col-lg-2 mt-4 mt-lg-0">
													<p id="card_item_price" style={{ fontSize: '17px' }}>
														$ {item.price}
													</p>
												</div>

												<div className="col-4 col-lg-3 mt-4 mt-lg-0">
													{/* <div class="stockCounter d-inline">
														<button
															onClick={handleDecrement}
															style={{ width: '20px', height: '20px' }}
														>
															<span class="btn btn-danger minus">-</span>
														</button>
														<input
															type="number"
															class="form-control count d-inline"
															value={more}
															readOnly
														/>

														<button
															onClick={handleIncrement}
															style={{ width: '20px', height: '20px' }}
														>
															<span class="btn btn-primary plus">+</span>
														</button>
													</div> */}
												</div>
												<hr style={{ width: '70%' }} />
												<div>
													<i id="delete_cart_item"></i>
												</div>
											</div>
										</div>
									</Fragment>
								))}
							</div>
							<div
								style={{
									float: 'right',
									margin: '-750px 100px 0px 0px',
									fontWeight: 'bold',
									fontSize: '17px',
								}}
							>
								<div>
									<h4
										style={{
											backgroundColor: ' #a5d8ff',
											padding: '10px 10px 10px 10px',
										}}
									>
										Order Summary
									</h4>
									<hr />
									<br />
									<p>
										Subtotal: <span>{cartItems.length} Units</span>
									</p>
									<br />
									<p>
										{/* Est. total: <span>{getTotalCartAmount()}</span> */}
										{/* {Est. total :<span>$3546</span>} */}
									</p>
									<br />
									<hr />
									<br />
									<button id="checkout_btn">Check out</button>
								</div>
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		</>
	);
};
export default Cart;
