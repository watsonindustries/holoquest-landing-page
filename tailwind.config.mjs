import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#73dcff',
				'primary-focus': '#33cefd',
				secondary: '#546aff',
				'secondary-focus': '#3640f5',

			},
			animation: {
				blob: 'blob 12s infinite'
			},
			fontFamily: {
        sans: ['Geologica', ...defaultTheme.fontFamily.sans],
      },
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(20px, -50px) scale(1.05)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.95)'
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)'
					}
				}
			}
		},
	},
	plugins: [],
}
