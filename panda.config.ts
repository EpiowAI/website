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
						primary: { value: "#3b82f6" },
						secondary: { value: "#8b5cf6" },
						accent: { value: "#06b6d4" },
						dark: { value: "#0f172a" },
						darker: { value: "#020617" },
						light: { value: "#f8fafc" },
					},
					gray: {
						50: { value: "#f8fafc" },
						100: { value: "#f1f5f9" },
						200: { value: "#e2e8f0" },
						300: { value: "#cbd5e1" },
						400: { value: "#94a3b8" },
						500: { value: "#64748b" },
						600: { value: "#475569" },
						700: { value: "#334155" },
						800: { value: "#1e293b" },
						900: { value: "#0f172a" },
					},
				},
			},
		},
	},
});
