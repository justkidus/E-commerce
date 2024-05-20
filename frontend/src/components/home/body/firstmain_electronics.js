import React from 'react';
import '../body/firstmain_electronics.css';
import icon2 from '../../../Assets/icons8-electronics-64.png';
import electronics1 from '../../../Assets/Apple iPhone 13.jpg';

import electronics2 from '../../../Assets/Mobile Phone Accessories IPhone 6 Smartphone IPhone 7 Car Phone PNG - Free Download.jpg';
import electronics3 from '../../../Assets/Bluetooth Smart Watch.jpg';
import electronics4 from '../../../Assets/tablet, 10_1, Full HD, 64 GB Black.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
let FirstBody_Electronics = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div>
				<div className="icon2">
					<button
						onMouseEnter={() => handlemouseenter(1)}
						onMouseLeave={handlemouseleave}
					>
						<img src={icon2} className="icon2img" />
						<h4>Electronics</h4>
						{ishovered === 1 && (
							<div className="electronics">
								<div className="electronicsdiv">
									<Link to="/electronics/phone">
										<button>
											<img src={electronics1} />
											<h4>Phones of all kinds</h4>
										</button>
									</Link>
								</div>
								<div className="electronicsdiv">
									<Link to="/electronics/Accessories">
										<button>
											<img src={electronics2} />
											<h4>Accessories for phone your phone and tablet</h4>
										</button>
									</Link>
								</div>
								<div className="electronicsdiv">
									<Link to="/electronics/SmartWatch">
										<button>
											<img src={electronics3} />
											<h4>Smartwatch for all smart people </h4>
										</button>
									</Link>
								</div>
								<div className="electronicsdiv">
									<Link to="/electronics/Tablets">
										<button>
											<img src={electronics4} />
											<h4>Tablets with your size choice</h4>
										</button>
									</Link>
								</div>
							</div>
						)}
					</button>
				</div>
			</div>
		</>
	);
};
export default FirstBody_Electronics;
