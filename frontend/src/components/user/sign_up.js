import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { register, clearErrors } from '../../action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { useEffect } from 'react';
import { Fragment } from 'react';
let Sign_up = () => {
	let naviagte = useNavigate();
	let navigatee = useNavigate();
	let handlenavigate = () => {
		naviagte('/Log-in');
	};
	let handlenavigattoprofile = () => {
		navigatee('/Account');
	};
	let [Username, setUsername] = useState('');
	let [Valid_Username, setValid_Username] = useState(false);
	let [E_mail, setE_mail] = useState('');
	let [Valid_E_Mail, setValid_E_Mail] = useState(false);
	let [Password, setPassword] = useState('');
	let [Valid_Password, setValid_Password] = useState(false);
	let [Confirm, setConfirm] = useState('');
	let [Valid_Confirm, setValid_Confirm] = useState(false);
	let handlesubmit = (e) => {
		e.preventDefault();
		if (Username.length > 3) {
			setValid_Username(false);
		} else {
			setValid_Username(true);
		}
		if (E_mail.includes('@') && E_mail.includes('.com')) {
			setValid_E_Mail(false);
		} else {
			setValid_E_Mail(true);
			return;
		}
		// const passwordRegex = /^(?=*[0-9])(?=*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
		// if (!passwordRegex.test(Password)) {
		if (Password.length > 8) {
			setValid_Password(false);
		} else {
			setValid_Password(true);
			return;
		}
		if (Password === Confirm) {
			setValid_Confirm(false);
		} else {
			setValid_Confirm(true);
			return;
		}
		handlenavigattoprofile();
	};
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = user;

	const [avatar, setAvatar] = useState('');
	const [avatarPreview, setAvatarPreview] = useState('/images/avatar.jpg');

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

		// const formData = new FormData();
		// formData.set('name', name);
		// formData.set('email', email);
		// formData.set('password', password);
		// formData.set('avatar', avatar);

		// dispatch(register(formData));
		dispatch(register(name, email.password));
	};
	const onChange = (e) => {
		if (e.target.name === 'avatar') {
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatarPreview(reader.result);
					setAvatar(reader.result);
				}
			};
			reader.readAsDataURL(e.target.files[0]);
		} else {
			setUser({ ...user, [e.target.name]: e.target.value });
		}
		// setUser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<>
			<Fragment>
				<div className="logindiv" style={logindiv}>
					{/* <form
						onSubmit={() => {
							// handlesubmit();
							submitHandler();
						}} */}
					<form onSubmit={submitHandler} encType="multipart/form-data">
						<div className="login" style={login}>
							<h2 style={{ margin: '0px 0px 0px 90px' }}>Sign up</h2>

							<div style={input}>
								<input
									type="text"
									id="Fname"
									placeholder="F.Name"
									className="inputname"
									style={inputpassword}
									value={name}
									name="name"
									onChange={onChange}
								/>

								<br />

								<br />
								<input
									type="text"
									id="Lname"
									placeholder="L.Name"
									className="inputname"
									style={inputpassword}
									// value={name}
									// name="name"
									// onChange={onChange}
								/>

								<br />

								<br />
							</div>

							<input
								type="text"
								id="Uname"
								placeholder="username"
								className="inputname"
								style={inputname}
								// value={name}
								// name="name"
								// onChange={onChange}
								// onChange={(e) =>
								// 	setUsername(e.target.value)
								// 	{onchange}
								// }
							/>
							<br />
							{Valid_Username && (
								<div style={{ color: 'red' }}>
									<p>Invalid Username</p>
								</div>
							)}
							<br />
							<input
								type="e-mail"
								id="e-mail"
								placeholder="e-mail"
								className="inputname"
								style={inputname}
								// onChange={(e) => setE_mail(e.target.value)}
								value={email}
								name="email"
								onChange={onChange}
							/>
							<br />
							{Valid_E_Mail && (
								<div style={{ color: 'red' }}>
									<p>check if you are missing something</p>
								</div>
							)}
							<br />

							<input
								type="password"
								id="password"
								className="inputpassword"
								placeholder="password"
								style={inputpassword}
								// onChange={(e) => setPassword(e.target.value)}
								value={password}
								name="password"
								onChange={onChange}
							/>
							<br />
							{Valid_Password && (
								<div style={{ color: 'red' }}>
									<p>Invalid password</p>
								</div>
							)}
							<br />
							<input
								type="password"
								id="cpassword"
								className="inputpassword"
								placeholder="Confirm password"
								style={inputpassword}
								// onChange={(e) => setConfirm(e.target.value)}
							/>
						</div>
						<br />
						{Valid_Confirm && (
							<div style={{ color: 'red', margin: '-15px 0px 0px 60px' }}>
								<p>Confirm the above password</p>
							</div>
						)}

						<div className="form-group">
							<label htmlFor="avatar_upload">Avatar</label>
							<div className="d-flex align-items-center">
								<div>
									<figure className="avatar mr-3 item-rtl">
										<img
											src={avatarPreview}
											className="rounded-circle"
											alt="avatarPreview"
										/>
									</figure>
								</div>
								<div className="custom-file">
									<input
										type="file"
										name="avatar"
										className="custom-file-input"
										id="customFile"
										accept="images/*"
										onChange={onChange}
									/>
									<label className="custom-file-label" htmlFor="customFile">
										Choose Avatar
									</label>
								</div>
							</div>
						</div>
						<button
							type="submit"
							style={{
								margin: '10px 0px 0px 100px',
								width: '140px',
								height: '20px',
							}}
							disabled={loading ? true : false}
						>
							<p>submit</p>
						</button>
					</form>

					<div style={p_and_button}>
						<p style={p_and_button_h1}>I have an account</p>
						<button style={inputbutton} onClick={handlenavigate}>
							Login and shop
						</button>
					</div>
				</div>
			</Fragment>
		</>
	);
};
let p_and_button = {
	margin: '-65px 0px 0px 0px',
};
let p_and_button_h1 = {
	margin: '80px 0px 5px 110px',
};
let logindiv = {
	margin: '140px 0px 0px 430px',
	width: '350px',
	height: 'auto',
	border: '1px solid black',
	backgroundColor: '#a5d8ff',
};
let login = {
	margin: '0px 0px 0px 50px',
};
let input = {
	margin: '20px 0px 0px 0px ',
};
let inputname = {
	width: '240px',
	height: '25px',
};
let inputpassword = {
	width: '240px',
	height: '25px',
};
let inputbutton = {
	margin: '0px 0px 0px 50px ',
	width: '250px',
	height: '25px',
	fontSize: '17px',
};

export default Sign_up;
