import React from 'react';
import './firstmain.css';
import advert from '../../../Assets/5975688.jpg';
import advert2 from '../../../Assets/18899280.jpg';

import { useEffect, useState } from 'react';
import FirstBody_Electronics from './firstmain_electronics';
import FirstBody_Cars from './firstmain_cars';
import FirstBody_Maintenance from './firstmain_maintenace';
import FirstBody_Furntuire from './firstmain_furntuire';
import FirstBody_GYM from './firstmain_GYM';
import FirstBody_Property from './firstmain_property';
import FirstBody_Pets from './firstmain_pets';
import FirstBody_Household from './firstmain_household';
import FirstBody_Watch from './firstmain_watch';
import FirstBody_Pottery from './firstmain_pottery';
import { Link } from 'react-router-dom';
let Body = () => {
	const [image, setimage] = useState(advert);

	useEffect(() => {
		const interval = setInterval(() => {
			const image = [advert, advert2];
			const randomindex = Math.floor(Math.random() * image.length);
			setimage(image[randomindex]);
		}, 2000);
		return () => clearInterval(interval);
	}, []);
	// let [catagori, setCatagori] = useState([
	// 	{ img: icon2, title: 'Electronics' },
	// 	{ img: icon5, title: 'Vehicles' },
	// 	{ img: icon8, title: 'Machine' },
	// 	{ img: icon9, title: 'Tools' },
	// 	{ img: icon1, title: 'Pets ' },
	// 	{ img: icon6, title: 'Property' },
	// 	{ img: icon3, title: 'Furnituire' },
	// 	{ img: icon4, title: 'GYM tools' },
	// 	{ img: icon10, title: 'Household ' },
	// 	{ img: icon11, title: 'Hand made' },
	// 	{ img: icon12, title: 'View More' },
	// ]);

	return (
		<>
			<div className="FirstBody_Components">
				<div className="FirstBody-C">
					<FirstBody_Electronics />
				</div>
				<div className="FirstBody-C">
					<FirstBody_Cars />
				</div>
				<div className="FirstBody-C">
					<FirstBody_Maintenance />
				</div>
				<div className="FirstBody-C">
					<FirstBody_Furntuire />
				</div>
				<div className="FirstBody-C">
					<FirstBody_GYM />
				</div>
				<div className="FirstBody-C">
					<FirstBody_Property />
				</div>
				<div className="FirstBody-C">
					<FirstBody_Pets />
				</div>
				<div className="FirstBody-C">
					<FirstBody_Household />
				</div>
				<div className="FirstBody-C">
					<FirstBody_Watch />
				</div>
				<div className="FirstBody-C">
					<FirstBody_Pottery />
				</div>
			</div>
			<div className="firstbody">
				<div className="catagory">
					<div className="firstbodyimg">
						<img src={image} className="firstbodyadveret" />
						<h1 className="firstbodyheading1">
							Shop,Sell and Resell your local products
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};
export default Body;
