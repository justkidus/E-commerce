import React from 'react';
import './firstmain_furntuire.css';
import furnituire1 from '../../../Assets/100 mẫu bàn ghế ăn gỗ tự nhiên phòng ăn đẹp - Thiết kế Thi công Nhà đẹp.jpg';
import furnituir2 from '../../../Assets/DIY Cubby Shelves.jpg';
import furnituir3 from '../../../Assets/Vestidor con luces led.jpg';
import furnituir4 from '../../../Assets/Folding Futon Sofa Bed Protable Lazy Couch Loveseat Couch Bed Sleeper Sofa with Armrest Convertible Couches Sofabed for Living Room,A.jpg';
import icon3 from '../../../Assets/icons8-furniture-50.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
let FirstBody_Furntuire = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div className="icon3">
				<button
					onMouseEnter={() => handlemouseenter(7)}
					onMouseLeave={handlemouseleave}
				>
					<img src={icon3} className="icon3img" />
					<h4>Furnictuire</h4>
					{ishovered === 7 && (
						<div className="furnituire">
							<div className="furnituirediv">
								<Link to="/furnituire/dinningtable">
									<button>
										<img src={furnituire1} />
										<h4> Dinning Table</h4>
									</button>
								</Link>
							</div>
							<div className="furnituirediv">
								<Link to="/furnituire/shelves">
									<button>
										<img src={furnituir2} />
										<h4> Shelves for your books</h4>
									</button>
								</Link>
							</div>
							<div className="furnituirediv">
								<Link to="/furnituire/clothset">
									<button>
										<img src={furnituir3} />
										<h4>Clothset</h4>
									</button>
								</Link>
							</div>
							<div className="furnituirediv">
								<Link to="/furnituire/sofa">
									<button>
										<img src={furnituir4} />
										<h4>Sofa with many model</h4>
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
export default FirstBody_Furntuire;
