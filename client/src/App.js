import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

// je good practice nechavat prazdny radek mezi systemovymi a vasimi importy
import './App.css';
import Loading from './Layout/Loading';
import Layout from './Layout/Layout';
// component pouzivajici code-splitting a lazy loading. vice v README
const Home = React.lazy(() => import('./Pages/Home'));
const Contact = React.lazy(() => import('./Pages/Contact'));

function App () {
	return (
		// suspesne fallback slouzi jako loading screen pri prechodech mezi rendery stranek
		<Suspense fallback={<Loading />}>
			<Routes>
				{/* na domovske strance je komponent Layout, ktery ridi vykreslovani komponent podle URL */}
				<Route path='/' element={<Layout />}>
					{/* pri prvnim nacteni stranky si vezme Layout index element jako prvni */}
					<Route index element={<Home />} />
					{/* path je url adresa a element je komponent, ktery se na ni vyrenderuje */}
					<Route path='/contact' element={<Contact />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
