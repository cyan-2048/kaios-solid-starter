import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import polyfillKaiOS from "./scripts/vite";

export default defineConfig({
	plugins: [solidPlugin(), polyfillKaiOS()],
	server: {
		port: 3000,
	},
	build: {
		target: "es6",
		cssTarget: "firefox48",
		cssCodeSplit: false,
		modulePreload: false,
		assetsInlineLimit: 0,
		minify: true,
		ssr: false,
		rollupOptions: {
			output: {
				format: "iife",
			},
		},
	},
	worker: {
		plugins: [polyfillKaiOS()],
	},
});
