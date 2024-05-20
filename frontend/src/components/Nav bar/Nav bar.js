import React, { useState } from 'react';
import '../Nav bar/Nav bar.css';
import shop from '../../Assets/shop.png';
import account from '../../Assets/icons8-account-501.png';
import notifcation from '../../Assets/icons8-add-reminder-641.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
// import THIRED from '../body3/thired';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../action/productActions';
import Search from './search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import icon8 from '../../Assets/icons8-down-button-24.png';
import { logout } from '../../action/userAction';
let Navbar = () => {
	let navigates = useNavigate();
	let handlenavigatesignup = () => {
		navigates('/Register');
	};
	let handlenavigatelogin = () => {
		navigates('/Log-in');
	};
	let handleAccount = () => {
		navigates('/Account');
	};
	let handlecart = () => {
		navigates('/Cart');
	};
	let [carts, setCart] = useState([]);

	const alert = useAlert();
	const dispatch = useDispatch();

	const { user, loading } = useSelector((state) => state.auth);
	const logoutHandler = () => {
		dispatch(logout());
		alert.success('Logged Out Successfully');
	};
	let [click, setClick] = useState(false);
	let showmessage = () => {
		setClick(true);
	};
	let hidemessage = () => {
		setClick(false);
	};
	const { cartItems } = useSelector((state) => state.cart);
	return (
		<>
			<div className="navbar">
				<div className="navheading2image">
					<h2>LEWACHi</h2>
					<img src={shop} className="headershop" />
				</div>
				<Routes>
					{/* <Route path="/search" element={<Search />} /> */}
					<Route render={({ navigate }) => <Search navigate={navigate} />} />
				</Routes>
				{/* <Search /> */}
				<button className="navsignupbutton" onClick={handlenavigatesignup}>
					<h4 className="navsignup">Sign up</h4>
				</button>

				{user ? (
					<div style={{ margin: '35px 15px 0px 0px ' }}>
						<Link
							to="/"
							type="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-epanded="false"
						>
							<img
								src={account}
								className="navaccount"
								style={{ margin: '-15px 0px 15px 10px' }}
								onClick={showmessage}
								onDoubleClick={hidemessage}
							/>
							<div style={{ margin: '-15px -10px 0px 0px' }}>
								{user && user.name}
							</div>
							<span>
								<img
									src={icon8}
									style={{
										width: '20px',
										height: '20px',
										margin: '-70px -100px 10px 0px ',
									}}
									onClick={hidemessage}
									onDoubleClick={showmessage}
								/>
							</span>
							<br />

							{click ? (
								<div>
									<span
										style={{
											margin: '0px 0px 0px 0px',
											color: 'black',
											textDecoration: 'none',
											fontWeight: 'bold',
											width: '200px',
											height: '150px',
											backgroundColor: 'white',
										}}
									>
										{user && user.role === 'admin' && (
											<Link
												to="/dashboard"
												style={{ color: 'black', margin: '0px 0px 10px 0px' }}
											>
												Dashboard
											</Link>
										)}
										<br />

										<Link
											to="/orders/me"
											style={{ color: 'black', margin: '0px 0px 10px 0px' }}
										>
											Orders
										</Link>
										<br />

										<Link to="/Profile" style={{ color: 'black' }}>
											Profile
										</Link>
										<br />
										<Link to="/user/product" style={{ color: 'black' }}>
											Create
										</Link>
										<br />
										<Link
											to="/"
											onClick={logoutHandler}
											style={{ color: 'red' }}
										>
											Log Out
										</Link>
									</span>
								</div>
							) : (
								<div> </div>
							)}
						</Link>
					</div>
				) : (
					!loading && (
						<button
							to="/login"
							className="navloginbutton"
							onClick={handlenavigatelogin}
						>
							<h4 className="navlogin">Login</h4>
						</button>
					)
				)}

				<button className="navnotificationbutton">
					<img src={notifcation} className="navnotification" />
				</button>
				{/* <button className="navaccountbutton" onClick={handleAccount}>
					<img src={account} className="navaccount" />
				</button> */}
				<Link to="/Cart">
					<button
						className="navbuton"
						style={{ margin: '20px 0px 0px 0px ' }}
						onClick={() => navigates('/Cart', { state: { product: carts } })}
					>
						carts
					</button>
					<span
						style={{
							margin: '0px 0px 0px 10px',
							color: 'white',
							backgroundColor: 'black',
							width: '25px',
							height: '15px',
						}}
					>
						{cartItems.length}
					</span>
				</Link>
			</div>
		</>
	);
};
export default Navbar;
