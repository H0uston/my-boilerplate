module.exports = {
	// Настройки проекта
	'env': {
		// Проект для браузера
		'browser': true,
		// Добавляем возможности ES2017
		'es2021': true
	},
	// Движок парсинга
	"parser": "@typescript-eslint/parser", // Specifies the ESLint parser
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
			'typescript': true
		},
		'sourceType': "module",
		'requireConfigFile': false,
	},
	'settings': {
		'react': {
			'version': "detect",
		},
	},
	"extends": [
		"plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
		"plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	],
	'rules': {
		'no-var': 'error',
		'semi': 'error',
		'indent': 'error',
		'no-multi-spaces': 'error',
		'space-in-parens': 'error',
		'no-multiple-empty-lines': 'error',
		'prefer-const': 'error',
		"@typescript-eslint/no-use-before-define": ["error"],
		"@typescript-eslint/no-explicit-any": 0,
		'quotes': ['error', 'single'],
		'object-curly-spacing': ['error', 'always'],
		'newline-before-return': 'error',
		'comma-dangle': ["error", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "never"
		}],
		"no-console": ["error", { "allow": ["warn", "error"] }],
		'no-debugger': "error",
	}
}
