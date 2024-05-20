import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import img1 from '../Assets/Apple iPhone 13.jpg';
import img2 from '../Assets/Galaxy S21.jpg';
import img3 from '../Assets/iphone phone.jpg';
import img4 from '../Assets/The Complete Evolution Of Cell Phones From 1956 To The First iPhone.jpg';
import img5 from '../Assets/Bluetooth Smart Watch.jpg';
import img6 from '../Assets/rolex1.jpg';
import img7 from '../Assets/Man profile cartoon _ Download on Freepik.jpg';
import img8 from '../Assets/icons8-chat-50.png';
import img10 from '../Assets/icons8-down-button-50.png';
import '../Nav bar/Account.css';
let Account = () => {
	let products = [
		{ images: img1, des: 'iphone 13 pro', value: '$999.99' },
		{ images: img2, des: 'Samsung Ultra 22 ', value: '$999.99' },
		{ images: img3, des: 'iphone 11 pro', value: '$499.99' },
		{ images: img4, des: 'Nokia ', value: '$19.99' },
		{ images: img5, des: 'Smart watch', value: '$199.99' },
		{ images: img6, des: 'Rolex ', value: '$299.99' },
	];
	let [Show, setShow] = useState(false);
	// return false;
	return (
		<>
			<div className="myprofilediv">
				<div className="myprofileleft">
					<div className="profile">
						<img src={img7} />
					</div>
					<button>
						<p>Edit profile</p>
					</button>
					<div className="names">
						<h4>First Name : Kidus </h4>
						<h4>Last Name : Teshome</h4>
						<h4>Phone Number : 09--------</h4>
						<button>
							<div className="imgandbutton">
								<img src={img8} />
								<h3>Chat here</h3>
							</div>
						</button>
					</div>
				</div>
				<div className="myprofileright">
					<button
						style={{
							width: '100%',
							backgroundColor: '#08415c',
							padding: '0px 0px 0xp 60px',
							color: 'white',
							margin: '-80px 0px 0px -90px',
						}}
					>
						<h2
							onClick={setShow}
							style={{ margin: '3px 0px 0px 0px', height: 'auto' }}
						>
							<img
								src={img10}
								style={{
									width: '25px',
									height: '25px',
									margin: '0px 15px -5px 0px',
									border: 'none',
								}}
							/>
							My perchased Products
						</h2>
					</button>
					{Show && (
						<div className="productsdiv">
							<h1>have a good time</h1>
						</div>
					)}
					<button
						style={{
							backgroundColor: '#cc2936',
							color: 'white',
							margin: '10px 0px 20px -90px',
							width: '100%',
							border: 'none',
						}}
					>
						<h2 style={{ margin: '5px 0px 0px 0px' }}>My Products</h2>
					</button>
					<div
						className="productsdiv"
						style={{
							// backgroundColor: '#dedede',
							width: '100%',
							margin: '0px 0px 0px -50px',
						}}
					>
						{products.map((product) => (
							<div className="products">
								<img src={product.images} style={productimg} />;
								<div style={productddes}>
									<h4 style={text}>{product.des}</h4>
									<h4 style={text}>{product.value}</h4>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
let productimg = {
	margin: '30px 0px 30px 0px',
};
let productddes = {
	backgroundColor: '#dedede',
};
let text = {
	margin: '0px 0px 0px 20px',
};
export default Account;
