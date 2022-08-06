import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RecoilRoot>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		,
	</RecoilRoot>,
);
