import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	root: "src/",
	publicDir: "../public/",
	base: "./",
	server: {
		host: true,
		open: true
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						// Return the directory name under node_modules as the chunk name
						const directories = id.split("/node_modules/")[1].split("/")
						const name = directories[0]
						return `vendor.${name}`
					}
				}
			}
		},
		chunkSizeWarningLimit: 1000,
		outDir: "dist",
		emptyOutDir: true,
		sourcemap: true
	}
})
