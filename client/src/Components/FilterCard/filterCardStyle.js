import styled from "styled-components";
import * as STYLE from '../../appStyles';
import Select from 'react-select';

export const FilterCardBody = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   overflow: visible;
   width: ${props => props.width ? `${props.width}` : '100%'};
   border-top: 1px solid ${STYLE.GRAY_GAINSBORO};
   margin-bottom: 10px;
`;
export const FilterSelect = styled(Select)`
   color: black;
   height: 100%;
   size: 10;
`;
export const SectionTitle = styled.p`
   font-size: 15px;
   padding: 8px;
   font-weight: 600;
`;