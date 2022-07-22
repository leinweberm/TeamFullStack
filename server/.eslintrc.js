// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'prettier'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'semi': [
			'error',
			'always'
		],
		'spaced-comment': [
			'error',
			'always'
		],
		'no-multiple-empty-lines': [
			'error',
			{ 'max': 1 }
		]
	},
	//  'editor.codeActionsOnSave': {
	// 	'source.fixAll': true
	// }
};
