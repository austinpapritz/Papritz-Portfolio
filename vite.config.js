import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	root: "src/",
	publicDir: "public/",
	base: "./",
	server: {
		host: true,
		open: true
	},
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		sourcemap: true
	}
})
