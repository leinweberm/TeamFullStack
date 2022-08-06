import styled from "styled-components";

import * as STYLE from '../../appStyles';
import { ReactComponent as FiltButton } from '../../Assets/vector/filterButton.svg';

export const SidebarBody = styled.div`
   position: fixed;
   z-index: 500;
   left: -250px;
   top: ${STYLE.NAVBAR_HEIGHT};
   display: grid;
   width: 285px;
   min-height: calc(100vh - ${STYLE.NAVBAR_HEIGHT});
   grid-template-columns: 250px 35px;
   grid-template-rows: 1fr;
   grid-template-areas: 'filter button';
   background-color: ${STYLE.GRAY_LIGHT};
   ${props => {
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
		if (props.visible === false) {
			return `
            display: none;
         `;
		} else if (props.visible === true) {
			return`
            display: grid;
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
   :nth-child(1){
      grid-area: filter;
      padding: 15px;
      border-right: 1px solid ${STYLE.WHITE_FULL};
   }
   :nth-child(2){
      grid-area: button;
      padding-top: 10px;
      cursor: pointer;
      border-left: 1px solid ${STYLE.GRAY_GAINSBORO};
      border-right: 1px solid ${STYLE.WHITE_FULL};
   }
`;
export const FilterButton = styled(FiltButton)`
   fill: green;
   height: 20px;
   width: 20px;
   margin-top: 10px;
`;