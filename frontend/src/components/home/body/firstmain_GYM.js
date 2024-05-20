import React from 'react';
import gym1 from '../../../Assets/Life Fitness E5 Track and Cross-Trainer, Titanium.jpg';
import gym2 from '../../../Assets/Barbell Lifting Set Workout Weight Set for Home.jpg';
import gym3 from '../../../Assets/Deltech Fitness DF4900 Smith Machine with Linear Bearings, Weight Plate Storage and Pull-Up Bar, Squat Rack, Half Power Cage for Strength Training Home Gym.jpg';
import gym4 from '../../../Assets/Keppi 1600LB Weight Bench, Heavy Duty Bench.jpg';
import icon4 from '../../../Assets/icons8-gym-equipment-64.png';
import { useState } from 'react';
import './firstmain_GYM.css';
import { Link } from 'react-router-dom';
let FirstBody_GYM = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div className="icon4">
				<button
					onMouseEnter={() => handlemouseenter(8)}
					onMouseLeave={handlemouseleave}
				>
					<img src={icon4} className="icon4img" />
					<h4>GYM equipments</h4>
					{ishovered === 8 && (
						<div className="gym">
							<div className="gymdiv">
								<Link to="/Gym/elliptical_tools">
									<button>
										<img src={gym1} />
										<h4>Elliptical equipments</h4>
									</button>
								</Link>
							</div>
							<div className="gymdiv">
								<Link to="/Gym/freeweight-tools">
									<button>
										<img src={gym2} />
										<h4>Free weight</h4>
									</button>
								</Link>
							</div>
							<div className="gymdiv">
								<Link to="/Gym/weight_tools">
									<button>
										<img src={gym3} />
										<h4>weight machines and other gym equipments</h4>
									</button>
								</Link>
							</div>
							<div className="gymdiv">
								<Link to="/Gym/bench_tools">
									<button>
										<img src={gym4} />
										<h4>Bench</h4>
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
export default FirstBody_GYM;
