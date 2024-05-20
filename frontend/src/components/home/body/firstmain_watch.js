import React from 'react';
import icon12 from '../../../Assets/watch.png';
import { useState } from 'react';
import './firstmain_watch.css';
import watch from "../../../Assets/Fossil Men's Chronograph Machine Black Silicone Strap Watch 45mm - Macy's.jpg";
let FirstBody_Watch = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div className="icon12">
				<button
					onMouseEnter={() => handlemouseenter(11)}
					onMouseLeave={handlemouseleave}
				>
					<img src={icon12} className="icon12img" />
					<h4>Watchs </h4>
					{ishovered === 11 && (
						<div className="watchs">
							<div className="watchsdiv">
								<button>
									<img src={watch} />
									<h4>Watchs</h4>
								</button>
							</div>
						</div>
					)}
				</button>
			</div>
		</>
	);
};
export default FirstBody_Watch;
