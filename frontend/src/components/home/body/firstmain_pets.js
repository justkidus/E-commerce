import React from 'react';
import icon1 from '../../../Assets/icons8-dog-64.png';
import pet1 from '../../../Assets/They Ask Their 7 Rescues.jpg';
import pet2 from '../../../Assets/dog.jpg';
import pet3 from '../../../Assets/Blue and Gold Macaw Bird Breed.jpg';
import pet4 from '../../../Assets/belt.jpg';
import pet5 from '../../../Assets/fish.jpg';
import pet6 from '../../../Assets/cat.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './firstmain_pets.css';
let FirstBody_Pets = () => {
	let [ishovered, setishovered] = useState(null);
	let handlemouseenter = (buttonid) => {
		setishovered(buttonid);
	};
	let handlemouseleave = () => {
		setishovered(null);
	};
	return (
		<>
			<div className="icon1">
				<button
					onMouseEnter={() => handlemouseenter(4)}
					onMouseLeave={handlemouseleave}
				>
					<img src={icon1} className="icon1img" />
					<h4>Pets</h4>
					{ishovered === 4 && (
						<div className="pets">
							<div className="petsdiv">
								<button>
									<img src={pet2} />
									<h4>Dog and puppies</h4>
								</button>
							</div>
							<div className="petsdiv">
								<button>
									<img src={pet6} />
									<h4>Cat and Kittens</h4>
								</button>
							</div>
							<div className="petsdiv">
								<button>
									<img src={pet3} />
									<h4>Brids</h4>
								</button>
							</div>
							<div className="petsdiv">
								<button>
									<img src={pet4} />
									<h4>Fishs</h4>
								</button>
							</div>
							<div className="petsdiv">
								<button>
									<img src={pet5} />
									<h4>Accessories for pets needs</h4>
								</button>
							</div>
							<div className="petsdiv">
								<button>
									<img src={pet1} />
									<h4>And other pets</h4>
								</button>
							</div>
						</div>
					)}
				</button>
			</div>
		</>
	);
};
export default FirstBody_Pets;
