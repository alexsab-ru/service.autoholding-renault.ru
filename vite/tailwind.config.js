const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['../**/*.html'],
	theme: {
		colors: {
			blue: '#0C90D9',
			yellow: '#EFDF00',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: {
				100: '#F2F2F2',
				300: '#D9D9D6',
				500: '#8C8C8B',
				700: '#656666',
				900: '#3E3F40'
			}
		},
		extend: {
			fontFamily: {
				sans: ['NouvelR', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
