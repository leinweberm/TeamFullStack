export default function Home () {
	return (
		// inline styl pouze pro ilustrativni ucely
		<div style={{
			boxSizing: 'border-box',
			display: 'flex',
			flexDirection: 'column',
			height: '100vh',
			widthL: '100%',
			paddingTop: '70px',
			justifyContent: 'center',
			alignContent: 'center',
			background: 'wheat',
			fontSize: '40px',
			color: 'blue'
		}}>
			<h1>Toto je HOME PAGE</h1>
		</div>
	);
}
