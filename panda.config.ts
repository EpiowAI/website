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
						primary: { value: "#0066ff" },
						secondary: { value: "#00ccff" },
						dark: { value: "#0a0a0f" },
						light: { value: "#f8f9fa" },
					},
				},
			},
		},
	},
});
