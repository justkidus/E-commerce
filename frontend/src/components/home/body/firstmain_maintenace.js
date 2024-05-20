import React from 'react';
import { useState } from 'react';
import safetygear from '../../../Assets/protection suit.jpg';
import storage from '../../../Assets/Dewalt Tstak 17 inch Plastic Long Handle Tool Box 13 inch W x 7 inch H Black.jpg';
import powertools from '../../../Assets/Best Cordless Drill 2023.jpg';
import handtools from '../../../Assets/Hand Tools Set.jpg';
import landscaping from '../../../Assets/Greenworks Pro 60V 21-Inch Self-Propelled.jpg';
import icon9 from '../../../Assets/icons8-tools-50.png';
import { Link } from 'react-router-dom';
import './firstmain_maintenace.css';
let FirstBody_Maintenance = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div className="icon9">
				<button
					onMouseEnter={() => handlemouseenter(5)}
					onMouseLeave={handlemouseleave}
				>
					<img src={icon9} className="icon9img" />
					<h4>Maintenace</h4>
					{ishovered === 5 && (
						<div className="maintenance">
							<div className="maintenacediv">
								<Link to="/maintainace/tools">
									<button>
										<img src={safetygear} />
										<h4>Tools for self protection</h4>
									</button>
								</Link>
							</div>
							<div className="maintenacediv">
								<Link to="/maintainace/powertools">
									<button>
										<img src={storage} />
										<h4>strorages</h4>
									</button>
								</Link>
							</div>
							<div className="maintenacediv">
								<Link to="/maintainace/storage">
									<button>
										<img src={powertools} />
										<h4>Powertools</h4>
									</button>
								</Link>
							</div>
							<div className="maintenacediv">
								<Link to="/maintainace/landscapingtools">
									<button>
										<img src={handtools} />
										<h4>Hand tools</h4>
									</button>
								</Link>
							</div>
							<div className="maintenacediv">
								<Link to="/maintainace/handtools">
									<button>
										<img src={landscaping} />
										<h4>Landscaping tools</h4>
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
export default FirstBody_Maintenance;
