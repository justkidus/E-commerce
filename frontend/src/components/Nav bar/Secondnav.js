import React from 'react';
import '../Nav bar/Nav bar.css';
import shop from '../Assets/shop.png';
import search from '../Assets/211817_search.png';
import account from '../Assets/icons8-account-501.png';
import notifcation from '../Assets/icons8-add-reminder-641.png';
import { useNavigate } from 'react-router-dom';

let SecondNav = () => {
	let navigate = useNavigate();
	let handlenavigatesignup = () => {
		navigate('/Sign_up');
	};
	let handlenavigatelogin = () => {
		navigate('/Log-in');
	};
	let handleAccount = () => {
		navigate('/Account');
	};
	return (
		<>
			<div className="navbar">
				<div className="navheading2image">
					<h2>LEWACHi</h2>
					<img src={shop} className="headershop" />
				</div>

				<input
					type="text"
					placeholder="search for anything"
					className="navsearch"
				/>
				<button className="navsearchbutton">
					<img src={search} className="navsearchicon" />
				</button>

				<button className="navsignupbutton" onClick={handlenavigatesignup}>
					<h4 className="navsignup">Sign up</h4>
				</button>

				<button className="navloginbutton" onClick={handlenavigatelogin}>
					<h4 className="navlogin">Login </h4>
				</button>

				<button className="navnotificationbutton">
					<img src={notifcation} className="navnotification" />
				</button>

				<button className="navaccountbutton" onClick={handleAccount}>
					<img src={account} className="navaccount" />
				</button>
				<button className="navbutton" onClick={handlenavigatelogin}>
					sell
				</button>
			</div>
		</>
	);
};

export default SecondNav;
