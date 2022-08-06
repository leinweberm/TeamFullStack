/* eslint-disable no-undef */
const axios = require('axios').default;
import { useState, useEffect } from 'react';

/* function params:
{
	language: recoil atom, 
	url: recoil atom,
	subFolder: 'string', 
	file: 'string-file-name-without-language-tag', 
	subSelect: 'string-for-select'
} */
export default function useAxiosText(params) {
	const [response, setResponse] = useState({});
	const [error, setError] = useState('');
	const [loading, setloading] = useState(true);

	const fetchData = () => {
		axios.get(`${params.url}/${params.subFolder}/${params.file}${params.language}.json`)
			.then((res) => {
				let tempText =(res.data);
				setResponse(tempText[params.subSelect]);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setloading(false);
			});
	};
	// PRO SLONA   
	// useEffect(() => {
	// 	fetchData();
	// }, []);
	(() => {
		fetchData();
	})();

	return { response, error, loading };
};

