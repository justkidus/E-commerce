import React, { Fragment } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
//let ProtectedRoutes = ({ component: Component, ...rest }) => {
let PrivateRoute = ({ isAdmin, component: Component, ...rest }) => {
	const { isAuthenticated, loading, user } = useSelector((state) => state.auth);
	// function PrivateRoute({ element, isAuthenticated, redirectLink }) {
	return (
		<>
			<Fragment>
				{loading === false && (
					<Routes>
						<Route
							{...rest}
							render={(props) => {
								if (isAuthenticated === false) {
									return <redirect to="/login" />;
								}
								if (isAdmin === true && user.role !== 'admin') {
									return <redirect to="/" />;
								}
								return <Component {...props} />;
							}}
						/>
					</Routes>
				)}

				{/* {isAuthenticated ? element : <Navigate to={redirectLink} />} */}
			</Fragment>
		</>
	);
};
export default PrivateRoute;
