
export default function Footer () {
	return (
	// inline styl pouze pro ilustrativni ucely
		<div style={{ 
			display: 'flex',
			flexDirection: 'row',
			width: '100%', 
			height: '70px', 
			background: 'blue',
			zIndex: 10,
			justifyContent: 'center',
			alignContent: 'center',
			color: 'white',
			fontSize: '30px' 
		}}>
         Toto je Footer
		</div>
	);
}
