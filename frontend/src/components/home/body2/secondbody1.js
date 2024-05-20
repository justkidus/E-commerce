import React from 'react';
import './secondbody1.css';

import Navbar from '../../Nav bar/Nav bar';
import Body from '../body/firstmain';
import q from '../../../Assets/Apple iPhone 13.jpg';
import w from '../../../Assets/bajaj1.jpg';
import e from '../../../Assets/rolex1.jpg';
import r from '../../../Assets/Cheapest Cars in Canada_ 2022.jpg';
import SEO from '../../../Assets/SEO Marketing   Internet Marketing.jpg';
import motor from '../../../Assets/Motorcycle Courier Vector Hd Images, Send Delivery Motorcycle Courier Red, Delivery Clipart, Send Delivery, Motorcycle PNG Image For Free Download.jpg';

import { useState } from 'react';
let Secondbody = () => {
	return (
		<>
			<div className="secondall">
				<div className="secondwhole">
					<h1>Delivering convenience to your doorstep.</h1>
					<img src={motor} className="image" />
					<h2>FREE DELIVERY</h2>
				</div>
				<div className="leftright">
					<div className="secondright">
						<img src={w} />
					</div>
					<div className="secondleft">
						<img src={e} />
					</div>
				</div>
				<div className="bottom">
					<div className="leftbottom">
						<img src={q} />
					</div>
					<div className="rightbottom">
						<img src={r} />
					</div>
				</div>
			</div>
		</>
	);
};
export default Secondbody;
