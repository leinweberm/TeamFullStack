import styled from 'styled-components';
import * as STYLE from '../../appStyles';

export const SidebarBody = styled.div`
	position: fixed;
	z-index: 500;
	top: ${STYLE.NAVBAR_HEIGHT};
	left: ${props => props.toggle ? '0px;' : '-250px'};
	display: ${props => props.visibility ? 'grid' : 'none'};
	width: 285px;
	min-height: calc(100vh - ${STYLE.NAVBAR_HEIGHT});
	grid-template-columns: 250px 35px;
	grid-template-rows: 1fr;
	grid-template-areas: 'filter button';
	background-color: ${STYLE.GRAY_LIGHT};
	transition: 0.5s ease-in-out;
`;
export const SidebarItem = styled.div`
	position: relative;
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
	:nth-child(1) {
		padding: 0;
		height: auto;
	}
	:nth-child(2) {
		position: absolute;
		bottom: 25px;
		height: 30px;
		width: 200px;
		justify-content: center;
		margin-top: 10px;
		padding: 5px 0;
		color: ${STYLE.GRAY_MID};
		background-color: ${STYLE.GRAY_GAINSBORO};
	}
`;
