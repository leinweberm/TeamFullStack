/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import './App.css';
import Loading from './Layout/Loading';
import Layout from './Layout/Layout';
const Home = React.lazy(() => import('./Pages/Home'));
const Contact = React.lazy(() => import('./Pages/Contact'));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
