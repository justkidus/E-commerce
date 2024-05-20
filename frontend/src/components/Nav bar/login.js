import { useNavigate } from 'react-router-dom';
import React from 'react';
let Log_in = () => {
	let naviagte = useNavigate();
	let handlenavigate = () => {
		naviagte('/Sign_up');
	};
	return (
		<>
			<div className="logindiv" style={logindiv}>
				<div className="login" style={login}>
					<h2>Login to your account</h2>
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
						/>
					</div>
				</div>
				<p style={{ margin: '60px 0px 10px 90px' }}>don't have an account</p>
				<button style={inputbutton} onClick={handlenavigate}>
					Sign up and shop
				</button>
			</div>
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
let login = {
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
