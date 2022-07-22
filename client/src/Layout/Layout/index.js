import './index.css';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout () {
	return (
		// Layout nam vraci div s celou nasi aplikaci
		<div className='App'>
			{/* kazda stranka bude mit navbar */}
			<Navbar />
			{/* nasledne je div page kde Outlet renderuje komponenty podle URL v routeru */}
			<div className='page'>
				<Outlet />
				{/* kazda stranka bude mit footer */}
				<Footer />
			</div>
		</div>
	);
}