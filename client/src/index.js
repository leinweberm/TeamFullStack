import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// Abyste mi mohli pouzivat React Router musite jim obalit applikaci
	<BrowserRouter>
		<App />
	</BrowserRouter> 
);
