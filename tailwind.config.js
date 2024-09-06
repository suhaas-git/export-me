/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,css,svg}'],
	theme: {
		extend: {
			colors: {
				neutral: {
					750: '#3e3e3e',
					250: '#b2b2b2'
				},
				gray: {
					250: '#efefef'
				},
				amber: {
					60: '#ffecde',
					650: '#ff7711'
				}
			}
		}
	},

	plugins: []
};
