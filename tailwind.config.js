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
			keyframes: {
				grow: {
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1)" },
				},
			},
			animation: {
				"anim-grow": "grow .4s ease-out",
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
