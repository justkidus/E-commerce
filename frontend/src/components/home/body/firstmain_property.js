import React from 'react';
import Newbuilding from '../../../Assets/The Boulder Group Arranges Sale of a Single Tenant Net Leased CVS Pharmacy _ RealEstateRama.jpg';
import house from '../../../Assets/Land, Ranches, Farms & Acreage Properties For Sale _ LandHub.jpg';
import rent from '../../../Assets/Humdrum Home turned Modern Manor.jpg';
import commerical from '../../../Assets/Who Knew How Luxurious a Former Army Base Could Be_.jpg';
import icon6 from '../../../Assets/icons8-property-80.png';
import { useState } from 'react';
import './firstmain_property.css';
import { Link } from 'react-router-dom';
let FirstBody_Property = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div className="icon6">
				<button
					onMouseEnter={() => handlemouseenter(6)}
					onMouseLeave={handlemouseleave}
				>
					<img src={icon6} className="icon6img" />
					<h4>Property</h4>
					{ishovered === 6 && (
						<div className="property">
							<div className="propertydiv">
								<Link to="/Property/new_building">
									<button>
										<img src={Newbuilding} />
										<h4>New Bulidings</h4>
									</button>
								</Link>
							</div>
							<div className="propertydiv">
								<Link to="/Property/Commerical_rent">
									<button>
										<img src={house} />
										<h4>House & Apartments for Rent</h4>
									</button>
								</Link>
							</div>
							<div className="propertydiv">
								<Link to="/Property/Commerical">
									<button>
										<img src={house} />
										<h4>House & Apartments for Sale</h4>
									</button>
								</Link>
							</div>
							<div className="propertydiv">
								<Link to="/Property/land_rent">
									<button>
										<img src={rent} />
										<h4>Land & Plots for Rent</h4>
									</button>
								</Link>
							</div>
							<div className="propertydiv">
								<Link to="/Property/household">
									<button>
										<img src={rent} />
										<h4>Land & Plots for sale</h4>
									</button>
								</Link>
							</div>
							<div className="propertydiv">
								<Link to="/Property/house">
									<button>
										<img src={commerical} />
										<h4>Commerical Property for Rent</h4>
									</button>
								</Link>
							</div>
							<div className="propertydiv">
								<Link to="/Property/land">
									<button>
										<img src={commerical} />
										<h4>Commerical Property for Sale</h4>
									</button>
								</Link>
							</div>
						</div>
					)}
				</button>
			</div>
		</>
	);
};
export default FirstBody_Property;
