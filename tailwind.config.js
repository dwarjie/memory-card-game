/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"bg-image": "url('/src/assets/bg.png')",
			},
			colors: {
				overlay: "#433232",
			},
		},
		fontSize: {
			"small-title-sm": "3rem",
			"big-title-sm": "4rem",
			"button-sm": "2rem",
			"small-logo-sm": "2rem",
			"big-logo-sm": "2.25rem",
			"small-text": "1.5rem",
		},
		fontFamily: {
			"main-font": ["Crimson Text", "serif"],
		},
	},
	plugins: [],
};
