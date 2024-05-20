import React from 'react';
import icon11 from '../../../Assets/icons8-pottery-workshop-64.png';
import pottery from '../../../Assets/pottery.jpg';
import { useState } from 'react';
import './firstmain_pottery.css';
let FirstBody_Pottery = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div className="icon11">
				<button
					onMouseEnter={() => handlemouseenter(10)}
					onMouseLeave={handlemouseleave}
				>
					<img src={icon11} className="icon11img" />
					<h4>Potterty</h4>
					{ishovered === 10 && (
						<div className="pottery">
							<div className="potterydiv">
								<button>
									<img src={pottery} />
									<h4>pottery</h4>
								</button>
							</div>
						</div>
					)}
				</button>
			</div>
		</>
	);
};
export default FirstBody_Pottery;
