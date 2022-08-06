import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';

import useAxiosText from '../../Utils/useAxiosText';
import { SidebarBody, SidebarItem, SidebarItemSlot } from './sidebarStyles';
import { filterButtonStyle as fbStyle } from './sidebarData';
import {
	UI_SIDEBAR as sidebarAtom,
	UI_LANGUAGE as languageAtom,
	CLIENT_ADRESS as urlAtom,
	UI_HAS_SIDEBAR as hasSidebarAtom,
} from '../../atoms';
import FilterCard from '../FilterCard';

export default function Sidebar() {
	const [toggleSidebar, setToggleSidebar] = useRecoilState(sidebarAtom);
	const selectedLanguage = useRecoilValue(languageAtom);
	const pageHasSidebar = useRecoilValue(hasSidebarAtom);
	const baseUrl = useRecoilValue(urlAtom);
	const fetchParams = {
		url: baseUrl,
		language: selectedLanguage,
		file: 'menu',
		subSelect: 'filter-menu',
		subFolder: 'locales'
	};
	// PRO SLONA zde je repsonse {} i presto, ze by byt nemel.
	const { response, error, loading } = useAxiosText(fetchParams);

	const handleToggle = () => setToggleSidebar(!toggleSidebar);
	useEffect(() => {
		console.log('loaded');
		// console.log(JSON.stringify(response));
	}, []);

	return (
		<SidebarBody 
			toggle={toggleSidebar} 
			visibility={pageHasSidebar}
		>
			<SidebarItem>
				<SidebarItemSlot>
					<FilterCard />
				</SidebarItemSlot>
				<SidebarItemSlot>
					OK
				</SidebarItemSlot>
			</SidebarItem>
			<SidebarItem onClick={handleToggle}>
				<svg
					name="filter-button"
					width={fbStyle.width}
					height={fbStyle.height}
					viewBox="0 0 12 12"
				>
					<g>
						<path d={fbStyle.d1} fill={fbStyle.fill} />
						<path d={fbStyle.d2} fill={fbStyle.fill} />
						<path d={fbStyle.d3} fill={fbStyle.fill} />
					</g>
				</svg>
			</SidebarItem>
		</SidebarBody>
	);
}
