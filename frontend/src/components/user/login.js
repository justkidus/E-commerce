import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Fragment } from 'react';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../action/userAction';
import Loader from '../../components/Nav bar/Loader';

import { useEffect } from 'react';
let Log_in = () => {
	let naviagte = useNavigate();
	let handlenavigate = () => {
		naviagte('/Sign_up');
	};

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const alert = useAlert();
	const dispatch = useDispatch();

	const { isAuthenticated, error, loading } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isAuthenticated) {
			naviagte('/');
		}
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, alert, isAuthenticated, error, naviagte]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};
	return (
		<>
			<Fragment>
				{loading ? (
					<Loader />
				) : (
					<Fragment>
						<div className="logindiv" style={logindiv}>
							<div className="login" style={logins}>
								<h2>Login to your account</h2>
								<form onSubmit={submitHandler}>
									<div style={input}>
										<label for="name" className="labelname">
											Name :
										</label>
										<input
											type="email"
											id="name"
											placeholder="email"
											className="inputname"
											style={inputthespace}
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
										<br />
										<br />
										<label for="password" className="labelpassword">
											password :
										</label>

										<input
											type="password"
											id="password"
											className="inputpassword"
											placeholder="password"
											style={inputthespace}
											valur={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<br />
									<br />
									<button type="submit" style={{ backgroundColor: 'black' }}>
										<p style={{ color: 'white' }}>Login</p>
									</button>
								</form>
							</div>
							<p style={{ margin: '60px 0px 10px 90px' }}>
								don't have an account
							</p>
							<button style={inputbutton} onClick={handlenavigate}>
								Sign up and shop
							</button>
						</div>
					</Fragment>
				)}
			</Fragment>
		</>
	);
};
let logindiv = {
	margin: '140px 0px 0px 430px',
	width: '350px',
	height: '380px',
	border: '1px solid black',
	backgroundColor: '#a5d8ff',
};
let logins = {
	margin: '20px 0px 0px 40px',
};
let input = {
	margin: '70px 0px 0px 0px ',
};
let inputthespace = {
	height: '25px',
	width: '200px',
};
// let inputname = {
// 	width: '200px',
// 	height: '25px',
// };
// let inputpassword = {
// 	width: '200px',
// 	height: '25px',
// };
let inputbutton = {
	margin: '0px 0px 0px 50px ',
	width: '250px',
	height: '30px',
	fontSize: '17px',
};
export default Log_in;
