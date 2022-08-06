import styled from 'styled-components';

import * as STYLE from '../../appStyles';

export const SidebarBody = styled.div`
	position: fixed;
	z-index: 500;
	left: -250px;
	top: ${STYLE.NAVBAR_HEIGHT};
	// display: grid;
	display: ${props => props.visibility ? 'grid' : 'none'};
	width: 285px;
	min-height: calc(100vh - ${STYLE.NAVBAR_HEIGHT});
	grid-template-columns: 250px 35px;
	grid-template-rows: 1fr;
	grid-template-areas: 'filter button';
	background-color: ${STYLE.GRAY_LIGHT};
	${(props) => {
		if (props.toggle === false) {
			return `
            left: -250px;
            transition: 0.5s ease-in-out;
         `;
		} else if (props.toggle === true) {
			return `
            left: 0px;
            transition: 0.5s ease-in-out;
         `;
		}
	}};
`;
export const SidebarItem = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-right: 1px solid ${STYLE.WHITE_FULL};
	:nth-child(1) {
		grid-area: filter;
		padding: 10px;
	}
	:nth-child(2) {
		grid-area: button;
		padding-top: 10px;
		cursor: pointer;
		border-left: 1px solid ${STYLE.GRAY_GAINSBORO};
	}
`;
export const SidebarItemSlot = styled(SidebarItem)`
	border: none;
	width: 100%;
	height: auto;
	:nth-child(1) {
		background-color: red;
		overflow: auto;
	}
	:nth-child(2) {
		justify-content: center;
		margin-top: 10px;
		padding: 5px 0;
		color: ${STYLE.GRAY_MID};
		background-color: ${STYLE.GRAY_GAINSBORO};
	}
`;
