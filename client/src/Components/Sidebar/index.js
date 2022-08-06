
import { useState } from 'react';

import { SidebarBody, SidebarItem } from './sidebarStyles';
import { filterButtonStyle as fbStyle } from './sidebarLogic';

export default function Sidebar() {
	const [toggleSidebar, setToggleSidebar] = useState(false);
	const handleToggle = () => {
		setToggleSidebar(!toggleSidebar);
	};

	return (
		<SidebarBody toggle={toggleSidebar}>
			<SidebarItem></SidebarItem>
			<SidebarItem onClick={handleToggle}>
				<svg 
					width={fbStyle.width} 
					height={fbStyle.height} 
					viewBox="0 0 12 12" 
					enableBackground="new 0 0 12 12" 
					version="1.1"
				>
					<g>
						<path 
							d={fbStyle.d1} 
							fill={fbStyle.fill}
						/>
						<path 
							d={fbStyle.d2} 
							fill={fbStyle.fill}
						/>
						<path 
							d={fbStyle.d3} 
							fill={fbStyle.fill}
						/>
					</g>
				</svg>
			</SidebarItem>
		</SidebarBody>
	);
}
