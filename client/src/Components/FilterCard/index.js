import React from 'react';
import makeAnimated from 'react-select/animated';

import { FilterCardBody, FilterSelect, SectionTitle } from './filterCardStyle';

export default function FilterCard(params) {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	];

	return (
		<FilterCardBody>
			<SectionTitle>HEADER</SectionTitle>
			<FilterSelect options={options}></FilterSelect>
		</FilterCardBody>
	);
}
