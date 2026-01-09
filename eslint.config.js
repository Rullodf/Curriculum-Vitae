import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
	// 1. Ignores globali
	{ ignores: ['dist'] },

	// 2. Configurazione base JS (questa è sicura e standard)
	js.configs.recommended,

	...tailwind.configs['flat/recommended'],

	// 3. Configurazione React consolidata
	{
		files: ['**/*.{js,jsx}'],

		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},

		// Impostazioni per il plugin React (spesso necessarie per evitare warning sulla versione)
		settings: {
			react: { version: '18.3' }, // O 'detect' se hai il pacchetto installato
		},

		// DEFINIZIONE PLUGINS: Qui sta la correzione.
		// Li definiamo esplicitamente come OGGETTI, mai come stringhe.
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},

		rules: {
			// A. Importiamo SOLO le regole dalle configurazioni raccomandate
			// Questo evita di importare definizioni di plugin in formato "legacy" errato
			...react.configs.flat.recommended.rules,
			...react.configs.flat['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			...reactRefresh.configs.vite.rules,

			// B. Le tue regole personalizzate (sovrascrivono quelle sopra)
			'react/prop-types': 'off',
			'react/self-closing-comp': ['error', {
				component: true,
				html: true,
			}],
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			'arrow-spacing': ['warn', { before: true, after: true }],
			'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
			'comma-dangle': ['error', 'always-multiline'],
			'comma-spacing': 'error',
			'comma-style': 'error',
			curly: ['error', 'multi-line', 'consistent'],
			'dot-location': ['error', 'property'],
			'handle-callback-err': 'off',
			indent: ['error', 'tab'], // Nota: Assicurati che non vada in conflitto con Prettier se lo usi
			'keyword-spacing': 'error',
			'max-nested-callbacks': ['error', { max: 4 }],
			'max-statements-per-line': ['error', { max: 2 }],
			'no-console': 'off',
			'no-empty-function': 'error',
			'no-floating-decimal': 'error',
			'no-inline-comments': 'off',
			'no-lonely-if': 'error',
			'no-multi-spaces': 'error',
			'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
			'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
			'no-trailing-spaces': 'off',
			'no-var': 'error',
			'no-undef': 'error',
			'object-curly-spacing': ['error', 'always'],
			'prefer-const': 'error',
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			'space-before-blocks': 'error',
			'space-before-function-paren': ['error', {
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			}],
			'space-in-parens': 'error',
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			'spaced-comment': 'error',
			yoda: 'error',
			'tailwindcss/classnames-order': 'warn',
			'tailwindcss/no-custom-classname': 'off',
		},
	},
];
