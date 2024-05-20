// import React, { useState } from 'react';
// import search from '../../Assets/211817_search.png';
// import { useNavigate } from 'react-router-dom';
// import '../Nav bar/Nav bar.css';
// let Search = () => {
// 	let [keyword, setKeyword] = useState('');
// 	let navigate = useNavigate();

// 	const SearchHandler = (e) => {
// 		e.preventDefault();
// 		if (keyword.trim()) {
// 			navigate(`/search?q=${keyword}`);
// 		} else {
// 			navigate('/');
// 		}
// 	};
// 	return (
// 		<>
// 			<form onSubmit={SearchHandler}>
// 				<input
// 					type="text"
// 					placeholder="search for anything"
// 					className="navsearch"
// 					onChange={(e) => setKeyword(e.target.value)}
// 				/>
// 				<input type="button" className="navsearchbutton">
// 					<img src={search} className="navsearchicon" />
// 				</input>
// 			</form>
// 		</>
// 	);
// };
// export default Search;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../Assets/211817_search.png';
import '../Nav bar/Nav bar.css';
import THIRED from '../home/body3/thired';
const Search = () => {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			// navigate(`/search?q=${keyword}`);
			navigate(`/Search/${keyword}`);
		} else {
			navigate('/');
		}
	};
	console.log(keyword);
	return (
		<>
			{' '}
			<form onSubmit={handleSearch}>
				<input
					type="text"
					placeholder="Search for anything"
					className="navsearch"
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
				/>
				<button type="submit" className="navsearchbutton">
					<img src={searchIcon} alt="Search" className="navsearchicon" />
				</button>
			</form>
			{/* <div
				style={{
					backgroundColor: 'white',
					color: 'black',
					width: '400px',
					height: '70px',
				}}
			> */}
			{/* {keyword == } */}
			{/* </div> */}
		</>
	);
};

export default Search;
