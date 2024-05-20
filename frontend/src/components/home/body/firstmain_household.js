import React from 'react';
// import icon10 from '../Assets/icons8-washing-machine-64.png';
import icon10 from '../../../Assets/icons8-washing-machine-64.png';
import households from '../../../Assets/The 2 Ingredients You Should Be Putting in Your Washing Machine.jpg';
import { useState } from 'react';
import './firstmain_household.css';
let FirstBody_Household = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div className="icon10">
				<button
					onMouseEnter={() => handlemouseenter(9)}
					onMouseLeave={handlemouseleave}
				>
					<img src={icon10} className="icon10img" />
					<h4>Household electronics</h4>
					{ishovered === 9 && (
						<div className="household">
							<div className="householddiv">
								<button>
									<img src={households} />
									<h4>House machines</h4>
								</button>
							</div>
						</div>
					)}
				</button>
			</div>
		</>
	);
};
export default FirstBody_Household;
