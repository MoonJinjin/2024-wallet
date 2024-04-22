import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Home from './HomePage/Home';
import Price from './Price/Price';
import Footer from './Footer/Footer';

const App: React.FC = () => {
	return (
		<>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/price" element={<Price />} />
			</Routes>
			<Footer />
		</BrowserRouter>
		</>
	);
};
export default App;
