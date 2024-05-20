import React from 'react';
import '../body/firstmain_cars.css';
import bajaj from '../../../Assets/bajaj1.jpg';
import motor from '../../../Assets/motorcycle.jpg';
import car from '../../../Assets/car che.jpg';
import van from '../../../Assets/Taxi Transfers from Sorrento to Praiano.jpg';
import bus from '../../../Assets/Bus Transportation .jpg';
import dumptruck from '../../../Assets/Dump truck- Machinery training center in Witbank_0761606532.jpg';
import download from '../../../Assets/download (1).jpg';
import icon5 from '../../../Assets/icons8-vehicles-64.png';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

let FirstBody_Cars = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div className="icon5">
				<button
					onMouseEnter={() => handlemouseenter(2)}
					onMouseLeave={handlemouseleave}
				>
					<img src={icon5} className="icon5img" />
					<h4>Vehicles</h4>
					{ishovered == 2 && (
						<div className="Automobile">
							<div className="automobilediv">
								<Link to="/vehicle/bajajs">
									<button>
										<img src={bajaj} />
										<h4 className="autoheading">
											Bajajs that are made in Thailand
										</h4>
									</button>
								</Link>
							</div>

							<div className="automobilediv">
								<Link to="/vehicle/motorcycles">
									<button>
										<img src={motor} />
										<h4>Motorcycles</h4>
									</button>
								</Link>
							</div>
							<div className="automobilediv">
								<Link to="/vehicle/car">
									<button>
										<img src={car} />
										<h4>From the oldest to latest </h4>
									</button>
								</Link>
							</div>
							<div className="automobilediv">
								<Link to="/vehicle/minibus">
									<button>
										<img src={van} />
										<h4>minibuses</h4>
									</button>
								</Link>
							</div>
							<div className="automobilediv">
								<Link to="/vehicle/bus">
									<button>
										<img src={bus} />
										<h4>Buses that can cross countires</h4>
									</button>
								</Link>
							</div>
							<div className="automobilediv">
								<Link to="/vehicle/dumptruck">
									<button>
										<img src={dumptruck} />
										<h4>Dumptrucks form oldest to newest</h4>
									</button>
								</Link>
							</div>
							<div className="automobilediv">
								<Link to="/vehicle/Acesseries">
									<button>
										<img src={download} />
										<h4>Any kind of accessories for any kind of vehicles</h4>
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
export default FirstBody_Cars;
