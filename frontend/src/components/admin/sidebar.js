import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
const Sidebar = () => {
	return (
		<>
			<div
				className="sidebar-wrapper"
				style={{
					margin: '80px 0px 0px 0px',
					width: '25%',
				}}
			>
				<nav id="sidebar">
					<ul className="list-unstyled components">
						<li>
							<Link to="/dashboard">
								<i className="fas fa-tachometer-alt"></i> Dashboard
							</Link>
						</li>

						<li>
							<Link
								to="#productSubmenu"
								data-toggle="collapse"
								aria-expanded="false"
								className="dropdown-toggle"
							>
								<i className="fab fa-product-hunt"></i> Products
							</Link>
							<ul className="collapse list-unstyled" id="productSubmenu">
								<li>
									<Link to="/admin/products">
										<i className="fa fa-clipboard-list"></i> All
									</Link>
								</li>

								<li>
									<Link to="admin/product">
										<i className="fa fa-plus"></i> Create
									</Link>
								</li>
							</ul>
						</li>

						<li>
							<Link to="/admin/orders">
								<i className="fas fa-shopping-basket"></i> Orders
							</Link>
						</li>

						<li>
							<Link to="admin/users">
								<i className="fas fa-users"></i> Users
							</Link>
						</li>

						<li>
							<Link to="admin/requests">
								<i className="fas fa-users"></i> Requests
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
export default Sidebar;
