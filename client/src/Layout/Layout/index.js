import './index.css';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../../Components/Sidebar';

export default function Layout() {
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
			<div className="page">
				<Outlet />
				<Footer />
			</div>
		</div>
	);
}
