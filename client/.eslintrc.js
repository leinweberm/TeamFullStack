// eslint-disable-next-line no-undef
module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		'prettier',
		"plugin:react/jsx-runtime"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
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
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			'always'
		],
		'arrow-body-style': [
			'error',
			'as-needed'
		],

	},
	// 'editor.codeActionsOnSave': {
	// 	'source.fixAll': true
	// }
};
