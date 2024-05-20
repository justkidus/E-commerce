// import Allcomponents from './components/All components';
// import Navbar from './components/Nav bar/Nav bar';
// import Footer from './components/Nav bar/footer';
// import { BrowserRouter as Route, Router } from 'react-router-dom';
// function App() {
// 	return (
// 		<Router>
// 			<div className="App">
// 				<Navbar />
// 				<Route path="/" element={<Allcomponents />} />
// 				<Footer />
// 			</div>
// 		</Router>
// 	);
// }

// export default App;
import Allcomponents from './components/All components';
import Navbar from './components/Nav bar/Nav bar';
import Footer from './components/Nav bar/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import ProductDetails from './components/product/productDetails';
import Login from './components/user/login';
import Register from './components/user/register';
import Sign_up from './components/user/sign_up';
import { loadUser } from './action/userAction';
import store from './store';
import { useEffect } from 'react';
import Profile from './components/user/profile';
import Cart from './components/cart';
import Dashboard from './components/admin/dashboard';
import ProductList from './components/admin/productsList';
import Newproduct from './components/admin/newProduct';
import CreateProduct from './components/admin/createProduct';
// import PrivateRoute from './components/routes/privateRoute';

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	const isAuthenticated = true;

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/admin/products" element={<ProductList />} />
					<Route path="/dashboard/admin/product" element={<Newproduct />} />
					<Route path="/user/product" element={<CreateProduct />} />
				</Routes>
				<Navbar />
				<Routes>
					<Route path="/" element={<Allcomponents />} />

					{/* <PrivateRoute path="/Profile" element={<Profile />} /> */}
					<Route path="/Profile" element={<Profile />} />
					<Route path="/search/:keyword" element={<Allcomponents />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/Log-in" element={<Login />} />
					<Route path="/Register" element={<Register />} />
					<Route path="/Cart" element={<Cart />} />
					{/* <Route path="/Register" element={<Sign_up />} /> */}
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
