// HorizontalPagination.js
import React from 'react';
import PropTypes from 'prop-types';

const HorizontalPagination = ({
	currentPage,
	itemsCountPerPage,
	totalItemsCount,
	onChange,
}) => {
	const pageCount = Math.ceil(totalItemsCount / itemsCountPerPage);

	const handlePageChange = (selectedPage) => {
		onChange(selectedPage);
		// Fetch data for the new page (e.g., from an API)
	};

	return (
		<div className="horizontal-pagination">
			{Array.from({ length: pageCount }, (_, index) => (
				<button
					key={index}
					className={`page-button ${index === currentPage ? 'active' : ''}`}
					onClick={() => handlePageChange(index)}
				>
					{index + 1}
				</button>
			))}
		</div>
	);
};

HorizontalPagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	itemsCountPerPage: PropTypes.number.isRequired,
	totalItemsCount: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default HorizontalPagination;
