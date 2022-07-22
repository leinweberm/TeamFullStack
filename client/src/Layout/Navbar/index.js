import { NavLink } from "react-router-dom";

export default function Navbar () {
	return (
	// funkce musi vracet pouze jeden objekt, proto pokud jich mame vice, obalime je prazdnym fragmentem
		<>
	   {/* inline styl pouze pro ilustrativni ucely */}
			<div style={{ 
				display: 'flex',
				flexDirection: 'row',
				width: '100%', 
				height: '70px', 
				position: 'fixed',
				top: '0',
				background: 'blue',
				zIndex: 10,
				justifyContent: 'space-evenly',
				alignItems: 'center',
				color: 'white',
				fontSize: '20px',
				margin: 'auto' 
			}}>
				<h2>Toto je Navbar</h2>
				{/* NavLink nam meni URL v prohlizeci, zmenu URL hlida Router a vykresluje podle toho komponenty nasi aplikace */}
				<NavLink to="/" style={{ color: 'white' }}>HOME</NavLink>
				<NavLink to="/contact" style={{ color: 'white' }}>Contact</NavLink>
			</div>
		</>
	);
}
