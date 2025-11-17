import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	include: ["./src/**/*.{ts,tsx}"],
	exclude: [],
	jsxFramework: "solid",
	outdir: "styled-system",
	theme: {
		extend: {
			tokens: {
				colors: {
					brand: {
						// Cyber purple - main brand color
						primary: { value: "#a855f7" },
						// Electric cyan - accent
						cyan: { value: "#06b6d4" },
						// Neon pink - highlight
						pink: { value: "#ec4899" },
						// Deep space
						dark: { value: "#0a0a0f" },
						darker: { value: "#050507" },
						// Neural blue
						neural: { value: "#3b82f6" },
						// AI green
						ai: { value: "#10b981" },
					},
					gray: {
						50: { value: "#fafafa" },
						100: { value: "#f4f4f5" },
						200: { value: "#e4e4e7" },
						300: { value: "#d4d4d8" },
						400: { value: "#a1a1aa" },
						500: { value: "#71717a" },
						600: { value: "#52525b" },
						700: { value: "#3f3f46" },
						800: { value: "#27272a" },
						900: { value: "#18181b" },
					},
				},
				animations: {
					glow: {
						value: "glow 2s ease-in-out infinite alternate",
					},
					float: {
						value: "float 6s ease-in-out infinite",
					},
					pulse: {
						value: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
					},
				},
			},
			keyframes: {
				glow: {
					"0%": { filter: "brightness(1) drop-shadow(0 0 10px currentColor)" },
					"100%": {
						filter: "brightness(1.2) drop-shadow(0 0 20px currentColor)",
					},
				},
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-20px)" },
				},
				pulse: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.5 },
				},
			},
		},
	},
});
