import axios from 'axios';

function axiosAuth(axiosParams) {
	let { data } = axiosParams;

	const body = {
		...data,
		author: {
			name: process.env.REACT_APP_AUTHOR_NAME,
			lastName: process.env.REACT_APP_AUTHOR_LAST_NAME,
		},
	};

	axiosParams = { ...axiosParams, data: body };

	return axiosParams;
}

const instance = axios.create({
	baseURL: process.env.REACT_APP_URL_BASE,
	timeout: 10000,
	headers: {
		'X-Author-Name': process.env.REACT_APP_AUTHOR_NAME,
		'X-Author-Last-Name': process.env.REACT_APP_AUTHOR_LAST_NAME,
	},
});

export { instance, axiosAuth };
